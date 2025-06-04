// noinspection JSUnusedGlobalSymbols
/**
 * Enum representing ANSI escape codes for text formatting and coloring in terminal output.
 * These escape codes are used to apply various colors, styles, and effects to the console text.
 */
export var CC;
(function (CC) {
    CC["End"] = "\u001B[0m";
    CC["Black"] = "\u001B[30m";
    CC["Red"] = "\u001B[31m";
    CC["Green"] = "\u001B[32m";
    CC["Yellow"] = "\u001B[33m";
    CC["Blue"] = "\u001B[34m";
    CC["Magenta"] = "\u001B[35m";
    CC["Cyan"] = "\u001B[36m";
    CC["White"] = "\u001B[37m";
    CC["BrightBlack"] = "\u001B[90m";
    CC["BrightRed"] = "\u001B[91m";
    CC["BrightGreen"] = "\u001B[92m";
    CC["BrightYellow"] = "\u001B[93m";
    CC["BrightBlue"] = "\u001B[94m";
    CC["BrightMagenta"] = "\u001B[95m";
    CC["BrightCyan"] = "\u001B[96m";
    CC["BrightWhite"] = "\u001B[97m";
    CC["BackgroundBlack"] = "\u001B[40m";
    CC["BackgroundRed"] = "\u001B[41m";
    CC["BackgroundGreen"] = "\u001B[42m";
    CC["BackgroundYellow"] = "\u001B[43m";
    CC["BackgroundBlue"] = "\u001B[44m";
    CC["BackgroundMagenta"] = "\u001B[45m";
    CC["BackgroundCyan"] = "\u001B[46m";
    CC["BackgroundWhite"] = "\u001B[47m";
    CC["BackgroundBrightBlack"] = "\u001B[100m";
    CC["BackgroundBrightRed"] = "\u001B[101m";
    CC["BackgroundBrightGreen"] = "\u001B[102m";
    CC["BackgroundBrightYellow"] = "\u001B[103m";
    CC["BackgroundBrightBlue"] = "\u001B[104m";
    CC["BackgroundBrightMagenta"] = "\u001B[105m";
    CC["BackgroundBrightCyan"] = "\u001B[106m";
    CC["BackgroundBrightWhite"] = "\u001B[107m";
    CC["Bold"] = "\u001B[1m";
    CC["CrossedOut"] = "\u001B[9m";
    CC["Italic"] = "\u001B[3m";
    CC["Underline"] = "\u001B[4m";
    CC["SlowBlink"] = "\u001B[5m";
    CC["RapidBlink"] = "\u001B[6m";
    CC["Reversed"] = "\u001B[7m";
    CC["Framed"] = "\u001B[51m";
    CC["Encircled"] = "\u001B[52m";
    CC["OverLined"] = "\u001B[53m";
})(CC || (CC = {}));
/**
 * Logs all available color and style combinations to the console for demonstration purposes.
 * Each combination is displayed with its corresponding color or style applied.
 */
export function logAllColors() {
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
 * Logs a message to the console with optional formatting based on the provided options.
 *
 * @param {string | any} message - The message to log.
 * This can be a string or any other type.
 * @param {LogOptions} [options={}] - Configuration options for logging.
 * Includes options such as color, spacing, and date suppression.
 * @return {void} Doesn't return any value.
 */
export function log(message, options = {}) {
    const opt = {
        color: options.color ? options.color : "",
        giveSpace: options.giveSpace ? options.giveSpace : false,
        suppressDate: options.suppressDate ? options.suppressDate : false,
    };
    const currentDate = new Date().toLocaleString();
    process.stdout.write(opt.color +
        (opt.suppressDate ? "" : `[${currentDate}] `) +
        (opt.giveSpace ? "\n\n" : ""));
    if (typeof message === "string") {
        process.stdout.write(message +
            (opt.color === "" ? "" : `${CC.End}`) +
            "\n");
    }
    else {
        console.log(message);
    }
    process.stdout.write((opt.color === "" ? "" : `${CC.End}`) +
        (opt.giveSpace ? "\n" : ""));
}
