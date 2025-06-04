// noinspection JSUnusedGlobalSymbols
/**
 * Formats a given Date object into a string that is safe to use as a file system name.
 * The returned string includes the year, month, day, hours, minutes, and seconds,
 * separated by hyphens.
 *
 * @param {Date} date - The Date object to be formatted.
 * @return {string} A file system safe string representing the date and time.
 */
export function formatDateAsFileSystemSafe(date) {
    return (date.getFullYear().toString() + "-" +
        (date.getMonth() + 1).toString().padStart(2, "0") + "-" +
        date.getDate().toString().padStart(2, "0") + "-" +
        date.getHours().toString().padStart(2, "0") + "-" +
        date.getMinutes().toString().padStart(2, "0") + "-" +
        date.getSeconds().toString().padStart(2, "0"));
}
