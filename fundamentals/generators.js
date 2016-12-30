/*
    Please look over iterator.js before beginning this section.

    Generators are functions which can be exited and re-entered,
    saving context(variable bindings) across re-entrances

    Generator functions follow the iterator protocol, and return the same
    next method expected by for...of, spread operator, and destructuring
    assignment

    yield specifies the value to be returned from the iterator,

    Use Cases:

    - Making any object iterable:
      Just write a generator-function
      that traverses this, yielding each value as it goes. Then install that
      generator-function as the [Symbol.iterator] method of the object.

    - Simplifying array-building functions:
      Using yield on each iteration through the loop returns a { done: , value: }
      object. the value of the value key is your array

    - Make asynchronous code less painful
      Generators allow us to write our asynchronous code in a synchronous manner,
      which makes our brain happy

    TL;DR - generators are iterators. All generators have a built-in
    implementation of .next() and [Symbol.iterator](). You just write
    the looping behavior.
*/

function* nameList() {
    yield "Jack";
    yield "Jill";
}

// calling the function returns a generator object
for (let name of nameList()) {
    console.log(name);
}

let names = [...nameList()];
console.log(names);

let [first, second] = nameList();
console.log(first, second);

// Consider the following code

myObject[Symbol.iterator] = function() {
    let properties = Object.keys(this);
    let count = 0;
    let isDone = false;

    let next = () => {
        if(count >= properties.length) {
            isDone = true;
        }
        let value = this[properties[count++]];

        return { done: isDone, value };
    }
    return { next };
};

// Generator version

myObject[Symbol.iterator] = function* () { // function generator signature
    let properties = Object.keys(this);

    for(let prop of properties) {
        yield this[prop];                  /* pass to yield, b/c in loop yield gets called over and over returning our generator object */
    }
}

/*
    Example of asynchronous code w/ generator
    Q.async() is an experimental attempt at using
    generators with promises to produce async
    code that resembles synchronous code.
*/

// Synchronous code to make some noise.
function makeNoise() {
  shake();
  rattle();
  roll();
}

// Asynchronous code to make some noise.
// Returns a Promise object that becomes resolved
// when we're done making noise.
function makeNoise_async() {
  return Q.async(function* () {
    yield shake_async();
    yield rattle_async();
    yield roll_async();
  });
}
