// Once:
// Write a function that takes an input function as an argument and returns a function 
// that will behave exactly the same as the input function the first time it is run, 
// store the result, and then on subsequent calls, return the stored result without executing the function.

var once = function(func) {
	var beenCalled = false;
	var answer;
	return function() {
		if (beenCalled === true) {
			return answer;
		} else {
			beenCalled = true;
			answer = func();
			return answer;
		}
	};
};

