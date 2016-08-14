var increment = function(a){
	if(typeof a != 'number'){
		throw {
			name: 'typeError',
			message: 'requires number'
		};
	}
	return a + 1;
}

var try_it = function(){
	try{
		increment('John');
	}catch(error){
		console.log(error.name + " " + error.message);
	}
}

try_it();