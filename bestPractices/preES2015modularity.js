/*
  JS started out as simple *change font color*, *handle form input* into a first-class
  language, and it has definitely seen major growing pains becoming a first-class language

  One of its design decisions, global scoped variables, is a horrible downside that must be managed
  and avoided as our apps grow

  How can we do this? MODULARITY. Here we look at the module design pattern 
*/

/*
  step 1) Namespace your program(s)
    Place your code into a wrapper to add an insulation scope
*/
var WRAPPER = {
  preciousCode: {
    secretOfLife: 42
  }
};
/*
  Unfortunately, someone can still reference your namespace and access and manipulate things
  in ways that can ruin the integrity and function of your program
*/
console.log(WRAPPER);
WRAPPER.preciousCode.secretOfLife = 0;
console.log(WRAPPER); // UH-OH

/*
  step 2) Add closured scope
    public methods and vals should signal to safely modify private data
    closure allows us to "privatize" properties

  Here we maintain the data of our program, but with assurance that outside
  forces cannot harm the integrity of our program
*/
var WRAPPER = (function() {
  var secretOfLife = 42;
  return {
      sayIt: function() { console.log(secretOfLife); }
  };
}());

WRAPPER.sayIt();
WRAPPER.secretOfLife = 0;
WRAPPER.sayIt(); // YAY
