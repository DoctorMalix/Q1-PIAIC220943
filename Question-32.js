// <<<<< QUESTION-32 >>>>>>>
var current_users = ['farhad', 'ahmed', 'sara', 'zainab', 'ali', 'Sarim'];
var new_users = ['FARHAD', 'john', 'SARA', 'ahmed', 'usman', 'Rehman'];
var i = 0;
var j = 0;
for (i = 0; i < new_users.length; i++) {
    var newUser = new_users[i];
    var isUsernameTaken = false;
    for (j = 0; j < current_users.length; j++) {
        if (current_users[j].toLowerCase() === newUser.toLowerCase()) {
            isUsernameTaken = true;
            break;
        }
    }
    if (isUsernameTaken)
        console.log("The username ", newUser, "is not available. Please enter a new username.");
    else
        console.log("The username ", newUser, "is available.");
}
