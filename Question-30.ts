// <<<<< QUESTION-30 >>>>>>>


let usernames: string[] = ["Admin", "Ali", "Sara", "Ahmed", "Fatima"];

for (let username of usernames) 
{
  if (username === "Admin") 
    console.log("Hello ", username," would you like to see a status report?")
   else 
    console.log("Hello ", username, " thank you for logging in again")
  
}
