/*
    Merging objects can be accomplshed with Object.assign(target, ...sources)

    Object.assign copies properties from one or more source objects(2nd + args) to a target
    object(first argument)

    Object.assign is very useful when we have to reuse an object numerous times,
    but each instantiation requires unique settings.
    NOTE: duplicate properties are overwritten. (target.prop will be overwritten by source.pop)

    Below is some examples of how it can improve readability of simple operations
*/

// Example 1) Constructing an object

// ES5
class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
}

// ES2015
class Point {
    constructor(x,y) {
        Object.assign(this, { x, y });
    }
}

// Example 2) Adding a method to an object

// ES5
Point.prototype.announceLocation = function() {
    console.log(this.x, this.y);
}

// ES2015
Object.assign(Point.prototype, {
    announceLocation() {
        console.log(this.x, this.y);
    }
})
