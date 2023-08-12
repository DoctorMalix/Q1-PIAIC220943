import sumF from "./sum.js";
import mulF from "./mul.js";
import subF from "./sub.js";
import divF from "./div.js";
import inquirer from "inquirer";
import chalk from 'chalk';

let answer = await inquirer.prompt([
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));
{   name: "firstNum",
    type: "number",
    message: chalk.blue("Enter First Number ")
},

{
    name: "secondNum",
    type: "number",
    message: chalk.red("Enter Second Number ")
},

{
    name: "optr",
    type: "string",
    message: chalk.yellow("Which operation?") + chalk.red("(") + chalk.bgYellow(" + ") + chalk.bgRed(" - ") + chalk.bgGreen(" / ") + chalk.bgBlue(" * ") + chalk.red(")")
    }
 
])

//               ADDITION
if (answer.optr === "+"){
    console.log(chalk.yellow("The desired Result is : ") + sumF(answer.firstNum, answer.secondNum))
}

//               SUBTRACTION
else if (answer.optr === "-"){
    console.log(chalk.red("The desired Result is : ") + subF(answer.firstNum, answer.secondNum))
}

//              DIVISION
else if (answer.optr === "/"){
    console.log(chalk.green("The desired Result is : ")+ divF(answer.firstNum, answer.secondNum))
}

//              MULTIPLICATION
else if (answer.optr === "*"){
    console.log(chalk.blue("The desired Result is : ")+ mulF(answer.firstNum, answer.secondNum))
}


