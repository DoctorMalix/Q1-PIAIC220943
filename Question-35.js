// <<<<< QUESTION-35 >>>>>>>
{ // this block is placed due to variables in this program warns that
    // these variables are already declared in previous programs
    var animals = ['Dog', 'Cat', 'Goos'];
    var i = 0;
    for (i = 0; i < animals.length; i++) {
        console.log(animals[i]);
    }
    for (i = 0; i < animals.length; i++) {
        console.log("A", animals[i], "would make a great pet");
    }
    console.log("Any of these animals would make a great pet!");
}
