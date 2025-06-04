// noinspection JSUnusedGlobalSymbols

/**
 * Enum representing ANSI escape codes for text formatting and coloring in terminal output.
 * These escape codes are used to apply various colors, styles, and effects to the console text.
 */
export enum CC {
    End = '\x1b[0m',
    Black = '\x1b[30m',
    Red = '\x1b[31m',
    Green = '\x1b[32m',
    Yellow = '\x1b[33m',
    Blue = '\x1b[34m',
    Magenta = '\x1b[35m',
    Cyan = '\x1b[36m',
    White = '\x1b[37m',
    BrightBlack = '\x1b[90m',
    BrightRed = '\x1b[91m',
    BrightGreen = '\x1b[92m',
    BrightYellow = '\x1b[93m',
    BrightBlue = '\x1b[94m',
    BrightMagenta = '\x1b[95m',
    BrightCyan = '\x1b[96m',
    BrightWhite = '\x1b[97m',
    BackgroundBlack = '\x1b[40m',
    BackgroundRed = '\x1b[41m',
    BackgroundGreen = '\x1b[42m',
    BackgroundYellow = '\x1b[43m',
    BackgroundBlue = '\x1b[44m',
    BackgroundMagenta = '\x1b[45m',
    BackgroundCyan = '\x1b[46m',
    BackgroundWhite = '\x1b[47m',
    BackgroundBrightBlack = '\x1b[100m',
    BackgroundBrightRed = '\x1b[101m',
    BackgroundBrightGreen = '\x1b[102m',
    BackgroundBrightYellow = '\x1b[103m',
    BackgroundBrightBlue = '\x1b[104m',
    BackgroundBrightMagenta = '\x1b[105m',
    BackgroundBrightCyan = '\x1b[106m',
    BackgroundBrightWhite = '\x1b[107m',
    Bold = '\x1b[1m',
    CrossedOut = '\x1b[9m',
    Italic = '\x1b[3m',
    Underline = '\x1b[4m',
    SlowBlink = '\x1b[5m',
    RapidBlink = '\x1b[6m',
    Reversed = '\x1b[7m',
    Framed = '\x1b[51m',
    Encircled = '\x1b[52m',
    OverLined = '\x1b[53m',
}

/**
 * Logs all available color and style combinations to the console for demonstration purposes.
 * Each combination is displayed with its corresponding color or style applied.
 */
export function logAllColors(): void {
    console.log(`Begin ========================================================================`);
    console.log(`${CC.Bold}This is Bold${CC.End}`);
    console.log(`${CC.Underline}This is Underline${CC.End}`);
    console.log(`${CC.Black}This is Black${CC.End}`);
    console.log(`${CC.Red}This is Red${CC.End}`);
    console.log(`${CC.Green}This is Green${CC.End}`);
    console.log(`${CC.Yellow}This is Yellow${CC.End}`);
    console.log(`${CC.Blue}This is Blue${CC.End}`);
    console.log(`${CC.Magenta}This is Magenta${CC.End}`);
    console.log(`${CC.Cyan}This is Cyan${CC.End}`);
    console.log(`${CC.White}This is White${CC.End}`);
    console.log(`${CC.BrightBlack}This is BrightBlack${CC.End}`);
    console.log(`${CC.BrightRed}This is BrightRed${CC.End}`);
    console.log(`${CC.BrightGreen}This is BrightGreen${CC.End}`);
    console.log(`${CC.BrightYellow}This is BrightYellow${CC.End}`);
    console.log(`${CC.BrightBlue}This is BrightBlue${CC.End}`);
    console.log(`${CC.BrightMagenta}This is BrightMagenta${CC.End}`);
    console.log(`${CC.BrightCyan}This is BrightCyan${CC.End}`);
    console.log(`${CC.BrightWhite}This is BrightWhite${CC.End}`);
    console.log(`${CC.BackgroundBlack}This is BackgroundBlack${CC.End}`);
    console.log(`${CC.BackgroundRed}This is BackgroundRed${CC.End}`);
    console.log(`${CC.BackgroundGreen}This is BackgroundGreen${CC.End}`);
    console.log(`${CC.BackgroundYellow}This is BackgroundYellow${CC.End}`);
    console.log(`${CC.BackgroundBlue}This is BackgroundBlue${CC.End}`);
    console.log(`${CC.BackgroundMagenta}This is BackgroundMagenta${CC.End}`);
    console.log(`${CC.BackgroundCyan}This is BackgroundCyan${CC.End}`);
    console.log(`${CC.BackgroundWhite}This is BackgroundWhite${CC.End}`);
    console.log(`${CC.BackgroundBrightBlack}This is BackgroundBrightBlack${CC.End}`);
    console.log(`${CC.BackgroundBrightRed}This is BackgroundBrightRed${CC.End}`);
    console.log(`${CC.BackgroundBrightGreen}This is BackgroundBrightGreen${CC.End}`);
    console.log(`${CC.BackgroundBrightYellow}This is BackgroundBrightYellow${CC.End}`);
    console.log(`${CC.BackgroundBrightBlue}This is BackgroundBrightBlue${CC.End}`);
    console.log(`${CC.BackgroundBrightMagenta}This is BackgroundBrightMagenta${CC.End}`);
    console.log(`${CC.BackgroundBrightCyan}This is BackgroundBrightCyan${CC.End}`);
    console.log(`${CC.BackgroundBrightWhite}This is BackgroundBrightWhite${CC.End}`);
    console.log(`${CC.Bold}This is Bold${CC.End}`);
    console.log(`${CC.CrossedOut}This is CrossedOut${CC.End}`);
    console.log(`${CC.Italic}This is Italic${CC.End}`);
    console.log(`${CC.Underline}This is Underline${CC.End}`);
    console.log(`${CC.SlowBlink}This is SlowBlink${CC.End}`);
    console.log(`${CC.RapidBlink}This is RapidBlink${CC.End}`);
    console.log(`${CC.Reversed}This is Reversed${CC.End}`);
    console.log(`${CC.Framed}This is Framed${CC.End}`);
    console.log(`${CC.Encircled}This is Encircled${CC.End}`);
    console.log(`${CC.OverLined}This is OverLined${CC.End}`);
    console.log(`End ========================================================================`);
}

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
export function log(message: string | any, options: LogOptions = {}): void {
    const opt: LogOptions = {
        color: options.color ? options.color : "",
        giveSpace: options.giveSpace ? options.giveSpace : false,
        suppressDate: options.suppressDate ? options.suppressDate : false,
    };
    const currentDate: string = new Date().toLocaleString();

    process.stdout.write(
        opt.color +
        (opt.suppressDate ? "" : `[${currentDate}] `) +
        (opt.giveSpace ? "\n\n" : "")
    );
    if (typeof message === "string") {
        process.stdout.write(
            message +
            (opt.color === "" ? "" : `${CC.End}`) +
            "\n"
        );
    } else {
        console.log(message);
    }
    process.stdout.write(
        (opt.color === "" ? "" : `${CC.End}`) +
        (opt.giveSpace ? "\n" : "")
    );
}