/*
    Performance & Modularity are two of the cornerstones of a great program.
    To complete a strong foundation for extensible programs, we must make them
    highly readable. Inferrence is hugely important. It is said 90% of our time as
    developers goes into reading and understanding code, while 10% is left to
    actually coding!
*/

/*
    When used multiple times, magic numbers(hard-coded values)
    cause duplication, confusion, and hard to reason code

    You may understand your code, but will someone else?
*/
function bakeCookies(cookies) {
    if (cookies.length === 13) {
        //...
    } else {
        //...
    }
    if (cookies.bakeTemp > 13) {
        //...
    }
}

/*
    Solution
    - Declaring and assigning our magic number to a const immediately
      tells whoever is reading our code what exactly this number means,
      and most importantly, the business logic of our program
    - Additionally, const provides us with a block scoped, read-only value, which cannot
      be assigned a new value, further strengthening the integrity of our code
*/
function bakeCookies(cookies) {
    const BAKERS_DOZEN = 13,
          MAX_OVEN_HEAT_SETTING = 13; //450

    if (cookies.length === BAKERS_DOZEN) {
        //...
    } else {
        //...
    }
    if (cookies.bakeTemp === MAX_OVEN_HEAT_SETTING) {
        //...
    }
}
