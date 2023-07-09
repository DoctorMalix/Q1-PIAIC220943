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
console.log("Muhammad (PBUH) Said, \"Whoever goes out in search of knowledge is on the Path of ALLAH, until returning.\"");
// <<<< Question-5 >>>>
var famous_person = "Muhammad (PBUH)";
var message = "\"Whoever goes out in search of knowledge is on the Path of ALLAH, until returning.\"";
console.log(famous_person, "Said,", message);
// <<<< Question-6 >>>>
var Strip_famous_person = "\tMuhammad (PBUH)\n";
console.log(" <<< Name WITHOUT Stripping");
console.log(Strip_famous_person);
console.log(" <<< Name WITH Stripping");
console.log(Strip_famous_person.trim());
// <<<< Question-7 >>>>
console.log("Division = ", 16 / 2);
console.log("Multiplication = ", 4 * 2);
console.log("Addition = ", 4 + 4);
console.log("Subtraction = ", 10 - 2);
// <<<< Question-8 >>>>
console.log("-----------------------------------------------------------------");
console.log(16 / 2);
console.log(4 * 2);
console.log(4 + 4);
console.log(10 - 2);
console.log("-----------------------------------------------------------------");
// <<<< Question-9 >>>>
var fav_num = 923219992660;
var fav_num_msg = "The following Number \"which is my phone number\" is my Favourit Number : ";
console.log(fav_num_msg, fav_num);
// <<<< Question-10 >>>>
/*
let fav_num = 923219992660
let fav_num_msg = "The following Number \"which is my phone number\" is my Favourit Number : "
console.log (fav_num_msg, fav_num)

On first line of this program we declared a variable name fav_num and assigned a value
on the second line we declared a message variable fav_num_msg and stored required value
and on the third line we printed our message with the number on screen

====================================================================================
console.log("-----------------------------------------------------------------")
console.log(16/2)
console.log( 4*2)
console.log( 4+4)
console.log(10-2)
console.log("-----------------------------------------------------------------")

In this program  we print a line on the consol and did some basic calculation that
generate the value "8" in result and at the end printed an other line
*/
