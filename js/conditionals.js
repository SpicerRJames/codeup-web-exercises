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

var confirmInput = confirm("Would you like to put in a number?");
var input = prompt("Please type in number.");

if(isNaN(input)){
    alert("This is not a number");
} else {
    if(input % 2 === 0){ //this code runs if it even
        alert("NUmber is is even");
    } else if(input % 2 === 1){ //this code runs if it odd
        alert("Number is Odd")
    } else { // this runs if it not even or odd
        alert("this is not even or odd");
    }
        if(input + 100){
            alert("This number plus 100 = " + (input + 100));
        }
            if(input >= 0){
                alert(" number is positive");
            } else if(input <= 0){
                alert("number is negative");
            } else {
                alert("what is wrong?")
            }
}


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

var colorSelect = prompt("Please type a color");
function analyzeColor() {
    if (colorSelect === "blue") {
        return "sky is blue too";
    } else if (colorSelect === "red") {
        return "berries are red";
    } else if (colorSelect === "cyan") {
        return "what is cyan?";
    } else {
        return "what is going on?";
    }
}

console.log(analyzeColor(colorSelect));
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

 switch(randomColor){
     case randomColor:
}
console.log(randomColor);

// function colorRandom(){
//     return randomColor;
// }
// console.log(randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
var analyzeColor = prompt("Please type a color ");
switch(analyzeColor){
    case "blue":
        alert("The sky is blue too!");
        break;
    case "red":
        alert("Berries are red!");
        break;
    case "cyan":
        alert("I don't know what cyan is...");
        break;
    default:
        alert("What are you talking about?");
        break;
}
console.log(analyzeColor);
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var colorAna = prompt("Please enter color here")

console.log(analyzeColor(colorAna));
alert(analyzeColor(colorAna))
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

var calculateTotal = prompt()

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);