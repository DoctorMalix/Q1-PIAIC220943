let arr1=[1,3,-4,7,8,-9,11,12,-14,13,16,15,17,-18,20];

// [[[[ FIND EVEN NUMBERS IN ARRAY]]]]
function evenNum(arr: any)
{
    let n=0;
    for(n=0; n< arr.length; n++)
    {
        if((arr1[n] > 0) && (arr1[n]%2) == 0 )
            console.log(`The number ${arr1[n]} is EVEN`)
    }
}

// [[[[ FIND ODD NUMBERS IN ARRAY]]]]
function oddNum(arr: any)
{
    let n=0;
    for(n=0; n< arr.length; n++)
    {
        if((arr1[n] > 0) && (arr1[n]%2) > 0 )
            console.log(`The number ${arr1[n]} is ODD`)
    }
}

// [[[[ SUM OF NUMBERS IN ARRAY]]]]
function sumOfArry(arr: any)
{
    let n=0;
    let sum = 0;
    for(n=0; n< arr.length; n++)
    {
        sum = sum + arr[n];
    }
    console.log(`The sum of all array elements is = ${sum}`)
}

// [[[[ FIND MAXIMUM NUMBER IN ARRAY]]]]
function maxNum(arr: any)
{
    let n=0;
    let maxNo = arr[0];
    for(n=0; n< arr.length-1; n++)
    {
        if(arr1[n] > arr1[n+1])
           maxNo = arr1[n];
        else  
           maxNo = arr1[n+1];   
    }
    console.log(`The Max number in array is ${maxNo}`)
}

// [[[[ SUM OF ALL POSITIVE NUMBERS IN ARRAY]]]]
function positiveNumSum(arr: any)
{
    let n=0;
    let sum = 0;
    for(n=0; n< arr.length; n++)
    {
        if(arr1[n] > 0)
            sum = sum + arr[n];
    }
    console.log(`The SUM of all Positive numbers in array is ${sum}`)
}

// [[[[ SUM OF ALL NEGATIVE NUMBERS IN ARRAY]]]]
function negativeNumSum(arr: any)
{
    let n=0;
    let sum = 0;
    for(n=0; n< arr.length; n++)
    {
        if(arr1[n] < 0)
            sum = sum + arr[n];
    }
    console.log(`The SUM of all Negative numbers in array is ${sum}`)
}



evenNum(arr1);
oddNum(arr1);
sumOfArry(arr1);
maxNum(arr1);
positiveNumSum(arr1);
negativeNumSum(arr1);