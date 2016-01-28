var forEach = function(input, func) {
	// check if input is obj or array
	if (Array.isArray(input)) {
		// loop for array
		for (var i = 0; i < input.length; i++) {
			func(input[i]);
		}
	} else if (input.constructor === Object) {
		// could also do if (typeof input === 'object' && typeof input !== null)
		// typeof is an operator so do not need to use () 
		// for in loop for object
		for (var key in input) {
			func(input[key]);
		}
	}
	// do nothing if the input is empty 
	// else return a default error message 
};

/*var testInput = [1,2,3,4,5];
var testFunc = function (n) { 
	console.log(n*3); 
};
*/

//forEach(testInput, testFunc);

var map = function(input, func) {
	// set empty array to store mapped inputs
	var mapped = [];
	// use forEach as a callback
	// var element 
	// return mapped array
	var newFunc = function(element) {
		var newElement = func(element); // not a function! 
		mapped.push(newElement);
	};
	forEach(input, newFunc); // calls newFunc
	//var element = func(input[i]);
	/*for (var i = 0; i < input.length; i++) {
		newInput = func(input[i]);
		mapped.push(newInput);
	} */
	return mapped;
};

var testMap = [1, 2, 3, 4, 5];
var testMapFunc = function(n) {
	return (n + 2);
};

console.log(map(testMap, testMapFunc));

Skip to content
This repository
Pull requests
Issues
Gist@ ChrisWiles
Watch 1
Star 2
Fork 3
batmanimal / javascript - learnings
Branch: master javascript - learnings / callbacks - halp / callback - practice.js@ batmanimalbatmanimal on Mar 14 organized my folders
1 contributor
RawBlameHistory 165 lines(145 sloc) 3.807 kB
	// // callback-practice.js

// // forEach iterates over an input and applies a function to each element 
// var forEach = function (input, func) {
// 	// check for empty arrays or null input
// 	if (input.length === 0 || input === null) {
// 		return input;
// 	}
// 	// if array 
// 	if (Array.isArray(input)) {
// 		// create testCounter array for logging when testing
// 		var testCounter = [];
// 		for (var i = 0; i < input.length; i++) {
// 			testCounter.push(func(input[i]));
// 		}
// 		// return testCounter for test mode only - forEach should not actually return anything 
// 		return testCounter;
// 	}
// 	// if object literal 
// 	else if (typeof input === "object") {  // checks to make sure input is not a function 
// 		// do something else
// 		var testCounter = {};
// 		for (var key in input) {
// 			testCounter[key] = func(input[key]);	
// 		}
// 		return testCounter;
// 	} else {
// 		return "wut";
// 	}
// };


var testArray = [1, 2, 3, 4, 5];
var testObject = {
	1: 1,
	2: 2
};
var emptyObject = {};
var emptyArray = [];
var testFunc = function(n) {
	return n > 1;
};


// console.log(forEach( function (n) { return 1}, testFunc));
// console.log(forEach(0, testFunc));
// console.log(forEach(testArray, testFunc));
// console.log(forEach(testObject, testFunc));
// console.log(forEach(emptyObject, testFunc));
// console.log(forEach(emptyArray, testFunc));


var forEach = function(input, func) {
	if (input.length === 0 || input == null) {
		return input;
	} else if (Array.isArray(input)) {
		for (var i = 0; i < input.length; i++) {
			func(input[i]);
		}
	} else if (typeof input === "object") {
		for (var key in input) {
			func(input[key]);
		}
	} else {
		return "wut";
	}
};

// map iterates over an input, applies a function to each element, and returns an array of the mapped elements
var map = function(input, func) {
	var mapped = [];
	var pushIt = function(element) {
		//	var mappedElement = func(element);
		mapped.push(func(element));
	};
	forEach(input, pushIt);
	return mapped;
};

// filter returns an object that contains only elements from an input that pass a given test
var filter = function(input, test) {
	var passed = [];
	var pushFiltered = function(element) {
		if (test(element)) {
			passed.push(element);
		}
	};
	forEach(input, pushFiltered);
	return passed;
};



console.log(filter(testArray, testFunc));
console.log(filter(testObject, testFunc));
console.log(map([], testFunc));
console.log(map({}, testFunc));
console.log(map("hi", testFunc));
console.log(map(0, testFunc));



var forEach = function(input, func) {
	// if input is empty
	if (input.length === 0 || input == null) {
		// return the input
		return input;
	}
	// if input is array
	else if (Array.isArray(input)) {
		// loop over each element 
		for (var i = 0; i < input.length; i++) {
			// apply func to each element
			func(input[i]);
		}
	}
	// if input is object
	else if (constructor.input === Object) {
		// loop over each element 
		for (var key in input) {
			// apply func to each element	
			func(input[key]);
		}
	} else {
		// else input is not valid 
		return "wut";
	}
	// return an error message 
};

var map = function(input, func) {
	var mapped = [];
	// if array
	if (Array.isArray(input)) {
		for (var i = 0; i < input.length; i++) {
			// push mapped elements
			mapped.push(func(input[i]));
		}
	}
	// if object
	else if (input.constructor === Object) {
		// push mapped elements
		for (var key in input) {
			mapped.push(func(input[key]));
		}
	}
	return mapped;
};

var newMap = function(input, func) {
	var mapped = [];
	var pushToMapped = function(element) {
		mapped.push(func(element));
	};
	forEach(input, pushToMapped);
	return mapped;
};

var testArr = [1, 2, 3, 4, 5];
var testFunc = function(a) {
	return a + 1;
};

console.log(map(testArr, testFunc));
// []


var forEach = function(input, func) {
	// check if input is obj or array
	if (Array.isArray(input)) {
		// loop for array
		for (var i = 0; i < input.length; i++) {
			func(input[i]);
		}
	} else if (input.constructor === Object) {
		// could also do if (typeof input === 'object' && typeof input !== null)
		// typeof is an operator so do not need to use () 
		// for in loop for object
		for (var key in input) {
			func(input[key]);
		}
	}
	// do nothing if the input is empty 
	// else return a default error message 
};


var testArr = [1, 2, 3, 4, 5];
var testObj = {
	name: "Batman",
	toys: "people",
	food: "animals"
};

function plusOne(n) {
	return n + 1;
}

function funcCaller(func, arg) {
	return func(arg);
};
console.log(funcCaller(plusOne, 1));

function firstVal(arr, func) {
	return func(arr[0]);
}

console.log(firstVal(testArr, plusOne));

// Write a function called checkValue that searches an array for a value. 
// It takes an array and a value and returns true if the value exists in the array, otherwise it returns false.

var checkValue = function(arr, value) {
	if (arr.indexOf(value) > 0) {
		return true;
	} else {
		return false;
	}
};

// Rewrite checkValue using _.each. Make sure that you have underscore.js included where you are running your code.

var newCheckValue = function(arr, value) {
	var isInArray = false;
	var testForValue = function(element) {
		if (element === value) {
			isInArray = true;
		}
	};
	forEach(arr, testForValue);
	return isInArray;
};

// Write a loop that pushes all the values in an object to an array.

var objectPusher = function(obj) {
	// empty array
	var newArr = [];
	// create function to push each element to array
	var elementPusher = function(element) {
		newArr.push(element);
	};
	// loop over each element of object
	forEach(obj, elementPusher);
	// return array
	return newArr;
};

console.log(objectPusher(testObj));
// ["Batman", "people", "animals"]

console.log(testArr.indexOf(3));
console.log(checkValue(testArr, 1));
console.log(newCheckValue(testArr, "eggs"));

function nonsense(string) {
	var blab = function() {
		console.log(string);
	};
	//setTimeout(blab, 2000);
	return blab;
}

var blabLater = nonsense("hi");
var blabAgainLater = nonsense("bye");
blabLater();
blabAgainLater();

var nameMaker = function(firstName) {
	var innerNameMaker = function(lastName) {
		console.log(firstName + " " + lastName);
	};
	return innerNameMaker;
};

var nameMakerJ = nameMaker("j");
nameMakerJ("kim");

//var storyWriter = function()

var addWords = function(string) {
	var story = "";
	story = story + " " + string;
	return story;
};

var instance = addWords("wut");
console.log(instance);

Skip to content
This repository
Pull requests
Issues
Gist@ ChrisWiles
Watch 1
Star 2
Fork 3
batmanimal / javascript - learnings
Branch: master javascript - learnings / eloquentjs / eloquent.js@ batmanimalbatmanimal on Mar 14 organized my folders
1 contributor
RawBlameHistory 176 lines(150 sloc) 4.291 kB
	// Chapter 5 Notes 

// *** forEach **
// iterate over object or array and do something to each element 
function forEach(input, action) {
	// condition to check for array 
	if (input.constructor === Array) {
		for (var i = 0; i < input.length; i++)
			action(input[i]);
	}
	// condition to check for object 
	else if (input.constructor === Object) {
		for (var key in input) {
			//input[key] = action(input[key]); // this changes original input object - don't want to do this!  
			action(input[key]);
		}
	}
}



// build simple sumOf function to use in your forEach test
var sum = 0; // counter var
var sumOf = function(number) {
	sum += number;
};

// test array
var numbers = [1, 2, 3, 4, 5];
// run forEach on array
forEach(numbers, sumOf);
console.log("the below was forEach'd");
console.log("the sum is " + sum);
// the sum is 15

// test object
var numbersObj = {
	1: 1,
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6
};

// run forEach on object 
sum = 0; // reset counter var to 0 
forEach(numbersObj, sumOf);
console.log("the below was forEach'd");
console.log("the sum is " + sum);
// the sum is 21 

// *** functions can even create new functions *** 
/* function greaterThan(n) {
  return function(m) { return m > n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); */
// true


// ** filter ** 
// this function filters out elements that do not pass a test and returns the new object - does not modify the input object 
function filter(input, test) {
	if (input.constructor === Array) {
		var passed = [];
		for (var i = 0; i < input.length; i++) {
			if (test(input[i])) {
				passed.push(input[i]);
			}
		}
	} else if (input.constructor === Object) {
		var passed = {};
		for (var key in input) {
			if (test(input[key])) {
				passed[key] = input[key];
			}
		}
	}
	console.log("the below was filtered");
	console.log(passed);
}

// create a simple test function 
var test = function(a) {
	if (typeof a === "number") {
		return a;
	}
};
// and another one 
var test2 = function(a) {
	return a > 3;
};
// test transform function 
var testTransform = function(a) {
	return a * 2;
};

filter(numbers, test); // [1,2,3,4,5]
filter(numbersObj, test); // { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5 }
filter(numbersObj, test2); // { '4': 4, '5': 5 }
filter(numbers, test2); // [4, 5] 


// *** map ***
// this function transforms an input by applying a function to all its elements and building a new array or object with the returned values
// the returned array will have the same length as the input array
function map(input, transform) {
	if (input.constructor === Array) {
		var mapped = [];
		for (var i = 0; i < input.length; i++) {
			mapped.push(transform(input[i]));
		}
		return mapped;
	} else if (input.constructor === Object) {
		var mapped = {};
		for (var key in input) {
			mapped[key] = transform(input[key]);
		}
		return mapped;
	}
}

console.log("the below was mapped");
console.log(map(numbers, testTransform));
console.log("the below was mapped");
console.log(map(numbersObj, testTransform));

// *** reduce ***
// this function computes a single value from an array or object input 
function reduce(input, combine, start) {
	if (start == undefined) {
		start = 0;
	}
	var current = start;
	if (input.constructor === Array) {
		for (var i = 0; i < input.length; i++) {
			current = combine(current, input[i]);
		}
		return current;
	} else if (input.constructor === Object) {
		for (var key in input) {
			current = combine(current, input[key]);
		}
		return current;
	}
}
// test function
var testCombine = function(a, b) {
	return a + b;
};
console.log("the below was reduced");
console.log(reduce(numbers, testCombine, undefined));
console.log("the below was reduced");
console.log(reduce(numbersObj, testCombine, 0));



// EXERCISES 

/* 5.1 Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array 
that has all the elements of the input arrays. */
var arrays = [
	[1, 2, 3],
	[4, 5],
	[6]
];

console.log("the output of ex 5.1 is below"); // log to keep track of what exercise I'm on 
console.log(arrays.reduce(function(a, b) { // access reduce as a method of arrays 
		return a.concat(b)
	}, // params (function, start)
	[])); // empty array is start value 



// Filter
// Params: array, predicate (function that tests something on each item) 

// takes in an array and a predicate (test) that items in the array must pass before being pushed into the resulting array

function filter(array, test) {
	var passed = [];
	for (var i = 0; i < array.length; i++) { // for loop - could use forEach function here 
		if (test(array[i]))
			passed.push(array[i]);
	}
	return passed;
}

// call the function. created simple test condition to return elements < 1. 

console.log(filter([0, 0, 0, 1], function(x) {
	return x < 1;
}));
// [0, 0, 0]


// filter for object
// Params: object, test 

function filter(obj, test) {
	var passed = {};
	for (var key in obj) {
		if (test(obj[key])) {
			passed[key] = obj[key];
		}
	}
	return passed;
}

// now need to call the function on an object 

function filter(input, test) {
	if (input.constructor === Array) {
		var passed = [];
		for (var i = 0; i < input.length; i++) {
			if (test(input[i])) {
				passed.push(input[i]);
			}
		}
	} else if (input.constructor === Object) {
		var passed = {};
		for (var key in input) {
			if (test(input[key])) {
				passed[key] = input[key];
			}
		}
	}
};

