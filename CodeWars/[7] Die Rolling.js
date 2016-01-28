// Hello! Today your task is to build a basic die feature, where you will get a 
// range in the form (min, max) - both included - and return a random number in the inclusive range.

// Props if you don't use your language's random library!


// Using Math.round() will give you a non-uniform distribution!
function dice(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min; // 7-2 = 5 range: 0-4 + 2 -> 2-6
}

 // returns a value that can be 2, 3, 4, 5, 6, 7


function test(num) {
	
	for(var i = 0; i < num; i++) {
		var r = dice(2, 7);
		console.log(r);
	}
}
test(10);

