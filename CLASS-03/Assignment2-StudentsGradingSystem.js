var promptSync = require("prompt-sync")();
var userName = promptSync("Enter your name : ");
var englishMarks = Number(promptSync("Enter English Marks :"));
var mathMarks = Number(promptSync("Enter Maths Marks :"));
var physicsMarks = Number(promptSync("Enter Physics Marks :"));
var chemestryMarks = Number(promptSync("Enter Chemestry Marks :"));
var urduMarks = Number(promptSync("Enter Urdu Marks :"));
var totalMarks = englishMarks + mathMarks + physicsMarks + chemestryMarks + urduMarks;
var grade = "";
var percentage = ((totalMarks / 500) * 100);
if (percentage > 90)
    grade = "A+";
else if (percentage > 70)
    grade = "B";
else if (percentage > 50)
    grade = "C";
else if (percentage > 40)
    grade = "D";
else
    grade = "F (Fail)";
console.log("==================================================================");
console.log("Dear Student ".concat(userName, " Following is your Result"));
console.log("==================================================================");
console.log("=====================[SUBJECT MARKS ]==============================");
console.log("English Marks--------------------------------------".concat(englishMarks));
console.log("Maths Marks----------------------------------------".concat(mathMarks));
console.log("Physics Marks--------------------------------------".concat(physicsMarks));
console.log("Chemestry Marks------------------------------------".concat(chemestryMarks));
console.log("Urdu Marks-----------------------------------------".concat(urduMarks));
console.log("==================================================================");
console.log("Total Marks----------------------------------------".concat(totalMarks));
console.log("Percentage-----------------------------------------".concat(percentage.toPrecision(4)));
// --------------------- Logic -----------------------------------------------
console.log("Your Grade is-----------------------------------------".concat(grade));
console.log("==================================================================");
