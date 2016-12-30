// Closure is when a function can remember and access its lexical scope
// even when it's invoked outside its lexical scope.

function moi() {
  var name = "John";

  function sayIt() {
    console.log("Hi my name is " + name);
  }

  return sayIt;
}

var me =  moi();

me();

/*
  JS Garbage collector frees up memory when the portion of the program is no longer in use,
  very rough example is such as when we leave scope. With this in mind, how does the above work?

  Due to location of function sayIt() 's location, the inner scope is still in use by sayIt().

  We return sayIt to the global scope, and because of the aforementioned, it continues to have reference
  to the scope in which it was declared, and that reference is known as closure.

  Module design pattern is a great example of closures in use
*/

// Example of exercising closure w/ callbacks
// How can we fix this?
for (var i = 1; i <= 5; i++) {
    setTimeout( function timer() {
        console.log( i );
    }, i * 1000 );
}

for (var i = 1; i <= 5; i++) {
    (function(j) {
        setTimeout( function timer() {
            console.log( j );
        }, j * 1000 );
    }(i));
}
