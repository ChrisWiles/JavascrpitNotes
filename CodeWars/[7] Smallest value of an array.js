// Write a function that can return the smallest value of an array or the index of that value. 
// The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. 
// Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
function min(arr, toReturn) {
	if (toReturn === 'value') {
		return arr.concat().sort(function(a, b) {
			return a - b;
		}, 0)[0];
	} else {
		return arr.indexOf(arr.concat().sort(function(a, b) { // concat() keeps sort from mutating arr
			return a - b;
		}, 0)[0]);
	}
}
console.log(min([1, 2, 3, -2, 5], 'value')); // => -2
console.log(min([1, 2, 3, -2, -9], 'index')); // => 3

// Best Practice
// apply() method calls a function with a given this value and arguments provided as an array
// the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.
function min(arr, toReturn) {	
	var val = Math.min.apply(this, arr);
	return toReturn == 'value' ? val : arr.indexOf(val);
}

/// v2
function min(arr, toReturn) {
	var val = arr.concat().sort(function(a, b) {
		return a - b;
	}, 0)[0];
	return toReturn == 'value' ? val : arr.indexOf(val);
}

// var a = [1, 2, 3, -2, 5];
// console.log(Math.sqrt.apply(this, a));
// console.log(a);