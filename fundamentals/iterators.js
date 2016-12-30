/*
    Iterators work on iterables.

    An object that has a [Symbol.iterator]() method is called iterable. 

    Iterators return an iterator object. This object knows how to access
    items from a collection 1 at a time, while keeping track of its
    current position within the sequence
*/

let names = ["Jack", "Jill", "John"];

// consider for...of loop
for(let name of names) {
    console.log(name);
}

/*
    behind the scenes,
    Symbol.iterator is assigned to an iterator variable

    iterator is an object with two values
    done: false (which stays false until collection is fully iterated through)
    value: current value of index (once done is true, value returns undefined)

    the array index is accessed, assigned, and iterated over,
    so forth and so on
*/

let iterator = names[Symbol.iterator]();

let firstName = iterator.next();
let name = firstName.value;

let secondName = iterator.next();
let name = secondName.value;

let thirdName = iterator.next();
let name = thirdName.value;

// { done: true, value: undefined }

/*
    NOTE: for...of does not work on JS objects out of the box, so we must
    assign our object[Symbol.iterator] a function that serves the criteria
    we discussed in our behind-the-scenes explanation above
*/

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

/*
    IF you have an array like object you wish to iterate through, but for-of
    does not work; simply link the Array prototype's Symbol.iterator to your
    object
*/

myObj.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
