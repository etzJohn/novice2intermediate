/*
    ES2015 introduces native support for Modules

    The export statement is used to export modules from a file

    To import modules, use the import keyword, and specify a new
    local variable to hold its content. Use the from keyword to
    tell the JS engine where the module is located

    The default type export limits the number of functions we can
    export from a module

    If we are to export multiple functions, we remove the default
    keyword, end the file with export and wrap our exported methods
    with {},

    When we import we must surround our imported functions with
    {} and assign them the EXACT SAME NAME we gave them in the file
    in which we defined them

    If we import a Class, we must instantiate it in the file
    in which we imported into

    If we want to import the entire file, use *
    When calling a method from the import, use *.__methodName__

    PROTIP: if there are multiple constants, make a module file
            for them and simply export, further encapsulating
            and eliminating repetition; import and export
            just like you would regular modules
*/


// secretOfLife.js

// here is the module(public interface) we expose
export default function(secretOfLife) {
    console.log(secretOfLife);
}

/*
    This function is encapsulated in the module
    This is where we store private data and methods
    Assuring our program retains integrity
*/
function theSecret() {
    const secretOfLife = 42;
    return secretOfLife;
}

+++++++++++++++++++++++++++++++++++++++++++++++++++
//wiseOldMan.js

//here we can the module we imported
import secretOfLife from './secretOfLife';

secretOfLife(42);
