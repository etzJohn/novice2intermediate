/*
    Maps are a data structure composed of a collection of key-value pairs
    (1:1) Relationship
    The map object allows any value to be either a key or value, and does NOT
    convert objects to strings

    While objects have worked as pseudo-maps in JS, they have a few issues
        1) Object keys are always converted to strings -- strings are not
           symbols, and can be overwritten
        2) Checking when a property exists -- sometimes the property only exists
           in the prototype, but even if this is not what we want, it returns true
        3) Collecting property names -- iterating through object properties
           will also include inherited properties from prototypes
*/

//
let user1 = { name: "John" };
let user2 = { name: "Bob" };

let totalReplies = {}
totalReplies[user1] = 5;
totalReplies[user2] = 42;

// strings are not unique, therefore overwrite occurs
console.log( totalReplies[user1] ); //=> 42
console.log( totalReplies[user2] ); //=> 42

console.log( Object.keys(totalReplies) ); //=> object Object
console.log( "toString" in obj ) //=> true (inherited from Object.prototype);

/*
    SOLUTION: Map
    - To add elements, use .set(key, value);
    - To retrieve elements, use .get(key);
*/

let user1 = { name: "John" };
let user2 = { name: "Bob" };

let totalReplies = new Map();

totalReplies.set(user1, 5);
totalReplies.set(user2, 42);

console.log(totalReplies.get(user1)); //=> 5
console.log(totalReplies.get(user2)); //=> 42

/*)
    USE CASES FOR MAP:
        When keys are unknown until runtime
        When types of data are the same

    IF this is not the case, use an object
*/

let recentPosts = new Map();

createPost(newPost, (data) => {
    recentPosts.set(data.author, data.message);
});

/*
    Maps are iterable (possess key-value pairs), so they can be used in a for...of loop
*/

for(let [key, value] of totalReplies) {
    console.log(`${key.name}'s post has ${value} replies.`)
}
/*
    WeakMap is a type of Map where only objects can be passed as keys;
    primitive data types need not apply
        - All available methods on WeakMap require access to an object
          used as a key
        - They are not iterable

    Better with memory
        Individual entries in a WeakMap can be garbage
        collected while WeakMap persists

    Use Case:
        Suppose you are performing async operations with Promises and need to log
        any rejected promises. However, you don't want to add extra baggage
        to existing objects, but you also don't want to lose reference to these
        Promises until you are done with them.
        WeakMap allows you to hold onto these references without bloating other objects,
        and once there are no more references, garbage collection can take care of
        the rest
*/
