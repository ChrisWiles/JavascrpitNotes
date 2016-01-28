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
Array.prototype.reduce = function(combiner, initialValue) {
	var counter,
		accumulatedValue;
	if (this.length === 0) {
		return this;
	} else {
		if (arguments.length === 1) {
			counter = 1;
			accumulatedValue = this[0];
		} else if (arguments.length >= 2) {
			counter = 0;
			accumulatedValue = initialValue;
		} else {
			throw "Invalid arguments.";
		}
		while (counter < this.length) {
			accumulatedValue = combiner(accumulatedValue, this[counter]);
			counter++;
		}

		return [accumulatedValue];
	}
};
// Zipping Arrays

// Sometimes we need to combine two arrays by progressively taking an item from each and combining the pair. If you visualize a zipper, where each side is an array, and each tooth is an item, you'll have a good idea of how the zip operation works.

// Exercise 21: Combine videos and bookmarks by index

// Use a for loop to traverse the videos and bookmarks array at the same time. For each video and bookmark pair, create a {videoId, bookmarkId} pair and add it to the videoIdAndBookmarkIdPairs array.

function exercise() {
	var videos = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
			}
		],
		bookmarks = [
			{id: 470, time: 23432},
			{id: 453, time: 234324},
			{id: 445, time: 987834}
		],
	counter,
	videoIdAndBookmarkIdPairs = [];

	for (counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
		videoIdAndBookmarkIdPairs.push({
			videoId: videos[counter].id,
			bookmarkId: bookmarks[counter].id
		});
		// Insert code here to create a {videoId, bookmarkId} pair and add it to the videoIdAndBookmarkIdPairs array.

	}

	return videoIdAndBookmarkIdPairs;
}
console.log(exercise());