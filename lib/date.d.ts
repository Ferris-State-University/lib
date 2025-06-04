/**
 * Formats a given Date object into a string that is safe to use as a file system name.
 * The returned string includes the year, month, day, hours, minutes, and seconds,
 * separated by hyphens.
 *
 * @param {Date} date - The Date object to be formatted.
 * @return {string} A file system safe string representing the date and time.
 */
export declare function formatDateAsFileSystemSafe(date: Date): string;
