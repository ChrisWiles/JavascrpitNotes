// Let's add a static zip() function to the Array type. The zip function accepts a combiner function, traverses each array at the same time, and calls the combiner function on the current item on the left-hand-side and right-hand-side. The zip function requires an item from each array in order to call the combiner function, therefore the array returned by zip will only be as large as the smallest input array.


// JSON.stringify(Array.zip([1,2,3],[4,5,6], function(left, right) { return left + right })) === '[5,7,9]' accumulatedValue + currentValue; }); === [6];

Array.zip = function(left, right, combinerFunction) {
	var counter,
		results = [];

	for (counter = 0; counter < Math.min(left.length, right.length); counter++) {
		results.push(combinerFunction(left[counter], right[counter]));
	}

	return results;
};
console.log(Array.zip([1, 2, 3], [4, 5, 6], function(left, right) {
	return left + right;
})); // [ 1, 4, 2, 5, 3, 6 ]