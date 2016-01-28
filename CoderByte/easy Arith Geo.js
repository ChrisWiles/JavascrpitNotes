// array of numbers stored in arr and return the string "Arithmetic" if 
// the sequence follows an arithmetic pattern or return "Geometric" if 
// it follows a geometric pattern. If the sequence doesn't follow either pattern return -1.

// An arithmetic sequence is one where the difference between each of the numbers is consistent,
//  Arithmetic example: [2, 4, 6, 8]

//  geometric sequence, each term after the first is multiplied by some constant or common ratio
//  Geometric example: [2, 6, 18, 54]

// Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 
function ArithGeo(arr) {
	var sum = arr.reduce(function(a, b) {
		return a + b;
	}, 0);

	// arithmetic
	var arithmeticSum = (0.5) * (arr.length * (arr[0] + arr[arr.length - 1]));

	if (sum === arithmeticSum) {
		return 'Arithmetic';
	}

	// geometric
	var geoConstant = arr[1] / arr[0];
	var geoSum = (arr[0] * (1 - Math.pow(geoConstant, (arr.length)))) / (1 - geoConstant);
	if (sum === geoSum) {
		return "Geometric";
	}
	// Nethier 
	return -1;
}

function ArithGeo(arr) {

    var arrDif = [];
    var arrQuo = [];
    var ariFlag = true;
    var geoFlag = true;

    for (var i = 0; i < arr.length - 1; i++) {
        arrDif.push(arr[i + 1] - arr[i]);
        arrQuo.push(arr[i + 1] / arr[i]);
    }

    for (var j = 0; j < arrDif.length - 1; j++) {
        if (arrDif[j] != arrDif[j + 1]) {
            ariFlag = false;
        }
        if (arrQuo[j] != arrQuo[j + 1]) {
            geoFlag = false;
        }
    }

    if (ariFlag) {
        return "Arithmetic";
    } else if (geoFlag) {
        return "Geometric";
    } else {
        return -1;
    }

}
console.log(ArithGeo([2,5,8,11,14])); // arithmetic
console.log(ArithGeo([2,10,50,250]));
console.log(ArithGeo([2, 6, 18, 54])); // Geometric