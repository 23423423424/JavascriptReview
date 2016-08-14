function add(a,b){
	return a + b;
};

var Quo = function(string){
	this.status = string;
};

Quo.prototype.get_status = function(){
	return this.status;
};

var myQuo = new Quo("confused");

var array = [3, 4];

var sum = add.apply(null,array);

var statusObject = {
	status: 'A-OK'
};

var status = Quo.prototype.get_status.apply(statusObject);

console.log(status);