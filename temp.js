// const chalk = require("chalk");
import chalk from "chalk";
import os from "os";
console.log(chalk.underline("steve"));
console.log(chalk.red.underline("steve-red-underline"));
console.log(chalk.red.underline.bold("steve-red-underline-bold"));
// const os = require("os");

// Get the system hostname
const systemName = os.userInfo();

console.log(`System name: ${systemName.username}`);
