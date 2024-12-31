import readLine from "readline";
import { exec } from "child_process";
import os from "os";
import chalk from "chalk";

const userName = os.userInfo().username;
const deviceName = os.hostname();
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: chalk.green(`${userName}@${deviceName}:~$ `),
});

console.log(`Welcome master ${userName}`);

rl.prompt();

rl.on("line", (input) => {
  const inputCommand = input.trim();
  if (inputCommand.toLowerCase() === "exit") {
    console.log(chalk.blueBright("Good Bye Master !!!"));
    rl.close();
    return;
  }

  exec(inputCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(chalk.red(`Master, error on here: ${error.message}`));
    } else if (stderr) {
      console.error(chalk.yellow.underline(`stderr: ${stderr}`));
    } else {
      console.log(chalk.whiteBright(stdout));
    }
    rl.prompt();
  });
});

rl.on("close", () => {
  console.log(chalk.magenta("Exiting shell..."));
  process.exit(0);
});
