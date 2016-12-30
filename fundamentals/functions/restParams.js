/*
    JS provides us with the ability to define a function that takes in a variable number of arguments
    (variadic function).

    This is accomplished through the arguments object. The arguments object is a hidden local variable
    that is an array-like object available within all functions.

    While it gets the job done, it is hard to tell which parameters the function expects, where exactly
    these arguments are coming from, and if we add an argument to our function signature, our program will
    break, as this newly added argument is not enumerated in the same manner in which the key-values found
    in arguments are.
*/

function spillTheBeans() {
    for(let i in arguments) {
        let secret = arguments[i];
        console.log(secret);
    }
}

/*
    SOLUTION: Rest Parameters

    Rest parameters allow us to represent an indefinite number of arguments as an Array, and explicitly.
    This allows for far more reasonable code and less prone to breaking when changes are made.

    Simply prefix the rest parameter argument with ...

    NOTE: rest parameters must always come last in function signature arguments
*/

function spillTheBeans(superSecret, ...secrets) {
    let superSecret = superSecret;
    for(let i in secrets) {
        let secret = secrets[i];
        console.log(secret);
    }
}
