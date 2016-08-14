var person = {
	first: "John",
	last: "Smith"
};

//////////
function person1(first,last){
	this.first = first;
	this.last = last;
	if(typeof Object.create !== 'function'){
		Object.create = function(o){
			var F = function(){};
			F.prototype = o;
			return new F();
		};
	}
}
person1.prototype.name = function(){
	console.log(this.first + " " + this.last);
}
var person_test = new person1("Mark","Smith");
person_test.name();
var another_person = Object.create(person1);
console.log(another_person);