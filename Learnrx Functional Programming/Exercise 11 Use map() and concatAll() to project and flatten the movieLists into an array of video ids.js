// Hint: use two nested calls to map() and one call to concatAll().
Array.prototype.concatAll = function() {
	var results = [];
	this.forEach(function(subArray) {
		results.push.apply(results, subArray);
	});

	return results;
};

function example() {
	var movieLists = [{
		name: "New Releases",
		videos: [{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 4.0,
			"bookmark": []
		}, {
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 5.0,
			"bookmark": [{
				id: 432534,
				time: 65876586
			}]
		}]
	}, {
		name: "Dramas",
		videos: [{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 4.0,
			"bookmark": []
		}, {
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 5.0,
			"bookmark": [{
				id: 432534,
				time: 65876586
			}]
		}]
	}];

	// Use map and concatAll to flatten the movieLists in a list of video ids.
	// Hint: use two nested calls to map() and one call to concatAll().



	return movieLists.map(function(movieList) {
		return movieList.videos.map(function(video) {
			return video.id;
		});
	}).concatAll();
}
console.log(example());