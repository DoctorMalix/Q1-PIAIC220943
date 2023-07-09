"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// There is no Builtin Titlecase function so we need to write it ourself
function toTitleCase(input) {
    return input.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
        return match.toUpperCase();
    });
}
//console.log('Hello World>>>>>>>')
// <<<< Question-2 >>>>
/* 2.	Personal Message: Store a person’s name in a variable, and print a message to that person.
Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”*/
var name = 'malik Muhammad rauf';
console.log('Asalm O Alikum', name, 'would you like to learn some TypeScript today?');
// <<<< Question-3 >>>>
/*3.	Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase.*/
var nameinupper = name.toUpperCase();
console.log('Name in UPPER CASE =  ', nameinupper);
//Name in Lower Case
var nameinlower = name.toLowerCase();
console.log('Name in lower case =  ', nameinlower);
// Name in Title Case
var nameinTitleCase = toTitleCase(name);
console.log('Name in Title Case =  ', nameinTitleCase);
// <<<< Question-4 >>>>
// Whoever goes out in search of knowledge is on the Path of God until returning.”
console.log("Muhammad (PBUH) Said, \"Whoever goes out in search of knowledge is on the Path of ALLAH, until returning.\"");
