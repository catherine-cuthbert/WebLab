//alert("Hello");

console.log("Hello");

var message = "Hello";

var x = 27;
var temps = [14, 32, 36, 40];
var person = {
	first: "Nate",
	last: "White",
	age: 23,
	address: {
		city: "Fort Collins",
		zip: 80521
	},
	greeting: greeting()
};

if(person.age >= 21 && person.age < 65) {
	console.log("Hello " + person.first);
} else if (person.age >= 65) {
	console.log("Discount!");
} else{
	console.log("You must leave");
}

function greeting(name) {
	console.log("Hello " + name);
}

switch (age) {
	case 21:
		console.log("I'm 21");
	break;
	case 24:
		console.log("I'm 24");
	break;
	case 30:
		console.log("I'm 30");
	break;
	default:
		console.log("I'm " + age);
	break;
}

var x = 0;
while (x < 10) {
	console.log(x);
	x = x + 1;
}