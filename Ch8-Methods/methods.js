var a = [1,2,3];
var b = [4,5,6];
console.log(a.concat(b));
a = a.concat(b);
console.log(a.join(','));

console.log(a.pop());
console.log(a);

Function.prototype.method = function (name, func) {
 if(!this.prototype[name]){
 	this.prototype[name] = func;
 }
 return this;
};
Array.method('pop', function(){
	return this.splice(this.length - 1, 1)[0];
});

console.log(a.pop());
console.log(a);

console.log("push methods");

console.log(a.push(8));
console.log(a);

Array.method('push', function(){
	this.splice.apply(
		this,
		[this.length,0].
			concat(Array.prototype.slice.apply(arguments)));
		return this.length;
});





