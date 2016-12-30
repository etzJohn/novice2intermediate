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
function tagPets(pets) {
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
