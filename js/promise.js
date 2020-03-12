"use strict";

// function inputNum (){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if
//         })
//     })
// }


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
function wait(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, num)
    });
}


// const request = wait();
// console.log(request); // pending promise
// request.then(data => console.log('Promise resolved!', data));
// // if resolved, will log "Promise resolved!" and "Here is your data: ..."
// request.catch(error => console.log('Promise rejected!', error));
// // if rejected, will log "Promise rejected!" and "Network Connection Error!"

// TODO: Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.

// const keys = fetch ('https://api.github.com/users/SpicerRJames/events', {headers: {'Authorization': 'token b48c101eb866a02cdef2f9763282b3e9564e3578'}});

// function getGithubUsernames() {
//     fetch ('https://api.github.com/users/SpicerRJames/events', {headers: {'Authorization': 'token b48c101eb866a02cdef2f9763282b3e9564e3578'}})
//         .then(response => response.json())
//
//         .then((data) => {
//             console.log(data[0].payload.commits[0].message);
//         });
// }
// console.log(getGithubUsernames());

function getGithubUsernames() {
    fetch ('https://api.github.com/users/SpicerRJames/events', {headers: {'Authorization': 'token b48c101eb866a02cdef2f9763282b3e9564e3578'}})
        .then(response => response.json())

        .then((data) => {
            var i = 0;
            console.log(data.length[i-1].commits_at);
        });
}
console.log(getGithubUsernames());

// /users/:username/events/public

// later on...

// getGithubUsernames().then((usernames) => {
//     usernames.forEach((username) => {
//         // do something with each username
//     });
// }).catch(error => console.error(error));



