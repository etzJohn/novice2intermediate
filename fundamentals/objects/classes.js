/*
    ES2015 classes are syntactical sugar over JS's existing prototype-based inheritance.

    Classes are a "special" function which offer a simpler and cleaner syntax
    to create objects and deal with inheritance.

    Two Components, class declaration and class expressions
*/

class Mammal {
    constructor() {
        Object.assign(this, {
            vertebrate: true,
            mammaryGlands: true,
            laysEggs: false,
        });
    }
    introduce() {
        console.log("I'm a mammal");
    }
}

/*
    Class inheritance

    Use the extends keyword to inherit methods and promperties from a class

    super(); is the first thing we call in the constructor to invoke the parent
    class constructor

    To use any method from the parent class, prefix the method with super

    To override a method from parent class, simply use the same method name
    If you wish to include anything from the parent method, call super.__methodName()__
*/

class Human extends Mammal {
    constructor() {
        super();
    }
    introduce() {
        super.introduce();
        console.log("I'm a human");
    }
}
