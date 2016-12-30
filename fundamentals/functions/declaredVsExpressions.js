// Function declaration
// Builds in memory IMMEDIATELY when program loads
// NOTE: how despite invocation is above function, builds immediately in memory at load therefore no error

squareIt(5);
function squareIt(num) {
  console.log(Math.pow(num,2));
};

// Function expression
// Builds ONLY when this line of code is reached
// NOTE: error, squareIt is not a function
squareIt(5);
var squareIt = function(num) {
  console.log(Math.pow(num,2));
};

// Utility of function expressions
// 1) Can pass functions as params in a very readable, inferrable manner
// 2) Can be used as closures
// 3) Immediately invoked function expressions
