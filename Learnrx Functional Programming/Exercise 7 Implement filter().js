// To make filtering easier, let's add a filter() function to the Array type. The filter() function accepts a predicate. 
// A predicate is a function that accepts an item in the array, and returns a boolean indicating whether the item should be retained in the new array.

Array.prototype.filter = function(predicateFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
		// ------------ INSERT CODE HERE! ----------------------------
		// Apply the predicateFunction to each item in the array.
		// If the result is truthy, add the item to the results array.
		// Note: remember you can add items to the array using the array's
		// push() method.
		// ------------ INSERT CODE HERE! ----------------------------
		if (predicateFunction(itemInArray)) {
			results.push(itemInArray);
		}
	});

	return results;
};

console.log(([1, 2, 3].filter(function(x) {
	return x > 2;
}))); // "[3]"