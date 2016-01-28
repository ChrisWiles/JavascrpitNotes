//  The concatAll() function iterates over each sub-array in the array and collects the results in a new, flat array
//  the concatAll() function expects that each item in the array to be another array.

Array.prototype.concatAll = function() {
	var results = [];
	this.forEach(function(subArray) {
		// ------------ INSERT CODE HERE! ----------------------------
		// Add all the items in each subArray to the results array.
		// ------------ INSERT CODE HERE! ----------------------------
		subArray.forEach(function(element) {
			results.push(element);
		});
	});

	return results;
};
var twoDArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

console.log(twoDArray.concatAll());
// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array