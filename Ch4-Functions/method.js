var count = {
	value: 0,
	increment: function(inc){
		this.value += typeof inc === 'number' ? inc : 1;
	}
}
console.log(count.value);
count.increment(3);
console.log(count.value);