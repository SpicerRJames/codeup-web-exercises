"use strict";
$(document).ready(function() {
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    function createList(arr) {
        var html = '';
        arr.forEach(function (item) {
            html += '<li>' + item + '</li>';
        });
        return html;
    }

    let threeLanguages = users.filter(user => user.languages.length >= 3);
    console.log(threeLanguages);

    let userEmail = users.map(user => user.email);
    console.log(userEmail);

    let yearsExperience = users.reduce((total, user) => total + user.yearsOfExperience, 0);
    console.log((yearsExperience/users.length) + ' years');

    // let longestEmail = users.reduce(total => total.email.length < "");

   let longestEmail = users.reduce(function(currentLongestEmail,user){
        if(user.email.length > currentLongestEmail.length){
            //current user email are itterating is longer than the previous longest email.
            return user.email;
        }else{
            return currentLongestEmail;
        }
    }, ".");
    console.log(longestEmail);

    // let userCount = users.reduce((total, user) => total + user.name.push(''));

    let userString = users.reduce(function(allNames,user){
        if(allNames === ''){
            return user.name
        } else {
            return allNames + ', ' + user.name;
        }
    }, '');

        // users.forEach(user.name){
        //     user.name.push(bucket)
        // }
    // });
    console.log(userString);

// function get3Langs (arr){
//     let arrLang,bucket;
//     [arrLang, bucket] = [arr.split(''),[]]
// }
//     function langs3 (input){
//         for(i=0; i<input; i++){
//
//         }
//     }
//
//     let threeLangs = users.filter(function (user) {
//         if (user.languages <= 3) {
//             return threeLangs;
//         }
//         // console.log(threeLangs);
//     });
//     $('#filter').html(createList(threeLangs.map(users => `<strong>(${users.languages})</strong>`)));
//     console.log(threeLangs);
});