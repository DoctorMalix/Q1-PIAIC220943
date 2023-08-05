var arr1 = [1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, -18, 20];
// [[[[ FIND EVEN NUMBERS IN ARRAY]]]]
function evenNum(arr) {
    var n = 0;
    for (n = 0; n < arr.length; n++) {
        if ((arr1[n] > 0) && (arr1[n] % 2) == 0)
            console.log("The number ".concat(arr1[n], " is EVEN"));
    }
}
// [[[[ FIND ODD NUMBERS IN ARRAY]]]]
function oddNum(arr) {
    var n = 0;
    for (n = 0; n < arr.length; n++) {
        if ((arr1[n] > 0) && (arr1[n] % 2) > 0)
            console.log("The number ".concat(arr1[n], " is ODD"));
    }
}
// [[[[ SUM OF NUMBERS IN ARRAY]]]]
function sumOfArry(arr) {
    var n = 0;
    var sum = 0;
    for (n = 0; n < arr.length; n++) {
        sum = sum + arr[n];
    }
    console.log("The sum of all array elements is = ".concat(sum));
}
// [[[[ FIND MAXIMUM NUMBER IN ARRAY]]]]
function maxNum(arr) {
    var n = 0;
    var maxNo = arr[0];
    for (n = 0; n < arr.length - 1; n++) {
        if (arr1[n] > arr1[n + 1])
            maxNo = arr1[n];
        else
            maxNo = arr1[n + 1];
    }
    console.log("The Max number in array is ".concat(maxNo));
}
// [[[[ SUM OF ALL POSITIVE NUMBERS IN ARRAY]]]]
function positiveNumSum(arr) {
    var n = 0;
    var sum = 0;
    for (n = 0; n < arr.length; n++) {
        if (arr1[n] > 0)
            sum = sum + arr[n];
    }
    console.log("The SUM of all Positive numbers in array is ".concat(sum));
}
// [[[[ SUM OF ALL NEGATIVE NUMBERS IN ARRAY]]]]
function negativeNumSum(arr) {
    var n = 0;
    var sum = 0;
    for (n = 0; n < arr.length; n++) {
        if (arr1[n] < 0)
            sum = sum + arr[n];
    }
    console.log("The SUM of all Negative numbers in array is ".concat(sum));
}
evenNum(arr1);
oddNum(arr1);
sumOfArry(arr1);
maxNum(arr1);
positiveNumSum(arr1);
negativeNumSum(arr1);
