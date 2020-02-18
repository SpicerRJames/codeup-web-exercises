(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function (radius) {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var pi = Math.PI;
            var circleOne = Math.pow((circle.radius), 2);
            var area = pi * circleOne;
            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            // var rounded = Math.round(this.getArea(this.radius));
            // console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea(this.radius));


            if(doRounding){
                console.log(Math.round(this.getArea(this.radius)));
            }else{
                console.log(this.getArea(this.radius).toFixed(2));
            }


        }
    };

    // log info about the circle
    console.log("Raw circle information: ");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();