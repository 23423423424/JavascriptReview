Function.prototype.method = function (name, func) {
 if(!this.prototype[name]){
 	this.prototype[name] = func;
 }
 return this;
};

console.log(Number);

Number.method('integer', function ( ) {
 return Math[this < 0 ? 'ceil' : 'floor'](this);
});

console.log((-10 / 3).integer())
