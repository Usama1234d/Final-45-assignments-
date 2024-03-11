// Assignment 11 
// Stroing name of few freinds in an array 
// importing chalk
import chalk from "chalk";
let freindsNames = ["Zain", "Muzammil", "Abdullah", "Ammar", "Adnan"]; // Array of string
console.log(chalk.blue(freindsNames[0]));
console.log(chalk.cyan(freindsNames[1]));
console.log(chalk.magenta(freindsNames[2]));
console.log(chalk.green(freindsNames[3]));
console.log(chalk.red(freindsNames[4]));
// Assignment 12
let freindsNames1 = ["Zain", "Muzammil", "Abdullah", "Ammar", "Adnan"];
console.log(chalk.bgBlueBright(`Hey! hope you are doing well ${freindsNames1[0]}`));
console.log(chalk.bgCyanBright(`Hey! hope you are doing well ${freindsNames1[1]}`));
console.log(chalk.bgMagentaBright(`Hey! Hope you are doing well ${freindsNames1[2]}`));
console.log(chalk.bgGreenBright(`Hey! hope you are doing well ${freindsNames[3]}`));
console.log(chalk.bgRedBright(`Hey! hope you are doing well ${freindsNames1[4]}`));
