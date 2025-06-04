/**
 * Retrieves a login token for the specified account. If the token does not exist,
 * it fetches a new one using the provided username and password and stores it for future use.
 *
 * @param {string} account - The account identifier for which the login token is requested.
 * @param {string} username - The username used to get the login token.
 * @param {string} password - The password associated with the username for the account.
 * @return {Promise<string>} A promise that resolves to the login token as a string.
 */
export declare function getLoginToken(account: string, username: string, password: string): Promise<string>;
/**
 * Checking in or out action
 *
 * @enum {string}
 * @readonly
 */
export declare enum Check {
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
export declare function checkPageInOrOut(xAuthToken: string, site: string, path: string, action: Check): Promise<string>;
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
export declare function findAndReplaceAllInPage(xAuthToken: string, site: string, path: string, findAndReplaceArray: FindAndReplace[], errorOut?: boolean): Promise<string>;
/**
 * Fetches all calendar entries for a specified site and optional categories.
 *
 * @param {string} xAuthToken - The authentication token used to access the API.
 * @param {string} site - The site from which calendar entries should be fetched.
 * @param {string[]} [categories=[]] - An optional array of category names to filter calendar entries.
 * @return {Promise<string>} A promise that resolves to the response text containing calendar entries.
 */
export declare function getAllCalendarEntries(xAuthToken: string, site: string, categories?: string[]): Promise<string>;
/**
 * Represents a gallery asset
 */
export interface GalleryAsset {
    name: string;
    type: number;
    description: string;
    tags: any[];
    gallery: any;
}
/**
 * UNTESTED: Fetches the content of an asset from a specified site using the provided token for authentication.
 *
 * @param {string} site - The site from which the asset should be fetched.
 * @param {string} token - The authentication token required to access the asset.
 * @param {number} asset - The identifier of the asset to be retrieved.
 * @return {Promise<string>} A promise that resolves to the content of the asset in string format.
 */
export declare function UNTESTED_getAsset(site: string, token: string, asset: number): Promise<string>;
/**
 * Represents a new gallery asset
 */
export interface NewGalleryAsset {
    name: string;
    type: number;
    description: string;
    tags: string[];
    thumbnail_height: number;
    thumbnail_width: number;
    force_crop: boolean;
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
export declare function UNTESTED_transferGalleryAsset(assetNumber: number, newSiteToken: string, oldSiteToken: string, site: string, defaultTag: string): Promise<number>;
/**
 * UNTESTED: Checks an asset in or out at a specified site with a given action.
 *
 * @param {string} xAuthToken The authentication token required for API access.
 * @param {string} site The site where the action is to be performed.
 * @param {number} asset The ID of the asset to check in or out.
 * @param {Check} action Specifies the action to perform on the asset (e.g., check-in or check-out).
 * @return {Promise<string>} A promise that resolves to a response string indicating the result of the operation.
 */
export declare function UNTESTED_checkAssetInOrOut(xAuthToken: string, site: string, asset: number, action: Check): Promise<string>;
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
export declare function UNTESTED_transferImagesForGalleryAsset(oldSiteToken: string, oldSiteAssetId: number, newSiteToken: string, newSiteAssetId: number, newSite: string, oldSite: string): Promise<void>;
