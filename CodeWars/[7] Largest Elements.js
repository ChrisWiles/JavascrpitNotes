function largest(n, array) {

	return array.splice(0, n).sort(function(a, b) {
		return b - a;
	});
}



console.log(largest(2, [7, 6, 5, 4, 3, 2, 1])); // => [6,7]

//console.log([7, 6, 5, 4, 3, 2, 1].splice(0,2));
