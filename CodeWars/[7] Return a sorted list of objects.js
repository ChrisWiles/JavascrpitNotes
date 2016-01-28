// You'll be passed an array of objects - you must sort them in descending order based on 
// the value of an arbitrarily specified property. For example, when sorted by a, this:


var b = [
  {a: 2, b: 12},
  {a: 3, b: 2},
  {a: 1, b: 40},
  {a: 4, b: 3}
];


function sortList(sortBy, list) { // sort by a or b
	var sorted = [];

	if (sortBy === 'a') {
		for (var i in list) {
			sorted.push(list[i].a);
		}
		sorted.sort(function(a, b) {
			return b - a;
		});
		for (var k in list) {
			list[k].a = sorted[k];
		}
		return list;
	}

	if (sortBy === 'b') {
		for (var i in list) {
			sorted.push(list[i].b);
		}
		sorted.sort(function(a, b) {
			return b - a;
		});
		for (var k in list) {
			list[k].b = sorted[k];
		}
		return list;
	}

}
console.log(sortList('a', b));

function sortList(sortBy, list) {
	return list.sort(function(a, b) {
		return b[sortBy] - a[sortBy];
	});
}