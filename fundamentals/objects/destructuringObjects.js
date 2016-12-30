/*
    Destructuring allows us to extract data from arrays or objects into
    distinct variables
*/

function recordCarInfo(year, make, model) {
    return {
        year,
        make,
        model
    }
}

var myCar = recordCarInfo(2005, "Ford", "Escape");

// ES5 Destructuring
var year = myCar.year;
var make = myCar.make;
var model = myCar.model;

// ES2015 Destructuring
let { year, make, model } = recordCarInfo(2005, "Ford", "Escape");

/*
    TL;DR
        Object Initializer - from variables to object properties
        Object Destructuring - from object properties to variables
*/
