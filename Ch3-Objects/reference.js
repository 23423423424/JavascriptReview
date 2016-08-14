var person = {
	first: "John",
	last: "Smith"
};
console.log(person)
var x = person
x.first = "Jake"
console.log(person)

a = b = c = {};
a.first = "John";
b.last = "Smith";
console.log(c);