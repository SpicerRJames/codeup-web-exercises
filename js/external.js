"use strict";

    alert("Welcome to my website");

    var userInput = prompt('WHat is your Favorite Color:');

    console.log('Nice! ' + userInput + ' is my favorite color too.');

    alert('Nice! ' + userInput + ' is my favorite color too.');

    /*When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
    Use an alert to show the results of each problem.*/

    var lMRent = Number(prompt('How many days are you going to rent the little mermaid'));

    var bBRent = Number(prompt('How many days are you going to rent the brother bear'));

    var hRent = Number(prompt('How many days are you going to rent the hercules'));

    var tRent = ((lMRent*3) + (bBRent*3) + (hRent*3));

    alert(tRent);

    /*Contractor Question*/

    var googRate = Number(prompt('Hourly rate at Google'));

    var amaRate = Number(prompt('Hourly rate at Amazon'));

    var fbRate = Number(prompt('Hourly rate at Facebook'));

    var googHour = Number(prompt('Time Spent at Google'));

    var amaHour = Number(prompt('Time Spent at Amazon'));

    var fbHour = Number(prompt('Time Spent at Facebook'));

    var payDay = ((googRate*googHour) + (amaRate*amaHour) + (fbRate*fbHour));

    alert(payDay);

    /*Student Question*/

    var classTime = confirm("Are you avaliable for this class time");

    var classSize = confirm("Does this time work for you?");

    var classEnrolled = classSize && classTime;

    alert(classEnrolled);

    /*Product Question*/

    var premiumMem = confirm("Are you a premium Member?");

    var productNum = Number(prompt("How many products have you bought?"));

    var offerValid = confirm("is offer still valid");

    var productAvilable = offerValid && (premiumMem || productNum > 2);

    alert(productAvilable);





