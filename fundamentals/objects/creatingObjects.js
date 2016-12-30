// PROTIP: USE OBJECT LITERALS

/*
  In JS object, all property keys are strings

  Dot notation only lets you access EXPLICIT KEY NAME OF A PROPERTY
  You can't use dot notation with variables or numbers

  Bracket notation allows use of characters that can't be used with dot notation
*/

myObj = {
  name: "John",
  activities: ["Coding", "Reading", "Gym"]
}

console.log(myObj.name);
console.log(myObj["name"]);

var x = "activities";
console.log(myObj.x);
console.log(myObj[x]);

/*
    When creating factory functions, we often have to write code
    that is very repetitive,
*/

function buildCar(year, make, model) {
    isRunning: true;

    return {
        year: year,
        make: make,
        model: model
        isRunning: function() {
            return isRunning;
        }
    }
}
/*
    SOLUTION: es2015 object initializer shorthand

    Only works when object properties and variables being assigned to them
    have same name (which is almost always)

    Methods also enjoy the same shorthand notation, and also without needing
    function keyword
*/

function buildCar(year, make, model) {
    isRunning: true;

    return {
        year,
        make,
        model,
        isRunning() {
            return isRunning;
        }
    }
}
