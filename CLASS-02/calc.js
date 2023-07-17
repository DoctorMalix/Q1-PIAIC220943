"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter which TABLE you want to print ', function (userInput1) {
    var table = parseInt(userInput1);
    var i = 0;
    for (i = 1; i <= 10; i++)
        console.log(table, " X ", i, "=", table * i);
    rl.close();
});
