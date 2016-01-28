// In this Kata you need to will need to write two methods.

// Method 1

// The first method takes in a valid int (positive or negative) and returns the following:

// for any multiple of 3 the string "THREE",
// for any multiple of 5 the string "FIVE",
// for any multiple of both the string "BOTH",
// for all other numbers the original int.

// Method 2

// The second method takes valid ints (positive or negative) and returns a list of the values that follow the above rules.

// The first value may be greater than or less than the second and the list should increment/decrement appropriately

// For example an input of 10,13 should generate a response of ['FIVE', 11, 'THREE', 13].

function getNumber(number) {
	if (number % 3 === 0 && number % 5 === 0) {
		return 'BOTH';
	} else if (number % 3 === 0) {
		return 'THREE';
	} else if (number % 5 === 0) {
		return 'FIVE';
	} else {
		return number;
	}
}

function getNumberRange(first, last) {
	var array = [];
	if (first < last) {
		for (var i = first; i <= last; i++) {
			array.push(getNumber(i));
		}
	}
	if (first > last) {
		for (var j = first; j >= last; j--) {
			array.push(getNumber(j));
		}
	}
	return array;
}
console.log(getNumberRange(1, -15));