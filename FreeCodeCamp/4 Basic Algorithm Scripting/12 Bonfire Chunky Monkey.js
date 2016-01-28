// Bonfire: Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of 
// size (second argument) and returns them as a multidimensional array.

function chunk(arr, size) {
	var tempArray = [];
	for (var i = 0; i < arr.length; i += size) { 
		tempArray.push(arr.slice(i, i + size));
	}
	return tempArray;
}
console.log(chunk(['a', 'b', 'c', 'd'], 2)); // [['a','b'],['c','d']]
//console.log(chunk(['a', 'b', 'c', 'd'], 2)); // [['a','b'],['c','d']]
//console.log(chunk(['a', 'b', 'c', 'd','a', 'b', 'c', 'd',1], 2));
console.log(chunk([0, 1, 2, 3, 4, 5], 3)); // [ [ 0, 1, 2 ], [ 3, 4, 5 ] ]