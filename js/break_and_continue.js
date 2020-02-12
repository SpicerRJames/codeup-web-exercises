// "use strict";
//
// do {
//     var odd = Number(prompt("Enter a odd number from 1 - 50."));
//     if(odd < 1 || odd > 50){
//         alert(odd + " not between 1 and 50.");
//     }else if(odd % 2 === 0){
//         alert("This is not an odd number.");
//     }else if(isNaN(odd)){
//         alert(odd + " is not a number!");
//     }else{
//         alert("A proper input");
//         break;
//     }
// }
// while (true);
//
// for(var i = 1; i <= 50; i++){
//
//     if(i % 2 === 0){
//         continue;
//     }
//
//     if(i === odd){
//         console.log("Yikes, skip " + odd);
//     } else {
//         console.log("Here is an odd number " + i);
//     }
// }

// var i = 1;
// do {
//     var odd = prompt("Enter a odd number from 1 - 50.");
//     var notOdd = odd % 2 === 0;
//     i++
// }
// while (notOdd % 2 !== 0);
//
// console.log("This is the number to skip " + odd);
//
// for (var i = 1; i < 50; i += 2) {
//     // if(odd % 2 !== 0) {
//     console.log("Skip this number please " + odd);
//     continue;
// }
//     console.log("This number is fine " + i);



// var numberToStopAt = i;

// // Line prompts user for a odd number
// var isEven = prompt("Enter a odd number from 1 - 50.");
//
// //Line lets user know if number is not odd
// var notOdd = prompt("Not a odd number, try again.");
//
// //Determines if number is odd or even
// function promptOddNumber() {
//     for (var i = 1; i < 50; i++) {
//         if(isEven % 2 === 0) {
//             prompt(notOdd);
//         }else{
//             break;
//         }
//     }
// }
//
// console.log(isEven);


// console.log(isEven);
// for (var x = 1; x < 50; x++) {
//     if (isEven) continue;
//     console.log("Log this Number" + x);
// }