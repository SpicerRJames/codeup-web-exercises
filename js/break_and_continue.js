// var numberToStopAt = i;

var isEven = prompt("Enter a odd number from 1 - 50.");
prompt("not a proper input, try again");
for (var i = 1; i < 51; i++) {
    if(isEven % 2 !== 0){
    }else{
        break;
    }
}

for (var x = 1; x < 50; x+=2) {
    if (isEven % 2 !== 0) continue;
        console.log("Log this Number" + x);
}
console.log(isEven);