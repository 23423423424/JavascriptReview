var Mammal = function(name){
	this.name = name;
};

Mammal.prototype.get_name = function(){
	return this.name;
};

Mammal.prototype.says = function(){
	return this.saying || '';
};

var myMammal = new Mammal('Herb the Mammal');
var name = myMammal.get_name();
//==============================================================
var Cat = function(name){
	this.name = name;
	this.saying = 'meow';
}
Cat.prototype = new Mammal();
console.log(Cat.prototype)

Cat.prototype.purr = function (n){
	var i, s = '';
	for(i = 0; i < n; i += 1){
		if(s){
			s += '-';
		}
		s += 'r';
	}
	return s;
};

Cat.prototype.get_name = function(){
	return this.says() + ' ' + this.name + 
		' ' + this.says();
};

var myCat = new Cat('John');
var says = myCat.says();
var purr = myCat.purr(5);
var name = myCat.get_name();

//===========================================
// cascade
Function.prototype.method = function (name, func) {
 if(!this.prototype[name]){
 	this.prototype[name] = func;
 }
 return this;
};
Function.method('inherits', function(Parent){
	this.prototype = new Parent();
	return this;
});

var Cat = function(name){
	this.name = name;
	this.saying = 'meow';
}.inherits(Mammal)
	.method('purr', function(n){
		var i, s = '';
		for(i = 0; i < n; i+=1){
			if(s){
				s += '-';
			}
			s += 'r';
		}
		return s;
	}).method('get_name', function(){
		return this.says() + ' ' + this.name + 
		' ' + this.says();
	});
console.log(Cat);
console.log(Cat.prototype);
myCat = new Cat('John');
console.log(myCat);
console.log(myCat.purr(5));




