import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter which TABLE you want to print ', (userInput1: string) => {
    const table =  parseInt(userInput1);
    let i: number = 0;
    for(i = 1; i <=10; i++) 
         console.log(table, " X ", i, "=", table * i);
    
    
    rl.close();
   
  });
