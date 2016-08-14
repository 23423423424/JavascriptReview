var empty = [];
var numbers = ['zero','one','two'];
var numbers1 = ['zero','one','two'];
console.log(numbers.length);
console.log(numbers[numbers.length]);
numbers[10] = 'hi';
console.log(numbers.length);
console.log(numbers);
var numbers_object = {
	'0': 'zero', '1': 'one', '2': 'two'
};
var misc = ['string', 12, true, ['nested','array']];
var arr = []
arr.push(2);
arr.push(3);
console.log(arr);
arr.length = 0;
console.log(arr);
arr = numbers1;
delete arr[2];
console.log(arr);
arr.splice(0,3);
console.log(arr);
