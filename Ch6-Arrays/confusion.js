var arr = [1,2,3];
console.log(typeof arr);
console.log(arr);

var is_array = function(value){
	return value && 
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		typeof value.splice === 'function' &&
		!(value.propertyIsEnumerable('length'));
};

console.log(is_array(arr));