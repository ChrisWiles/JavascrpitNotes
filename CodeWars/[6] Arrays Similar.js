function arraysSimilar(arr1, arr2) {
	arr1 = arr1.sort(sortFunc);
	arr2 = arr2.sort(sortFunc);
	return arr1.length == arr2.length && arr1.every(function(a, i) {
		return a === arr2[i];
	});
}

function sortFunc(a, b) {
	return a - b;
}

function arraysSimilar(arr1, arr2) {
	var bool = true;
	var a1 = arr1.sort();
	var a2 = arr2.sort();

	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			bool = false;
		}
	}
	return bool; 
}