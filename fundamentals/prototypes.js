/* object parent, think blueprint

  all native JS data strutures inherit all of their properties and methods from their own prototype

  all prototypes inherit from the object prototype

  props from prototype:
    constructor
    toString
    propertyIsEnumerable
    valueOf
    toLocaleString
    isPrototypeOf
    hasOwnProperty
*/

Object.prototype.newMethod = function() {
  //addFunctionality
};

// Using custom prototypes to newly created object
var mammal = {

  mammaryGlands: true,
  laysEggs: false,
  habitats: ["Land", "Ocean", "Sky"]
}
// console.log(mammal);

var human = Object.create(mammal);

// to observe properties we must use for-in loop to iterate over enumerated props, 1:1 (key:val)
for (var prop in human) {
  console.log(prop + ": " + human[prop]);
}

// assign shared props/behavior of object classes to the object.prototype()
// helps with memory mgmt, efficiency, inferrability, extensibility of code
// ~~~~~~~~~~~uncomment to demonstrate prototype being added to mammal object~~~~~~~~~~~
mammal.prototype = {
  mammaryGlands: true,
  vertebrate: true,
}

console.log(mammal);
