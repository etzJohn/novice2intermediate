/*
    Sets allow you to store unique values of any type.
    Think array, but without duplicate values

    Set objects are iterable, so for...of and destructuring can be used
*/

let tags = new Set();

// JavaScript is only added once
tags.add("JavaScript");
tags.add("Ruby");
tags.add("JavaScript");
tags.add("Java");
tags.add("NoSQL");

for (let tag of tags) {
    console.log(tags);
}

let [a,b,c,d] = tags;
console.log(a,b,c,d);

/*
    Just like WeakMap, there is a WeakSet

    WeakSet has the exact same use case as WeakMap
        Memory efficient, object only container that allows
        for garbage collection upon no references to a key

    Set & WeakSet.has(key) returns a boolean if WeakSet possesses key
    Set & WeakSet.delete(key) returns a boolean if key exists and is deleted

    Use Case
        - WeakSets allow us to create special groups from existing
          objects WITHOUT mutation
        - Embracing immutable design patterns allows for much simpler
          code with reduced side effects

    Difference btwn map & set??
*/
