function add(a,b){
	return a + b;
}
var x = {
	value: add(1,2)
}
console.log(x);
x.double = function(){
	var that = this;
	var helper = function(){
		that.value = add(that.value,that.value);
	};
	helper();
};
x.double1 = function(){
	this.value = add(this.value,this.value);
}
x.double();
console.log(x.value);






