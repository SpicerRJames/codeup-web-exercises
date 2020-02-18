// Exercise 69
// Write a function definition named onlyPositiveNumbers that takes in sequence of numbers and returns the positive numbers in an array.

//make function
//itterate through ecah element in the array
//if the current element is positive, store in variable
//return that variable

function onlyPositiveNumbers(array){
    var posNums = [];
    array.forEach(function(numPos){
        //if the number is positive, push it to posNums
        if(numPos >= 0){
            posNums.push(numPos);
        }
    });
    return posNums;
}