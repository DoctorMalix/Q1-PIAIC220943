// <<<<< QUESTION-31 >>>>>>>
let UserNames: string[] = ['Ali', 'Fatima', 'Hassan', 'Sana']

while (UserNames.length > 0) {
  let removedName = UserNames.shift()
  console.log("\n Removed Name:", removedName)
  if (UserNames.length === 0) {
    console.log("\n We need to find some users!")
  }
}
