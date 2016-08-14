var hanoi = function(disc,src,aux,dst){
	if(disc > 0){
		hanoi(disc - 1, src, dst, aux);
		console.log('Move disc ' + disc + 
			' from ' + src + ' to ' + dst);
		hanoi(disc - 1, aux, src, dst);
	}
};
hanoi(3,'Src', 'Aux', 'Dst');
console.log('\n');
var factorial = function factorial(i, a){
	a = a || 1;
	if(i < 2){
		return a;
	}
	return factorial(i-1,a*i);
}
console.log(factorial(3) + "\n");
var total = 1;
var factorial1 = function factorial1(i){
	console.log(i);
	if(i > 1){
		total *= i;
		factorial1(i-1);
	}else{
		console.log(total);
	}
}
factorial1(3);