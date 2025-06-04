// noinspection JSUnusedGlobalSymbols

import {execSync} from "child_process";

/**
 * Returns a secret from 1Password
 * @param opPath {string} The path to the secret (must include `op://`)
 */
export function getOpSecret(opPath: string): string {
    return execSync(`op read "${opPath}"`)
        .toString()
        .replace(/\n/g, '');
}