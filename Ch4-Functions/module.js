Function.prototype.method = function (name, func) {
 if(!this.prototype[name]){
 	this.prototype[name] = func;
 }
 return this;
};

String.method('deentityify', function(){
	var entity = {
		quot: '"',
		lt: '<',
		gt: '>'
	};
	return function(){
		return this.replace(/&([^&;]+);/g,
			function (a,b){
				var r = entity[b];
				return typeof r === 'string' ? r : a;
			}
		);
	};
}());
console.log('&lt;&quot;&gt;'.deentityify());

var serial_maker = function(){
	var prefix = '';
	var seq = 0;
	return {
		set_prefix: function(p){
			prefix = String(p);
		},
		set_seq: function(s){
			seq = s;
		},
		gensym: function(){
			var result = this.set_prefix + this.set_seq;
			seq += 1;
			return result;
		}
	};
};

var seqer = serial_maker();
seqer.set_prefix = ('Q');
seqer.set_seq = (1000);
console.log(seqer);
var unique = seqer.gensym();
console.log(unique);
console.log(seqer);












