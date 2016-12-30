/*
  Declarations(vars and functions) are "hoisted", moved to the top of the scope.
  Assignments(even assignments of function expressions), are not hoisted.
*/

// When is hoisting useful?

a = 2;
var a;
console.log(a);

var a;
console.log(a);
var a = 2;

/*
  Analyze) var a = 2;
    We should view this as two seperate statements:
      1) var a; COMPILER-PHASE TASK
      2) a = 2; EXECUTION-PHASE TASK
*/

foo();
function foo() {
  console.log("Hi I'm function foo!");
}

foo();
// var foo; is hoisted to the top of scope, and we are trying to invoke
// it as a function when it is simply a declared var.
bar();
// due to same situation as above, + bar does not even exist at point of invocation
var foo = function bar() {
  console.log("Hi I'm function foo!");
}

/*
 SOLUTIONS:
  as of es2015, you should NEVER use var;
  var defines a variable globally, or locally to the entire function regardless of block scope

  using let allows you to declare variables that are limited in scope to the block,
  statement, or expression on which it is used

  using const forces you to declare and initialize your variable all in one step, creating a
  read-only reference to a value. NOTE:THE VALUE IS NOT IMMUTABLE
  value cannot change through reassignment,
  cannot be redeclared
*/
