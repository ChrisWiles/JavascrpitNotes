// Find the middle element
// As a part of this Kata, you need to create a function that when provided with a triplet, 
// returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme(array) {
	var arrayCopy = array.slice(0);
	var sorted = array.sort(function(a, b) {
		return a - b;
	});

	var middleArray = sorted[1];
	var findIndexMiddle = arrayCopy.indexOf(middleArray);

	return findIndexMiddle;
}

function gimme2(a) {
	return a.indexOf(a.concat().sort(function(a, b) {
		return a - b;
	})[1]);
}

// concat duplicates the input array.
// It must be done because sort modifies it.
console.log(gimme2([-59, -68, -80])); // 1
console.log(gimme2([-80, -86, -90])); // 1
console.log(gimme2([-84, -93, -61])); // 0
console.log(gimme2([-88, -57, -73])); // 2
console.log(gimme2([-59, -91, -74])); // 2
console.log(gimme2([-71, -72, -57])); // 0


function randomNumbers(num) {
	var array = [];

	for (var i = 0; i < num; i++) {
		array.push(Math.round((Math.random() - 0.5) * 10000));
	}
	return array;
}

function testCases() {
	var True = 0;
	var False = 0;
	var count = 0;

	// var rad = function() { // create new random every call
	// 	return randomNumbers(3);
	// };
	for (var i = 0; i < 100; i++) {
		var rad = randomNumbers(3);
		var value1 = gimme(rad);
		var value2 = gimme2(rad);

		console.log(value1 + ' ' + value2);


		if (value1 === value2) {
			True++;
		} else if (value1 != value2) {
			False++;
		} else {
			count++;
		}
	}
	console.log('T: ' + True +'\n' + 'F: ' + False);
}

testCases();

// 8 kyu kata represent a beginner level. At this level the kata is only challenging 
// for users new to programming. This includes programming tasks such as:

// Defining a simple function (i.e. hello world)
// Basic variable assignments
// Basic math operations (such as addition or multiplication)
// Fixing basic syntax issues


// 7 kyu kata represent a beginner programming level. At this level the kata will generally 
// challenge users on their core language and API reference knowledge. Tasks such as:

// Iterating arrays and returning a subset of values
// Basic data type manipulations
// Common operations such as sorting (using built-in sorting methods)
// Trivial algorithms such as basic if/else statements

// 6 kyu kata represent a novice programming level. At this level the kata will start to 
// include simple algorithmic challenges and more complex language features. It includes:

// Simple algorithms. For example:
// Reversing every other word
// Comparing Arrays
// Complex language features that require OOP/Functional concepts.

// 5 kyu kata represent a novice programming level. 
// At this level the kata are similar to 6 kyu but more challenging. It includes:

// Simple algorithms. For example:
// converting string casing
// custom sorting
// Complex language features that require mature OOP/Functional concepts.

// 4 kyu kata represent a competent programming level. At this level the kata begin to take some 
// serious thought to complete. They include tasks that may handle:

// Complex algorithms
// Basic design patterns
// Complex regular expressions
// Understanding more detailed requirements

// 3 kyu kata represent a competent programming level. At this level the kata are similar to 4 
// kyu but are more challenging. They include tasks that may handle:

// Complex algorithms
// Basic design patterns
// Complex regular expressions
// Understanding more detailed requirements

// 2 kyu kata represent a proficient programming level. At this level kata require a mature understanding 
// of complex programming concepts - concepts such as:

// Advanced design patterns
// Advanced algorithms (machine learning, graphs, interpreters, etc)
// Reverse engineering techniques
// Advanced language techniques (meta-programming, regex, etc)

// 1 kyu kata represent a proficient programming level. At this level kata are similar to 
// 2 kyu but more challenging. They may include concepts such as:

// Advanced design patterns
// Advanced algorithms (machine learning, graphs, compilers, etc)
// Reverse engineering techniques
// Advanced language techniques (meta-programming, regex, etc)