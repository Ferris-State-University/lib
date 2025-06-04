/**
 * Enum representing ANSI escape codes for text formatting and coloring in terminal output.
 * These escape codes are used to apply various colors, styles, and effects to the console text.
 */
export declare enum CC {
    End = "\u001B[0m",
    Black = "\u001B[30m",
    Red = "\u001B[31m",
    Green = "\u001B[32m",
    Yellow = "\u001B[33m",
    Blue = "\u001B[34m",
    Magenta = "\u001B[35m",
    Cyan = "\u001B[36m",
    White = "\u001B[37m",
    BrightBlack = "\u001B[90m",
    BrightRed = "\u001B[91m",
    BrightGreen = "\u001B[92m",
    BrightYellow = "\u001B[93m",
    BrightBlue = "\u001B[94m",
    BrightMagenta = "\u001B[95m",
    BrightCyan = "\u001B[96m",
    BrightWhite = "\u001B[97m",
    BackgroundBlack = "\u001B[40m",
    BackgroundRed = "\u001B[41m",
    BackgroundGreen = "\u001B[42m",
    BackgroundYellow = "\u001B[43m",
    BackgroundBlue = "\u001B[44m",
    BackgroundMagenta = "\u001B[45m",
    BackgroundCyan = "\u001B[46m",
    BackgroundWhite = "\u001B[47m",
    BackgroundBrightBlack = "\u001B[100m",
    BackgroundBrightRed = "\u001B[101m",
    BackgroundBrightGreen = "\u001B[102m",
    BackgroundBrightYellow = "\u001B[103m",
    BackgroundBrightBlue = "\u001B[104m",
    BackgroundBrightMagenta = "\u001B[105m",
    BackgroundBrightCyan = "\u001B[106m",
    BackgroundBrightWhite = "\u001B[107m",
    Bold = "\u001B[1m",
    CrossedOut = "\u001B[9m",
    Italic = "\u001B[3m",
    Underline = "\u001B[4m",
    SlowBlink = "\u001B[5m",
    RapidBlink = "\u001B[6m",
    Reversed = "\u001B[7m",
    Framed = "\u001B[51m",
    Encircled = "\u001B[52m",
    OverLined = "\u001B[53m"
}
/**
 * Logs all available color and style combinations to the console for demonstration purposes.
 * Each combination is displayed with its corresponding color or style applied.
 */
export declare function logAllColors(): void;
/**
 * Configuration options for logging behavior.
 *
 * @interface LogOptions
 *
 * @property {CC | string} [color]
 * Specifies the color to be used in the log output.
 * This can either be a predefined color code (CC) or a custom string representing the desired color.
 *
 * @property {boolean} [giveSpace]
 * Determines if additional spacing should be included in the log output for better readability.
 * Defaults to false when undefined.
 *
 * @property {boolean} [suppressDate]
 * Indicates whether the timestamp should be omitted from the log messages.
 * Defaults to false when undefined.
 */
export interface LogOptions {
    color?: CC | string;
    giveSpace?: boolean;
    suppressDate?: boolean;
}
/**
 * Logs a message to the console with optional formatting based on the provided options.
 *
 * @param {string | any} message - The message to log.
 * This can be a string or any other type.
 * @param {LogOptions} [options={}] - Configuration options for logging.
 * Includes options such as color, spacing, and date suppression.
 * @return {void} Doesn't return any value.
 */
export declare function log(message: string | any, options?: LogOptions): void;
