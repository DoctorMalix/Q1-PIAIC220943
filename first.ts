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


// Question-11

let names: string[] = ["Farhad", "Daim", "Maaz", "Saif"]
console.log("\nFollowing is the list of my BEST Friends")
console.log("\nFriend 1 = ", names[0])
console.log("\nFriend 2 = ", names[1])
console.log("\nFriend 3 = ", names[2])
console.log("\nFriend 4 = ", names[3])

// Question-12

console.log("\n\n\n\n");
console.log("My Dear Friend,", names[0], ",Welcome to PIAIC Course")
console.log("My Dear Friend,", names[1], ",Welcome to PIAIC Course")
console.log("My Dear Friend,", names[2], ",Welcome to PIAIC Course")
console.log("My Dear Friend,", names[3], ",Welcome to PIAIC Course")

// Question-13
console.log("\n\n\n\n");
let transsport: string[] = ["TESLA Model Y", "Lexus Lineup", "Audi e-tron GT", "Mercedes Benz"];
console.log("I would like to own a", transsport[0]) 
console.log("I would like to own a", transsport[1])
console.log("I would like to own a", transsport[2])
console.log("I would like to own a", transsport[3])



// Question-14
let guests: string[] = ["Farhad", "Daim", "Maaz"]
console.log("\n\n\n\n");
console.log("\nDear", guests[0], "you are cordially invited to dinner today at 7 PM")
console.log("\nDear", guests[1], "you are cordially invited to dinner today at 7 PM")
console.log("\nDear", guests[2], "you are cordially invited to dinner today at 7 PM")



// Question-15

let guests: string[] = ["Farhad", "Daim", "Maaz"]
console.log("\n\n\n\n");
console.log("\nDear", guests[0], "you are cordially invited to dinner today at 7 PM")
console.log("\nDear", guests[1], "you are cordially invited to dinner today at 7 PM")
console.log("\nDear", guests[2], "you are cordially invited to dinner today at 7 PM")
console.log("\nDue to some reason", guests[1], "is unable to attend the dinner today")
console.log("\nSo we are Updating the guests list.")

// Printing the guests after Changing the guest
guests[1] = "Abdul Rehman"
console.log("\n\n\n\n");
console.log("\nChanged list of Guests")
console.log("\nDear", guests[0], "you are cordially invited to dinner today at 7 PM")
console.log("\nDear", guests[1], "you are cordially invited to dinner today at 7 PM")
console.log("\nDear", guests[2], "you are cordially invited to dinner today at 7 PM")




