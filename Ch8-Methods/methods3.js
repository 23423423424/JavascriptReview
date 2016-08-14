Function.prototype.method = function (name, func) {
 if(!this.prototype[name]){
 	this.prototype[name] = func;
 }
 return this;
};

var name = 'Johnoh';
console.log(name[0]);
console.log(name.charAt(0));

String.method('charAt', function(pos){
	return this.slice(pos, pos + 1);
});

console.log(name.charCodeAt(0));

console.log('C'.concat('a','t'));

console.log(name.indexOf('oh',0));

console.log(name.lastIndexOf('oh'));

console.log(typeof name);
var a = name.split('', 4);
console.log(a);

var digits = '0123456789';
var a = digits.split('');
console.log(a);







