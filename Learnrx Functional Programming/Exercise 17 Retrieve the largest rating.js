function exercise() {
	var ratings = [2,3,1,4,5];

	// You should return an array containing only the largest rating. Remember that reduce always
	// returns an array with one item.
	return ratings.reduce(function(a, b) {
		if(a > b) {
			return a;
		}
		if(b > a) {
			return b;
		}
	});
}
console.log(exercise());
		