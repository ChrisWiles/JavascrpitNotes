// return the second lowest and second greatest numbers, respectively, separated by a space
function SecondGreatLow(arr) {

	arr = arr.sort(function(a, b) {
		return a - b;
	});
	var secondLowest = 0;
	var secondGreatest = 0;
	var count = 0;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > count) {
			count++;
			if (count === 2) {
				secondLowest = arr[i];
			}
		}
	}
	count = 0;
	for (var j = 0; j < arr.length; j++) {
		if (arr[j] > count) {
			count++;
			if (count === arr.length - 1) {
				secondGreatest = arr[j];
			}
		}
	}

	return secondLowest + ' ' + secondGreatest;

}
console.log(SecondGreatLow([7, 7, 12, 98, 106])); // 12 98

function SecondGreatLow(arr) {

    // Use the sort function and pass in a callback to sort from smallest to largest
    
    arr = arr.sort(function(a, b) {
        return a - b;
    });

    // Loop through each item in the array and check if the adjacent array item is the same.
    for (var i = arr.length - 1; i > 0; i--) {
        if (arr[i] == arr[i - 1]) {
            // If it is, we use the .splice method to remove it.
            arr.splice(i, 1);
        }
    }

    if (arr.length > 2) {
        // If our array is longer than two items, we return the 2nd and 2nd to last item in the array.
        return arr[1] + " " + arr[arr.length - 2];
    } else if (arr.length == 2) {
        // If our array is exactly two items long, we return the 2nd and the first item
        return arr[1] + " " + arr[0];
    } else {
        // If our array is only one item, we return the only element twice.
        return arr[0] + " " + arr[0];
    }

}