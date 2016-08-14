var myMammal = {
	name: 'Herb the Mammal',
	get_name: function(){
		return this.name;
	},
	says: function(){
		return this.saying || '';
	}
};
var myCat = Object.create(myMammal);
console.log(myCat.get_name());
myCat.name = 'John';
myCat.saying = 'meow';
console.log(myCat.get_name());

var block = function(){
	var oldScope = scope;
	scope = Object.create(scope);
	advance('{');
	parse(scope);
	advance('}');
	scope = oldScope;
};

console.log(block);




