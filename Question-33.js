// <<<<< QUESTION-32 >>>>>>>
var my_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var a = 0;
for (a = 0; a < my_numbers.length; a++) {
    if (my_numbers[a] === 1)
        console.log(my_numbers[a], "\bst");
    else if (my_numbers[a] === 2)
        console.log(my_numbers[a], "\bnd");
    else if (my_numbers[a] === 3)
        console.log(my_numbers[a], "\brd");
    else
        console.log(my_numbers[a], "\bth");
}
