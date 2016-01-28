// Bonfire: Mutations

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.


function mutation(arr) {
	var a1 = arr[0].toLowerCase();
	var a2 = arr[1].toLowerCase();

	// find shorter array
	var short = 0;
	if(a1.length < a2.length) {
		short = a1.length;
	} else {
		short = a2.length;
	}

	// loop over each char in shorter array
	// seaching for char in longer array
	// return false if none found

	for(var i = 0; i < short; i++) {
		if(a1.search(a2.charAt(i)) === -1) {
			return false;
		}
	} 
	return true;
}
console.log(mutation(['hello', 'hey'])); // false
console.log(mutation(['abcd', 'dcbaz'])); // true
console.log(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu'])); // true