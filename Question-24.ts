// <<<<< QUESTION-24 >>>>>>>

//Tests for equality and inequality with strings
let str1: string = "Malik"
let str2: string = "malik"
console.log("\nTests for equality and inequality with strings\n")
console.log(str1 === str1)
console.log(str1 === str2)


//Tests using the lower case function
console.log("\nTests using the lower case function\n")
console.log(str1.toLowerCase() === str1.toLowerCase())
console.log(str1.toLowerCase() === str2.toLowerCase())


// Numerical Tests 
console.log("Numerical Tests ")
let number1: number = 10
let number2: number = 5
let number3: number = 5

// Equality Test
console.log("\nEquality Test")
console.log(number1 === number2)
console.log(number2 === number3)

{
    let number3: number = 7
// Inequality Test
console.log("\nInequality Test")
console.log(number1 !== number2)
console.log(number2 !== number3)

// Greater Than Test
console.log("\nGreater Than Test")
console.log(number1 > number2)
console.log(number2 > number3)

// Less Than Test
console.log("\nLess Than Test")
console.log(number1 < number2)
console.log(number2 < number3)

}

// Greater Than or Equal to Test
console.log("\nGreater Than or Equal to Test")
console.log(number1 >= number2)
console.log(number2 >= number3)

// Less Than or Equal to Test
console.log("\nLess Than or Equal to Test")
console.log(number1 <= number2)
console.log(number2 <= number3)



// Tests using "and" and "or" operators
console.log("\nTests using AND operators")
console.log((number1 <= number2) && (number2=== number3))
console.log((number1 >= number2) && (number2===number3))

console.log("\nTests using OR operators")
console.log((number1 <= number2) || (number2=== number3))
console.log((number1 >= number2) || (number2===number3))

{
let numbers: number[] = [1, 2, 3, 4, 5]
console.log(numbers)
// Test whether an item is FOUND in an array
console.log("\nTest whether an item is in an array")

if(numbers.indexOf(3) > 0)
     console.log("Yes the searched item [3] is FOUND in array", numbers)
else    
    console.log("Searched item NOT FOUND [3] in the array", numbers)

// Test whether an item is NOT FOUND in an array
console.log("\nTest whether an item is in an array")

if(numbers.indexOf(10) > 0)
     console.log("Yes the searched item [10] is FOUND in array", numbers)
else    
    console.log("Searched item NOT FOUND [10] in the array", numbers)
}

