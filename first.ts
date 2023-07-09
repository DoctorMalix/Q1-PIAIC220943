// Testing Github Update
export {}
// There is no Builtin Titlecase function so we need to write it ourself
function toTitleCase(input: string): string {
    return input.toLowerCase().replace(/(?:^|\s)\w/g, (match) => {
      return match.toUpperCase()
    });
  }
  
  
//console.log('Hello World>>>>>>>')

// <<<< Question-2 >>>>
/* 2.	Personal Message: Store a person’s name in a variable, and print a message to that person. 
Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”*/
let name = 'malik Muhammad rauf'
console.log('Asalm O Alikum', name, 'would you like to learn some TypeScript today?')

// <<<< Question-3 >>>>
/*3.	Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, and titlecase.*/
let nameinupper  = name.toUpperCase()
console.log('Name in UPPER CASE =  ', nameinupper)

//Name in Lower Case
let nameinlower  = name.toLowerCase()
console.log('Name in lower case =  ', nameinlower)

// Name in Title Case
let nameinTitleCase  = toTitleCase(name)
console.log('Name in Title Case =  ', nameinTitleCase)


// <<<< Question-4 >>>>
console.log("Muhammad (PBUH) Said, \"Whoever goes out in search of knowledge is on the Path of ALLAH, until returning.\"")

// <<<< Question-5 >>>>
let famous_person = "Muhammad (PBUH)"
let message = "\"Whoever goes out in search of knowledge is on the Path of ALLAH, until returning.\""
console.log (famous_person, "Said,", message)


// <<<< Question-6 >>>>
let Strip_famous_person = "\tMuhammad (PBUH)\n"
console.log(" <<< Name WITHOUT Stripping")
console.log (Strip_famous_person)

console.log(" <<< Name WITH Stripping")
console.log (Strip_famous_person.trim())


// <<<< Question-7 >>>>
console.log("Division = ", 16/2)
console.log("Multiplication = ", 4*2)
console.log("Addition = ", 4+4)
console.log("Subtraction = ", 10-2)



// <<<< Question-8 >>>>
console.log("-----------------------------------------------------------------")
console.log(16/2)
console.log( 4*2)
console.log( 4+4)
console.log(10-2)
console.log("-----------------------------------------------------------------")




// <<<< Question-9 >>>>
let fav_num = 923219992660
let fav_num_msg = "The following Number \"which is my phone number\" is my Favourit Number : "
console.log (fav_num_msg, fav_num)

