/*
  The options object allows user-defined settings to be passed
  to a function in the form of properties of an object
  We assign properties to local variables
  While this works, it makes it hard to know what options a function accepts
  And is very unclear what exactly these options are from a user standpoint
*/

var options = {
    sprinkles: false,
    chocolateSauce: true,
    caramel: true,
    cherries: false
};

function makeSundae(flavor, options = {}) {
    var sprinkles = options.sprinkles;
    var chocolateSauce = options.chocolateSauce;
    var caramel = options.caramel;
    var cherries = options.cherries;
    // etc...
    console.log("Sprinkles: ", sprinkles);
    console.log("Chocolate Sauce: ", chocolateSauce);
    console.log("Caramel: ", caramel);
    console.log("Cherries: ", cherries);
}

/*
  Solution: Using Named Parameters
  We now know which arguments are available
  Even if we do not provide values for our options, the program will not
  error out, it will simply assign undefined to the missing params
  NOTE: if we leave options obj entirely blank, we will receive an error.
        This can be avoided by adding a default value for our named parameter
        object
*/

function makeSundae(flavor, { sprinkles, chocolateSauce, caramel, cherries } = {}) {
    console.log("Sprinkles: ", sprinkles);
    console.log("Chocolate Sauce: ", chocolateSauce);
    console.log("Caramel: ", caramel);
    console.log("Cherries: ", cherries);
};
