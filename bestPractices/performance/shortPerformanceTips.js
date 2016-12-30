/*
  Prototypal Inheritance
    Add shared methods & attributes to prototype; instantiations will inherit
*/

var shoe = {
  style: "sneaker",
  brand: "Puma",
  color: "White"
};

var fancyShoes = {
  style: "dress",
  brand: "Hugo Boss",
  color: "Black"
};

shoe.prototype = {
  putOn: function() {
    console.log("Putting on shoes");
  },
  takeOff: function() {
    console.log("Taking off shoes");
  }
}

fancyShoes.prototype = {
  magicPutOn: function() {
    console.log("Shoes magically put itself on!");
  },
  magicTakeOff: function() {
    console.log("Shoes magically takes itself off!");
  }
}

/*
  NOTE: prototypal inheritance allows for great ease of object composition,
  this is not seen in classical inheritance languages

  Note example below
*/

console.log(shoe);
console.log(fancyShoes);

// upgrade shoes
shoe.prototype = fancyShoes.prototype;

// downgrade fancyShoes
fancyShoes.prototype = shoe.prototype;

/*
  Using fragments in DOM, Server queries
  We see this in Relay, GraphQL, React
*/

/*
  Declare vars as little as possible! Each var keyword adds a look-up to JS parser
*/
let hi,
    bye,
    hola,
    adios;

/*
  Use Data Structures native methods

  ie) Rather than for-loop to concat an Array with + operator, use .join()
*/
