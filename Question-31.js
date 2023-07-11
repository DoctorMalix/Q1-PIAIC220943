// <<<<< QUESTION-31 >>>>>>>
var UserNames = ['Ali', 'Fatima', 'Hassan', 'Sana'];
while (UserNames.length > 0) {
    var removedName = UserNames.shift();
    console.log("\n Removed Name:", removedName);
    if (UserNames.length === 0) {
        console.log("\n We need to find some users!");
    }
}
