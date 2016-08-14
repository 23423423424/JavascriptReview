var foo = function(){
	var a = 3, b = 5;
	console.log(a + " " + b);
	var bar = function(){
		var b = 7, c = 11;
		a += b + c;
		console.log(a + " " + b + " " + c);
	};
	bar();
	console.log(a + " " + b);
};
foo();
var a = 3;
var b = 4;
console.log(a + " " + b);
if(1 == 1){
	var c = 5;
}
console.log(a + " " + b + " " + c);

