"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


// var willContinue = confirm("What number would you like to enter");
//
// if(willContinue) {
//     //prompt number
//     var userInput = prompt("What number would you like to enter");
//
//     var isNum = !isNaN(userInput); NaN  //function isNum()
//
//     if(isNum) { // isNum is true
//         //we know we have a real number
//         //run all calculations in this if statment
//
//         // even or odd      //function even ()
//         if( userInput % 2 === 0 ){
//             alert("Number is even");
//         } else {
//             alert("number is odd");
//         }
//         // num + 100
//         var userNum = parseFloat(userInput);
//         alert("You number + 100 is " + (userNum + 100));
//         //negative or positive
//         if(userInput < 0) {
//             alert("You number is negative");
//
//         } else if(userInput > 0) {
//             alert("your number is positive");
//         } else {
//             alert("Your number is zero")
//         }
//     } else {
//         alert("Not a number")
//     }
// }
//
//
// function isNumFunc(input) { //taking user number input
//     return !isNaN(input) //true --> number, false --> NaN
// }
//
// function isEven(num) {
//     return num % 2 === 0; // true -> even, false -> odd
// }
//
// function plus100(num) {
//     var userNum = parseFloat(num);
//     return userNum + 100; //user inout value will be userInput + 100
// }
//
// function isNegative(num) {
//     return num < 0; // true --number is less that zero (negative)
//                     // false --> number is > 0 (positive)
// }
//
// function mainFunction(willContinue) {
//     // call all functions
//     if(willContinue) {
//         var userInput = prompt("What number would you like to enter");
//         if(isNumFunc(userInput)) {
//             // get number details
//             var isEvenMessage = (isEven(userInput) ? "your number is even" : "your number is odd")
//             alert(isEvenMessage);
//             // plus 100
//             alert(plus100(userInput)) ; //// alert the plus 100 string from the above function
//             var isNegative
//         }
//     }
// }
//
// var willContinueFunc = confirm("would you like to enter a number")
// mainFunction(willContinueFunc)
// var willContinue = confirm("What number would you like to enter");
//
// if(willContinue) {
//     //prompt number
//     var userInput = prompt("What number would you like to enter");
//
//     var isNum = !isNaN(userInput); NaN
//
//     if(isNum) {
//         //we know we have a real number
//         //run all calculations in this if statment
//
//         // even or odd
//         if( userInput % 2 === 0 ){
//             alert("Number is even");
//         } else {
//             alert("number is odd");
//         }
//         // num + 100
//         var userNum = parseFloat(userInput);
//         alert("You number + 100 is " + (userNum + 100));
//         //negative or positive
//         if(userInput < 0) {
//             alert("You number is negative");
//
//         } else if(userInput > 0) {
//             alert("your number is positive");
//         } else {
//             alert("Your number is zero")
//         }
//     } else {
//         alert("Not a number")
//     }
// }

// var confirmInput = confirm("Would you like to put in a number?");
// var input = prompt("Please type in number.");
//
// if(isNaN(input)){
//     alert("This is not a number");
// } else {
//     if(input % 2 === 0){ //this code runs if it even
//         alert("NUmber is is even");
//     } else if(input % 2 === 1){ //this code runs if it odd
//         alert("Number is Odd")
//     } else { // this runs if it not even or odd
//         alert("this is not even or odd");
//     }
//         if(input + 100){
//             alert("This number plus 100 = " + (input + 100));
//         }
//             if(input >= 0){
//                 alert(" number is positive");
//             } else if(input <= 0){
//                 alert("number is negative");
//             } else {
//                 alert("what is wrong?")
//             }
// }


// alert("your number is a negative if false, and positive if ture: " + (input % 2 === 0));
// alert(Number(input + 100));
// alert(Math.sign(input));


// var  = (prompt("what kind of pizza do you like")).toLowerCase();
// console.log("User pizza input " + pizzaPreference1);
// function pizzaMessage(pizzaPreference1) {
//     var pizzaConfrimation
//     switch (pizzaPreference1) {
//         case "pineapple and hot sauce":
//             alert("Cool ");
//             break;
//         case "cheese":
//             alert("Basic");
//             break;
//         case "bacon":
//             alert("Yum");
//             break;
//         default:
//             alert(pizzaPreference1 + " isn't my favorite, but let's order some!");
//             break;
//     }
//     return pizzaConfrimation
// }

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    var colorMessage = "";
    if(color === "blue") {
        colorMessage = "Blue is color of sky";
    } else if(color === "red") {
        colorMessage = "berries are red";
    } else if(color === "cyan") {
        colorMessage = "cyan, what is that?";
    } else {
        colorMessage = "what is that";
    }
}


// var colorSelect = prompt("Please type a color");
// function analyzeColor() {
//     if (colorSelect === "blue") {
//         return "sky is blue too";
//     } else if (colorSelect === "red") {
//         return "berries are red";
//     } else if (colorSelect === "cyan") {
//         return "what is cyan?";
//     } else {
//         return "what is going on?";
//     }
// }
//
// console.log(analyzeColor(colorSelect));

// var analyzeColor = prompt("Please type a color ");
// switch(analyzeColor){
//     case "blue":
//         alert("The sky is blue too!");
//         break;
//     case "red":
//         alert("Berries are red!");
//         break;
//     case "cyan":
//         alert("I don't know what cyan is...");
//         break;
//     default:
//         alert("What are you talking about?");
//         break;
// }
// console.log(analyzeColor);


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//  switch(randomColor){
//      case randomColor:
// }
// console.log(randomColor);

// function colorRandom(){
//     return randomColor;
// }
// console.log(randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// var analyzeColor = prompt("Please type a color ");
// switch(analyzeColor){
//     case "blue":
//         alert("The sky is blue too!");
//         break;
//     case "red":
//         alert("Berries are red!");
//         break;
//     case "cyan":
//         alert("I don't know what cyan is...");
//         break;
//     default:
//         alert("What are you talking about?");
//         break;
// }
// console.log(analyzeColor);
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var colorAna = prompt("Please enter color here")
//
// console.log(analyzeColor(colorAna));
// alert(analyzeColor(colorAna))
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// var discounted = prompt("enter lucky number");
// function calculateTotal() {
//     if(discounted === )
// }

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);


function isOdd(input) {
    // return (input % 2 === 1);
    return parseInt(input, 10) % 2 !== 0;
}

// Create a function that takes two numbers as arguments
// and return their sum.
function sumTwo(a, b){
    return a + b;
}

// console.log(sumTwo(1, 3));

// function notNotNot(a, b) {
//     return ((a % 2 === 0) && (b === true)) || ((a % 2 !== 0) && (b === ~false));
// }
//
// console.log(notNotNot(3, false));

//TODO: Truthy or Falsy?
//A value is said to be "truthy" if it evaluates to true in a Boolean context. All values are truthy in JavaScript unless they're one of the following:
// false
// null
// undefined
// 0
// NaN
// ""
//
// In JavaScript, an empty object and an empty array are both considered "truthy," but an empty string is considered false when evaluated as a Boolean (this behavior is what we call "falsey").
//
// Create a function that takes an argument of any data type and returns 1 if it's truthy and 0 if it's falsy.

function truthy(x){
    return Boolean(x) === true ? 1 : 0
}

// console.log(truthy(""));

function truthyFalsy(input) {
    return input ? console.log('1') : console.log('0');
}
truthyFalsy("0");








// Convert Hours and Minutes into Seconds
// Published by Érick in JavaScriptLANGUAGES
// C++
// Java
// JavaScript
// Python
// Ruby
// Translate
// language_fundamentalsmath
// Write a function that takes two integers (hours, minutes) and converts them into seconds.
//     Examples
// convert(1, 3) ➞ 3780
// convert(2, 0) ➞ 7200
// convert(0, 0) ➞ 0

function timeConvert(hours, minutes){
    return (hours * 3600) + (minutes * 60);
}

console.log(timeConvert(1, 3));
console.log(timeConvert(2, 0));
"hello"