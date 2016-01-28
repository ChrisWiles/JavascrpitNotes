// To make projections easier, let's add a map() function to the Array type. 
// Map accepts the projection function to be applied to each item in the 
// source array, and returns the projected array.

Array.prototype.Map = function(projectionFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
		results.push(projectionFunction(itemInArray));
		// forEach calls Maps functions on each item in the array
	});

	return results;
};

console.log([1, 2, 3].Map(function(x) {
	return x * x;
})); // [1,4,9]