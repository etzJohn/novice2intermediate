/*
    Arrow functions bind to the scope of where they are defined, not where they are used,
	known as lexical binding.

	Why arrow functions?
		Scope Safety - when we use arrow functions, everything is guaranteed to use
		 			   the same thisObject as the root

		Readability - Compact & Concise

	Why regular functions?
		Indicating when a function should NOT access the this Object
		When needing to use a constructor(invoking new keyword)
		Functions can be named
*/

// EX1) Map collection of objects
var smartPhones = [
	{ name:'Apple iPhone', price:649 },
	{ name:'Samsung Galaxy', price:576 },
	{ name:'Google Pixel', price:489 }
];

// ES5
console.log(smartPhones.map(
    function(smartPhone) {
	       return smartPhone.price;
}));


// ES2015
console.log(smartPhones.map(smartPhone => smartPhone.price) );

// EX2) Arrow functions with this
export default class Table extends React.Component {
	// propTypes
	// constructor
	// etc
	// ...
	clearCache() {
		Object.keys(this.cache).forEach((key) => {
			ReactDOM.unmountComponentAtNode(this.cache[key]);
		});

		this.cache = {};
	}
	//...
	// etc
}
