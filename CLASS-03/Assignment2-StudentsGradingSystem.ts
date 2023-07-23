const promptSync = require("prompt-sync")();
let userName = promptSync("Enter your name : ");
let englishMarks = Number (promptSync("Enter English Marks :"));
let mathMarks = Number (promptSync("Enter Maths Marks :"));
let physicsMarks = Number (promptSync("Enter Physics Marks :"));
let chemestryMarks = Number (promptSync("Enter Chemestry Marks :"));
let urduMarks = Number (promptSync("Enter Urdu Marks :"));
let totalMarks = englishMarks+mathMarks+physicsMarks+chemestryMarks+urduMarks;
let grade = "";

let percentage  = ((totalMarks / 500) * 100);

if(percentage>90)
    grade = "A+";
else if(percentage > 70)
    grade = "B";
else if(percentage > 50)
    grade = "C";
else if(percentage > 40)
    grade = "D";
else 
    grade = "F (Fail)";



console.log(`===================================================================`);
console.log(`Dear Student ${userName} Following is your Result`);
console.log(`===================================================================`);
console.log(`=====================[SUBJECT MARKS ]==============================`);
console.log(`English Marks--------------------------------------${englishMarks}`);
console.log(`Maths Marks----------------------------------------${mathMarks}`);
console.log(`Physics Marks--------------------------------------${physicsMarks}`);
console.log(`Chemestry Marks------------------------------------${chemestryMarks}`);
console.log(`Urdu Marks-----------------------------------------${urduMarks}`);
console.log(`==================================================================`);
console.log(`Total Marks----------------------------------------${totalMarks}`);
console.log(`Percentage-----------------------------------------${percentage.toPrecision(4)}`);

// --------------------- Logic -----------------------------------------------

console.log(`Your Grade is-----------------------------------------${grade}`);
console.log(`==================================================================`);
