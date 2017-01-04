/*
    ES2015 Additons:
        - Array Destructuring
        - For...of Loop iteration
        - Array.find()
*/

let pets = ["Scooter", "Girly", "Domino"];

// Destructuring the array
let [dog, rabbit, cat] = pets;

// Destructuring with rest params
let [first, ...rest] = pets;

// Destructuring arrays from return values
const tagPets = (pets) => {
    let dog = `<h1>${pets[0]}</h1>`;
    let rabbit = `<h1>${pets[1]}</h1>`
    let cat = `<h1>${pets[2]}</h1>`
    return [dog, rabbit, cat];
}

// iterate over array without clunky for-loop!
for (index of pets) {
    console.log(names[index]);
}

let pets = [
    { name: "Scooter", type: "Dog"},
    { name: "Girly", type: "Rabbit"},
    { name: "Domino", type: "Domino"},
];

/*
    for...of does NOT work on objects out of the box..
    each object possesses a Symbol.iterator hidden object,
    and a special function known as the iterator object must
    be assigned to it for it to work, more on that coming
*/
//error!
for (pet of pets) {
    console.log(pet.name);
}

/*
    Array.find returns the first element in the array that satisfies
    a provided testing function
*/

let topDog = pets.find( pet => pet.type === "Dog");

/*
  There will be data to process in your project. Whether it is 10 items or 10000000000 items,
  it is important to understand how to process this data effectively.

  Enter map, filter, reduce

  Their basic behaviour is: Apply a function to each item in the array before returning a NEW array
*/


//  Array.prototype.map()


let myNums = [1,2,3,4,5,6,7,8,9,10];

const doubleIt = (num) => {
  return num * 2;
}

let myNumsDoubled = myNums.map(doubleIt);

// Array.prototype.filter()

const evensOnly = (num) => {
  return num % 2 === 0;
};

let myEvenNums = myNums.filter(evensOnly);

// Array.prototype.reduce()

const sum = myNums.reduce( (memo, num) => {
  return memo + num;
}, 0);
