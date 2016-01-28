// The mode is the value that appears most often in a set of data
// mean  the sum of the sampled values divided by the number of items in the sample

// return 1 if the mode equals the mean, 0 if they don't equal each other

function MeanMode(arr) {

	var mean = 0;
	var mode = 0;
	var sum = arr.reduce(function(a, b) {
		return a + b;
	});
	mode = sum / arr.length;
	var _0 = 0;
	var _1 = 0;
	var _2 = 0;
	var _3 = 0;
	var _4 = 0;
	var _5 = 0;
	var _6 = 0;
	var _7 = 0;
	var _8 = 0;
	var _9 = 0;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			_0++;
		}
		if (arr[i] === 1) {
			_1++;
		}
		if (arr[i] === 2) {
			_2++;
		}
		if (arr[i] === 3) {
			_3++;
		}
		if (arr[i] === 4) {
			_4++;
		}
		if (arr[i] === 5) {
			_5++;
		}
		if (arr[i] === 6) {
			_6++;
		}
		if (arr[i] === 7) {
			_7++;
		}
		if (arr[i] === 8) {
			_8++;
		}
		if (arr[i] === 9) {
			_9++;
		}
	}
	if (mode === mean) {
		return 1;
	}
	return 0;

}
console.log(MeanMode([5, 3, 3, 3, 1)); // 1 // mode (3) equals the mean (3)