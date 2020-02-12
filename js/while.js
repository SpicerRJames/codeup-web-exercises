"use strict";

// var i = 1;
// while(i <= 65536){
//     console.log(i);
//     i*=2;
// }

// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// do{
//     var cones = Math.floor(Math.random() * 5) + 1;
//     console.log(allCones);
// }while(cones > allCones);

var allCones = Math.floor(Math.random() * 50) + 50;

do{
    var cones = Math.floor(Math.random() * 5) + 1;

    if(cones > allCones){
        var sadMessage = "I cannot sell you anymore " + cones + " I only have " + allCones + " left.";
        console.log(sadMessage);
    } else {
        allCones -= cones;
        var happyMessage = cones + " cones sold... " + allCones + " cones to go";
        console.log(happyMessage);
    }

}while(cones > 0);

console.log("Yay! I sold all my cones!");