// In this example we use forEach to find the largest box art. 
// Each time we examine a new boxart we update a variable with the currently known maximumSize. 
// If the boxart is smaller than the maximum size, we discard it. 
// If it's larger, we keep track of it. Finally we're left with a single boxart which must necessarily be the largest.
Array.prototype.concatAll = function() {
	var results = [];
	this.forEach(function(subArray) {
		results.push.apply(results, subArray);
	});

	return results;
};
Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
	return this.map(function(item) {
			// Apply the projection function to each item. The projection
			// function will return an new child array. This will create a
			// two-dimensional array.
			return projectionFunctionThatReturnsArray(item);
		}).concatAll(); // apply the concatAll function to flatten the two-dimensional array
};

function exercise() {
	var boxarts = [
			{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
			{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
			{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
			{ width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
		],
		currentSize,
		maxSize = -1,
		largestBoxart;

		boxarts.forEach(function(boxart) {
			currentSize = boxart.width * boxart.height;
			if(currentSize > maxSize) {
				maxSize = currentSize; 
				largestBoxart = boxart;
			}
		});

	return largestBoxart;
}
console.log(exercise());