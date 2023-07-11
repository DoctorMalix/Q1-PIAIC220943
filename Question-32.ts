// <<<<< QUESTION-32 >>>>>>>
let current_users: string[] = ['farhad', 'ahmed', 'sara', 'zainab', 'ali','Sarim'];
let new_users: string[] = ['FARHAD', 'john', 'SARA', 'ahmed', 'usman','Rehman'];
let i = 0
let j = 0
for (i = 0; i < new_users.length; i++) 
{
  let newUser = new_users[i]
  let isUsernameTaken = false

  for (j = 0; j < current_users.length; j++) 
  {
    if (current_users[j].toLowerCase() === newUser.toLowerCase()) 
    { isUsernameTaken = true
      break
    }
  }
  if (isUsernameTaken) 
      console.log("The username ",newUser, "is not available. Please enter a new username.");
  else 
      console.log("The username ",newUser, "is available.")
}



