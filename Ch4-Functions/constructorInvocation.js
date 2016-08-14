var Name = function(string){
	this.name = string;
};
Name.prototype.get_name = function(){
	return this.name;
}
var myName = new Name("John Smith");
console.log(myName.get_name());