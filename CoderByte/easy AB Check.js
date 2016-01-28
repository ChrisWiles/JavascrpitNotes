// return the string true if the characters a and b are separated by exactly 3 
// places anywhere in the string at least once (ie. "lane borrowed" would result 
// in true because there is exactly three characters between a and b)

function ABCheck(str) {

	str = str.toLowerCase();
	// mark all indexs of a or b
	// if |a-b| = 4 return true

	var indexA = [];
	var indexB = [];

	for (var i = 0; i < str.length; i++) {
		if (str[i] === 'a') {
			indexA.push(i);
		}
		if (str[i] === 'b') {
			indexB.push(i);
		}
	}

	for (var k = 0; k < indexA.length; k++) {
		for (var j = 0; j < indexB.length; j++) {
			if (Math.abs(indexA[k] - indexB[j]) === 4) {
				return true;
			}
		}
	}
	return false;
}


console.log(ABCheck("Laura sobs")); // true


function ABCheck(str) {

    // First, we declare two regex expressions to match if a and b ever occur three characters apart.
    // Note that . is a "wildcard" metacharacterin regex that matches almost any character.
    var testOne = /a...b/;
    var testTwo = /b...a/;

    // Next, we use the test method in conjunction with the regex expressions to see if our string contains any matching characters
    var aThenB = testOne.test(str);
    var bThenA = testTwo.test(str);

    // Finally, we return our answer
    return aThenB || bThenA;
}
