Function.prototype.method = function (name, func) {
 if(!this.prototype[name]){
 	this.prototype[name] = func;
 }
 return this;
};

var a = [1,2,3];
var temp = a;

console.log(a.shift());

Array.method('shift', function(){
	return this.splice(0,1)[0];
});

a = temp;
console.log(a.slice(1));
console.log(a);
console.log(a.slice(0,1));
console.log('-----');
temp = [1,2,3];
var a  = temp;
console.log(a);
var r = a.splice(1,1,9,9);
console.log(a);
console.log(r);

var r = a.unshift('?','@');
console.log(a);
console.log(r);

Array.method('unshift', function(){
	this.splice.apply(this,
		[0,0].concat(Array.prototype.slice.apply(arguments)));
	return this.length;
});

var x = 3.234
x = x.toString();
console.log(x);
console.log(typeof x);



