"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin

// var isAdmin = true;
// if (isAdmin) {
//     console.log("Displaying Admin Navbar")
// }

//TODO Together: Send a 20% off coupon if its users birthday
var isBirthday = true;
if(isBirthday) {
    // send 20% Coupon
    console.log("Send Coupon");
}

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true

var isRainy = true;
    if (isRainy){
        alert("is raining")
    }


//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
var currentBalance = 10000;
var itemCost = 5000;
if(currentBalance > itemCost) {
    alert("You can buy it")
}


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0

// var currentLives = 0;
// // var neededLives = 1;
// //
// // if(neededLives > currentLives) {
// //     alert("Sorry, game over.")
// // }
//
// if(currentLives === 0){
//     alert("Game over")
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

// var itsSnowing = false;
// // var weather = 1;
// //
// // if(itsSnowing === weather) {
// //     alert("It is Snowing");
// // }
//
// if(itsSnowing) {
//     alert("It is snowing");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

// var numberInput = 11;
// var ten = 10;
//
// if(numberInput > ten) {
//     alert(true);
// }

//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.

function greaterThan10(number) {
    if(number > 10) {
        alert("Number is greater than 10")
    }
}



// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar

var isAdmin = true;
if (isAdmin) {
    console.log("Displaying Admin Navbar");
} else {
    console.log("Display normal navBar");
}

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"

var itRainy = false;
if(itRainy) {
    alert("It is rainy");
} else {
    alert("Have a horrible day!");
}

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

// var currentLives = 1;
// if(currentLives === 0){
//     alert("Game over")
// } else {
//     alert("Next level")
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

// var itsSnowing = false;
// if(itsSnowing) {
//     alert("It is rainy");
// } else {
//     alert("Have a horrible day!");
// }

// var weather = "snowing";
// if(weather === "snowing") {
//     alert("It is snow");
// } else {
//     alert("Have a horrible day!");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

var numberInput = 9;
if(numberInput > 10) {
    alert(true);
} else {
    alert(false);
}

//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.

function checkIfGameOver(numberOfLives) {
    if(numberOfLives === 0){
        return "Sorry game over";
    } else {
        return "Next level";
    }
}

console.log(checkIfGameOver(2));


// var currentLives = 1;
// function numberOfLives(currentLives) {
//     if (currentLives > 0) {
//         alert("Game over")
//     } else {
//         alert("Next level")
//     }
// }

// console.log(numberOfLives);

//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.



// SHOULD WE DELETE STUFF EXAMPLE




//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

var weather = "raining";

if(weather === "snowing") {
    alert("It is snowing")
} else if(weather === "raining") {
    alert("It is raining")
} else {
    alert("Have a nice day")
}

//TODO Together: refactor the above statement as a function

function checkWeather(weather) {
    if (weather === "snowing") {
        return "It's snowing";
    } else if(weather === "raining") {
        return "It's raining"
    } else {
        return "Have a good day";
    }
}

alert(checkWeather("raining"));

// Together: PIZZA PREFERENCE EXAMPLE

var pizzaPreference = (prompt("what kind of pizza do you like")).toLocaleLowerCase();
console.log("User pizza input " + pizzaPreference);
if(pizzaPreference === "pineapple and hotsauce") {
    alert("what a coincidence, I hate that with my very being");
} else if(pizzaPreference === "cheese") {
    alert("ches gud");
} else if(pizzaPreference === "bacon"){
    alert("yum");
} else {
    alert(pizzaPreference + "nasty");
}

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

var trafficLight = (prompt("what color is the damn light!?")).toLocaleLowerCase();
console.log("User light input " + trafficLight);
if(trafficLight === "green") {
    alert("floor dat shit yo");
} else if(trafficLight === "yellow") {
    alert("floor dat shit yo");
} else if(trafficLight === "red"){
    alert("floor dat shit yo");
} else {
    alert(trafficLight + "stop, are you fucking color blind?");
}




// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.

// user < 15 = not eligible
// user > 15 = eligible
var userAge = 17;
var hasPermit = true;


if( userAge < 15 ) {
    alert("you are not eligible");
} else {
    // all other possibilities
    // check for user age
    if( userAge === 15){
        alert("You are eligible for a learners permit");
        //older than or equal to 16, have a permit
    } else if((userAge >= 16) && hasPermit) {
        //16 and older, but no permit
        alert("You can get a licences");
    } else if((userAge >= 16) && !hasPermit) {
        alert("you are not eligible");
    } else {
        alert("not enough info")
    }
}





// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!



// =============== SWITCH STATEMENT ================
//TODO Together:

var pizzaPreference1 = (prompt("what kind of pizza do you like")).toLowerCase();
console.log("User pizza input " + pizzaPreference1);
function pizzaMessage(pizzaPreference1) {
    var pizzaConfrimation
    switch (pizzaPreference1) {
        case "pineapple and hot sauce":
            alert("Cool ");
            break;
        case "cheese":
            alert("Basic");
            break;
        case "bacon":
            alert("Yum");
            break;
        default:
            alert(pizzaPreference1 + " isn't my favorite, but let's order some!");
            break;
    }
    return pizzaConfrimation
}
// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.


//TODO: Rewrite the intersection function from earlier as a switch statement.



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html
