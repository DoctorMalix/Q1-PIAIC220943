import inquirer from 'inquirer';
import chalk from 'chalk';
import { Qs } from './questions.js';
import calcFunc from './calculate.js';
async function test() {
    let score = 0;
    let i = 0;
    // for (const q of Qs) {
    for (i = 0; i < Qs.length; i++) {
        const { answer } = await inquirer.prompt([
            {
                type: 'input',
                name: 'answer',
                message: chalk.green(Qs[i].question) + '\n' + Qs[i].choices.join('\n') + chalk.yellow('\nChoose an option:\n') + chalk.yellow('[A, B, C] : '),
            },
        ]);
        if (answer.toUpperCase() === Qs[i].trueAns.toUpperCase()) {
            score++;
            console.log(chalk.bgGreen('Correct!\n'));
        }
        else {
            console.log(chalk.bgRed(`Wrong! The correct answer is: ${Qs[i].trueAns}\n`));
        }
    }
    // CALCULATING THE RESULT FROM calcFunc, Defined in calculate.ts module
    const { percent, wrong } = calcFunc(score, Qs.length);
    console.log(chalk.blue("============================================="));
    console.log(chalk.blue("              Quiz Completed."));
    console.log(chalk.blue("============================================="));
    console.log(chalk.blue("Your correct Answers are :\t"), chalk.green(score));
    console.log(chalk.blue("Your Wrong Answers are :\t"), chalk.green(wrong));
    console.log(chalk.blue("Total Questions were :\t\t"), chalk.green(Qs.length));
    console.log(chalk.blue("Your Percentage is :\t\t"), chalk.green(percent) + chalk.green(" %"));
    console.log(chalk.blue("============================================="));
}
test();
