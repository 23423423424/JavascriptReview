var x = function (a,b){
	return a + b;
}
function myFunction(a,b){
	return a + b;
}
var y = new Function("a","b"," console.log(a + b)");
var result = myFunction(2,3);
console.log(result);
console.log(x(2,3));
y(2,3);