// noinspection JSUnusedGlobalSymbols

/**
 * Authenticates a user and retrieves an X-Auth-Token.
 *
 * @param {string} account - The account identifier for authentication.
 * @param {string} username - The username for authentication.
 * @param {string} password - The password for authentication.
 * @return {Promise<string>} A promise that resolves to the X-Auth-Token string upon successful authentication.
 */
async function getXAuthToken(
    account: string,
    username: string,
    password: string
): Promise<string> {
    const body = new URLSearchParams();
    body.append('skin', 'oucampus');
    body.append('account', account);
    body.append('username', username);
    body.append('password', password);
    const response: Response = await fetch('https://a.cms.omniupdate.com/authentication/login', {
        method: 'POST',
        body,
    });
    // console.log(await response.text());
    return (await response.json())["gadget_token"];
}

const tokens: Map<string, string> = new Map();

/**
 * Retrieves a login token for the specified account. If the token does not exist,
 * it fetches a new one using the provided username and password and stores it for future use.
 *
 * @param {string} account - The account identifier for which the login token is requested.
 * @param {string} username - The username used to get the login token.
 * @param {string} password - The password associated with the username for the account.
 * @return {Promise<string>} A promise that resolves to the login token as a string.
 */
export async function getLoginToken(account: string, username: string, password: string): Promise<string> {
    let token: string | undefined = tokens.get(account);
    if (token === undefined) {
        token = await getXAuthToken(account, username, password);
        tokens.set(account, token);
    }
    return token;
}

/**
 * Checking in or out action
 *
 * @enum {string}
 * @readonly
 */
export enum Check {
    In = "checkin",
    Out = "checkout"
}

/**
 * Executes an action to check in or check-out a page in a CMS using provided authentication and site details.
 *
 * @param {string} xAuthToken - The authentication token for authorization.
 * @param {string} site - The site identifier where the action is to be performed.
 * @param {string} path - The file path of the page to check in or out.
 * @param {Check} action - The action to perform, either check-in or check-out.
 * @return {Promise<string>} A promise that resolves to the response text from the CMS.
 */
export async function checkPageInOrOut(
    xAuthToken: string,
    site: string,
    path: string,
    action: Check
): Promise<string> {
    const body = new URLSearchParams({
        "site": site,
        "path": path
    });
    const response: Response = await fetch(
        "https://a.cms.omniupdate.com/files/" + action,
        {method: "POST", headers: {"X-Auth-Token": xAuthToken}, body: body}
    );
    return await response.text();
}

/**
 * Fetches the source code of a specific page from the CMS.
 *
 * @param {string} xAuthToken - The authentication token used to access the API.
 * @param {string} site - The string representing the target website.
 * @param {string} path - The path of the page whose source code is being requested.
 * @return {Promise<string>} A promise that resolves to the source code of the specified page.
 */
async function getPageSourceCode(
    xAuthToken: string,
    site: string,
    path: string
): Promise<string> {
    const query = new URLSearchParams({
        "site": site,
        "path": path
    });
    const response: Response = await fetch(
        `https://a.cms.omniupdate.com/files/source?${query.toString()}`,
        {headers: {'X-Auth-Token': xAuthToken}}
    );
    return (await response.json())["source"];
}

/**
 * Saves the page source code to the specified path on the given site.
 *
 * @param {string} xAuthToken - The authentication token used for authorization.
 * @param {string} site - The string representing the target site where the source code will be saved.
 * @param {string} path - The file path where the source code should be saved.
 * @param {string} source - The source code content to be saved.
 * @return {Promise<string>} A promise that resolves to the server response as a string.
 */
async function savePageSourceCode(
    xAuthToken: string,
    site: string,
    path: string,
    source: string
): Promise<string> {
    const body = new URLSearchParams({
        "site": site,
        "path": path,
        "wysiwyg": "false",
        "text": source
    });
    const response: Response = await fetch(
        `https://a.cms.omniupdate.com/files/save`,
        {method: "POST", headers: {'X-Auth-Token': xAuthToken}, body: body}
    );
    return await response.text();
}

/**
 * Represents a structure for performing find-and-replace operations.
 * It specifies the pattern to find and the corresponding replacement value.
 *
 * @interface FindAndReplace
 * @property {string | RegExp} find - The pattern to search for in a string.
 * This can be a string or a global regular expression.
 * @property {string} replace - The text used to replace matches of the `find` pattern.
 */
export interface FindAndReplace {
    find: string | RegExp;
    replace: string;
}

/**
 * Finds and replaces all specified strings in the source code of a page, optionally throwing an error if a string is not found.
 *
 * @param {string} xAuthToken - The authentication token for accessing the page.
 * @param {string} site - The string representing the target site.
 * @param {string} path - The path to the page to be modified.
 * @param {FindAndReplace[]} findAndReplaceArray - An array of find-and-replace operations, each specifying the string to find and its replacement.
 * @param {boolean} [errorOut=true] - If true, throws an error if a find string is not found on the page.
 * @return {Promise<string>} - A promise that resolves to a string representing the response after saving the updated page source code.
 */
export async function findAndReplaceAllInPage(
    xAuthToken: string,
    site: string,
    path: string,
    findAndReplaceArray: FindAndReplace[],
    errorOut: boolean = true
): Promise<string> {
    await checkPageInOrOut(xAuthToken, site, path, Check.Out);
    let source: string = await getPageSourceCode(xAuthToken, site, path);

    for (const findAndReplace of findAndReplaceArray) {
        const sourceAfterReplace: string = source.replaceAll(findAndReplace.find, findAndReplace.replace);
        if (sourceAfterReplace === source && errorOut)
            throw new Error(`Find string "${findAndReplace.find}" isn't found in the page`);
        source = sourceAfterReplace;
    }

    const ret: string = await savePageSourceCode(xAuthToken, site, path, source);
    await checkPageInOrOut(xAuthToken, site, path, Check.In);

    return ret;
}

/**
 * Fetches all calendar entries for a specified site and optional categories.
 *
 * @param {string} xAuthToken - The authentication token used to access the API.
 * @param {string} site - The site from which calendar entries should be fetched.
 * @param {string[]} [categories=[]] - An optional array of category names to filter calendar entries.
 * @return {Promise<string>} A promise that resolves to the response text containing calendar entries.
 */
export async function getAllCalendarEntries(
    xAuthToken: string,
    site: string,
    categories: string[] = []
): Promise<string> {
    const query: URLSearchParams = new URLSearchParams();
    for (const category of categories) {
        query.append("category", category);
    }
    let queryString: string = "";
    if (categories.length > 0) {
        queryString = `?${query.toString()}`;
    }
    const response: Response = await fetch(
        `https://a.cms.omniupdate.com/rs/calendars/${site}/events${queryString}`,
        {headers: {'X-Auth-Token': xAuthToken}}
    );
    console.debug(`https://a.cms.omniupdate.com/rs/calendars/${site}/events${queryString}`);
    return await response.text();
}

/**
 * Represents a gallery asset
 */
export interface GalleryAsset {
    name: string,
    type: number,
    description: string,
    tags: any[],
    gallery: any
}

/**
 * Represents an API response
 */
interface ApiResponse {
    asset: number,
    warnings: any
}

/**
 * UNTESTED: Fetches the content of an asset from a specified site using the provided token for authentication.
 *
 * @param {string} site - The site from which the asset should be fetched.
 * @param {string} token - The authentication token required to access the asset.
 * @param {number} asset - The identifier of the asset to be retrieved.
 * @return {Promise<string>} A promise that resolves to the content of the asset in string format.
 */
export async function UNTESTED_getAsset(site: string, token: string, asset: number): Promise<string> {
    const response: Response = await fetch(
        `https://a.cms.omniupdate.com/assets/view?asset=${asset}&site=${site}`,
        {headers: {'X-Auth-Token': token}}
    );
    return await response.text();
}

/**
 * Represents a new gallery asset
 */
export interface NewGalleryAsset {
    name: string,
    type: number,
    description: string,
    tags: string[],
    thumbnail_height: number,
    thumbnail_width: number,
    force_crop: boolean
}

/**
 * Creates a new gallery asset on the specified site using the provided details and token.
 *
 * @param {NewGalleryAsset} newAsset - An object containing details about the new gallery asset such as name, type,
 * description, dimensions, tags, and cropping settings.
 * @param {string} token - The authorization token required to authenticate the request.
 * @param {string} site - The site where the new gallery asset will be created.
 * @return {Promise<ApiResponse>} A promise resolving to the API response object containing the result of the
 * asset creation request.
 */
async function UNTESTED_makeNewGalleryAsset(newAsset: NewGalleryAsset, token: string, site: string): Promise<ApiResponse> {
    const body = new URLSearchParams({
        "name": newAsset.name,
        "site": site,
        "type": newAsset.type.toString(),
        "description": newAsset.description,
        "site_locked": "true",
        "thumbnail_height": newAsset.thumbnail_height.toString(),
        "thumbnail_width": newAsset.thumbnail_width.toString(),
        "force_crop": newAsset.force_crop.toString(),
    });
    for (const tag of newAsset.tags) {
        body.append("tags", tag);
    }
    const response = await fetch(
        "https://a.cms.omniupdate.com/assets/new",
        {method: "POST", headers: {"X-Auth-Token": token}, body: body}
    );
    return await response.json();
}

/**
 * Transfers a gallery asset from one system to another, using provided tokens and data.
 *
 * @param {number} assetNumber - The unique identifier of the gallery asset to be transferred.
 * @param {string} newSiteToken - The authentication token for the destination system.
 * @param {string} oldSiteToken - The authentication token for the source system.
 * @param {string} site - The source system's site identifier.
 * @param {string} defaultTag - A default tag to add to the gallery asset during the transfer.
 * @return {Promise<number>} A promise resolving to the ID of the newly created asset in the destination system.
 */
export async function UNTESTED_transferGalleryAsset(
    assetNumber: number,
    newSiteToken: string,
    oldSiteToken: string,
    site: string,
    defaultTag: string
): Promise<number> {
    const oldSiteAsset: GalleryAsset = JSON.parse(await UNTESTED_getAsset(site, oldSiteToken, assetNumber));

    const images: any[] = oldSiteAsset.gallery["childNodes"];
    const tags: string[] = [];
    for (const tag of oldSiteAsset.tags) {
        tags.push(tag["tag"]);
    }
    tags.push(defaultTag);
    const thumbnail_height: number = images.find(node => node["tagName"] === "thumbnailHeight")["childNodes"][0];
    const thumbnail_width: number = images.find(node => node["tagName"] === "thumbnailWidth")["childNodes"][0];
    const force_crop: boolean = images.find(node => node["tagName"] === "forceCrop")["childNodes"][0];

    const newAsset: NewGalleryAsset = {
        name: oldSiteAsset.name,
        type: oldSiteAsset.type,
        description: oldSiteAsset.description,
        tags: tags,
        thumbnail_height: thumbnail_height,
        thumbnail_width: thumbnail_width,
        force_crop: force_crop,
    };
    const response: ApiResponse = await UNTESTED_makeNewGalleryAsset(newAsset, newSiteToken, site);

    if ("error" in response) {
        throw new Error(`Error creating asset: ${response.error}`);
    }
    return response.asset;
}

/**
 * UNTESTED: Checks an asset in or out at a specified site with a given action.
 *
 * @param {string} xAuthToken The authentication token required for API access.
 * @param {string} site The site where the action is to be performed.
 * @param {number} asset The ID of the asset to check in or out.
 * @param {Check} action Specifies the action to perform on the asset (e.g., check-in or check-out).
 * @return {Promise<string>} A promise that resolves to a response string indicating the result of the operation.
 */
export async function UNTESTED_checkAssetInOrOut(
    xAuthToken: string,
    site: string,
    asset: number,
    action: Check
): Promise<string> {
    const body = new URLSearchParams({
        "asset": asset.toString(),
        "site": site,
    });
    const response = await fetch(
        `https://a.cms.omniupdate.com/assets/${action}`,
        {method: "POST", headers: {"X-Auth-Token": xAuthToken}, body: body}
    );
    return await response.text();
}

/**
 * UNTESTED: Transfers images associated with a gallery asset from one site to another.
 * This function moves image data from the `oldSite` gallery asset to the `newSite` gallery asset,
 * ensuring the proper metadata and thumbnails are handled during the transfer.
 *
 * @param {string} oldSiteToken - The authentication token for the old site.
 * @param {number} oldSiteAssetId - The ID of the gallery asset on the old site.
 * @param {string} newSiteToken - The authentication token for the new site.
 * @param {number} newSiteAssetId - The ID of the gallery asset on the new site.
 * @param {string} newSite - The name or identifier of the new site.
 * @param {string} oldSite - The name or identifier of the old site.
 * @return {Promise<void>} A promise that resolves when the image transfer process is complete.
 */
export async function UNTESTED_transferImagesForGalleryAsset(
    oldSiteToken: string,
    oldSiteAssetId: number,
    newSiteToken: string,
    newSiteAssetId: number,
    newSite: string,
    oldSite: string
): Promise<void> {
    await UNTESTED_checkAssetInOrOut(newSiteToken, newSite, newSiteAssetId, Check.Out);

    const asset: any = JSON.parse(await UNTESTED_getAsset(oldSite, oldSiteToken, oldSiteAssetId));
    const galleryChildNodes: any[] = asset["gallery"]["childNodes"];
    let imagesNode: any = null;
    let thumb_width: string = "";
    let thumb_height: string = "";
    for (const galleryChildNode of galleryChildNodes) {
        switch (galleryChildNode["tagName"]) {
            case "images":
                imagesNode = galleryChildNode;
                break;
            case "thumbnailWidth":
                thumb_width = galleryChildNode["childNodes"][0];
                break;
            case "thumbnailHeight":
                thumb_height = galleryChildNode["childNodes"][0];
        }
    }
    for (const imageNode of imagesNode["childNodes"]) {
        const staging_url: string = imageNode["staging_url"];

        let file_name: string = "";
        let title: string = "";
        let description: string = "";
        let caption: string = "";
        let link: string = "";
        for (const childNode of imageNode["childNodes"]) {
            switch (childNode["tagName"]) {
                case "title":
                    title = childNode["childNodes"][0];
                    break;
                case "description":
                    description = childNode["childNodes"][0];
                    break;
                case "caption":
                    caption = childNode["childNodes"][0];
                    break;
                case "link":
                    link = childNode["childNodes"][0];
                    break;
                case "friendlyName":
                    file_name = childNode["childNodes"][0];
            }
        }

        const imageResponse: Response = await fetch(staging_url);
        const imageBlob: Blob = await imageResponse.blob();

        const query = new URLSearchParams({
            site: newSite,
            asset: newSiteAssetId.toString(),
            thumb_width: thumb_width,
            thumb_height: thumb_height,
            title: title
        });

        const body = new FormData();
        body.append("image", imageBlob, file_name);
        body.append("title", title);

        const response = await fetch(
            `https://a.cms.omniupdate.com/assets/add_image?${query.toString()}`,
            {method: "POST", headers: {"X-Auth-Token": newSiteToken}, body}
        );
        const imageName: string = (await response.json())["image"];

        const image: any = {};
        image[imageName] = {
            "title": title,
            "description": description,
            "caption": caption,
            "link": link
        };

        const attrs: URLSearchParams = new URLSearchParams();
        attrs.append("asset", newSiteAssetId.toString());
        attrs.append("site", oldSite);
        attrs.append("images", JSON.stringify(image));

        await fetch(
            "https://a.cms.omniupdate.com/assets/save",
            {method: "POST", headers: {"X-Auth-Token": newSiteToken}, body: attrs}
        );

    }

    await UNTESTED_checkAssetInOrOut(newSiteToken, newSite, newSiteAssetId, Check.In);
}