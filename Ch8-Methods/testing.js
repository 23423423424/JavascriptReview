var arr = [3,4]
var add = function(a,b){
	return a + b;
}
var sum = add.apply(null, arr);
console.log(sum);