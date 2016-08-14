var person = {first: "John", last: "Smith", age: 25};
for (i = 0; i < 3; i++){
	console.log(i);
}
for (x in person){
	console.log(x);
}
for (x in person){
	console.log(person[x]);
}