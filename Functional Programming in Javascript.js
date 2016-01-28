//learnrx

// Traversing an Array
// Immediately-Invoked Function Expression (IIFE)
console.log("\nExercise 1\n");

(function printArray() {
	var names = ["One", "Two", "Three", "Four", "Five"];
	for (var i = 0; i < names.length; i++) {
		console.log(names[i]);
	}
})();

console.log("\nExercise 2\n");
// Exercise 2: Use forEach to print all the names in an array

(function() {
	var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

	names.forEach(function(name) {
		console.log(name);
	});
})();

var newReleases = [{
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
}, {
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
}];
// Applying a function to a value and creating a new value is called a projection. 
// To project one array into another, we apply a projection function to each item 
// in the array and collect the results in a new array.

// Exercise 3: Project an array of videos into an array of {id,title} pairs using forEach()

// For each video, add a projected {id, title} pair to the videoAndTitlePairs array.
console.log("\nExercise 3\n");

(function() {

	videoAndTitlePairs = [];

	// ------------   INSERT CODE HERE!  -----------------------------------
	// Use forEach function to accumulate {id, title} pairs from each video.
	// Put the results into the videoAndTitlePairs array using the Array's 
	// push() method. Example: videoAndTitlePairs.push(newItem);
	// ------------   INSERT CODE HERE!  -----------------------------------

	//console.log(newReleases[1].id);
	// forEach is looping through newReleases[i]

	newReleases.forEach(function(element, index, array) {
		// element = newReleases[i]

		videoAndTitlePairs.push({
			id: element.id,
			title: element.title
		});
	});

	console.log(videoAndTitlePairs);
	return videoAndTitlePairs;
})(newReleases);

console.log("\nExercise 4\n");

// Exercise 4: Implement map()
// To make projections easier, let's add a map() function to the Array type. 
// Map accepts the projection function to be applied to each item in the 
// source array, and returns the projected array.

(function() {
	var j = JSON.stringify([1, 2, 3].map(function(x) {
		return x + 1;
	}));
	console.log(j);
})();

console.log("\nExercise 5\n");

// Exercise 5: Use map() to project an array of videos into an array of {id,title} pairs

// Let's repeat the exercise of collecting {id, title} pairs for each video in the 
// newReleases array, but this time we'll use our map function.

function exercise5() {

	var map = newReleases.map(function(movie) {
		return {
			id: movie.id,
			title: movie.title
		};
	});
	return map;

}
console.log(exercise5(newReleases));

console.log("\nExercise 6\n");

// Exercise 6: Use forEach() to collect only those videos with a rating of 5.0

// Use forEach() to loop through the videos in the newReleases array and, 
// if a video has a rating of 5.0, add it to the videos array

function exercise6() {

	videos = [];

	newReleases.forEach(function(video) {
		if (video.rating === 5.0) {
			videos.push(video);
		}
	});

	return videos;
}
console.log(exercise6(newReleases));

console.log("\nExercise 8\n");

// Query Data by Chaining Method Calls

// Exercise 8: Chain filter and map to collect the ids of videos that have a rating of 5.0

function exercise8() {

	// ------------   INSERT CODE HERE!  -----------------------------------
	// Chain the filter and map functions to select the id of all videos
	// with a rating of 5.0.

	// var filterMap = newReleases.filter(function(movie) {

	// 	if (movie.rating === 5.0) {
	// 		return movie;
	// 	}
	// }).map(function(movie) {
	// 	return movie.id;
	// });

	// return filterMap;

	return newReleases.
	filter(function(movie) {
		return movie.rating === 5.0;
	}).
	map(function(movie) {
		return movie.id;
	});
}
console.log(exercise8(newReleases));

console.log("\nExercise 9\n");

// Sometimes, in addition to flat arrays, we need to query trees. 
// Trees pose a challenge because we need to flatten them into arrays 
// in order to apply filter() and map() operations on them. In this 
// section we'll define a mergeAll() function that we can combine 
// with map() and filter() to query trees.

// Exercise 9: Flatten the movieLists array into an array of video ids

// Let's start by using two nested forEach loops collect the id of 
// every video in the two-dimensional movieLists array.

function exercise9() {
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
		}],
		allVideoIdsInMovieLists = [];

	// collect the id of every video
	// movieLists[i] has elemements 

	// console.log(movieLists.videos[0].id);

	movieLists.forEach(function(element) {
		// cycle every element[index]
		element.videos.forEach(function(movie) {
			// cycle every element.videos[index] 
			// movieLists.videos[0].id
			// movieLists.videos[1].id
			allVideoIdsInMovieLists.push(movie.title);
		});
	});
	return allVideoIdsInMovieLists;

}
console.log(exercise9());

console.log("\nExercise 10\n");

// Exercise 10: Implement mergeAll()

// Let's add a mergeAll() function to the Array type. The mergeAll() function 
// iterates over each sub-array in the array and collects the results in a new, 
// flat array. Note: the mergeAll() function expects that each item in the 
// array will be another array.

Array.prototype.mergeAll = function() {
	var results = [];
	this.forEach(function(subArray) {
		results.push.apply(results, subArray);
	});

	return results;
};

var z01 = JSON.stringify([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
].mergeAll()); // "[1,2,3,4,5,6,7,8,9]"

console.log(z01);

console.log("\nExercise 11\n");

// Exercise 11: Use map() and mergeAll() to project and flatten the movieLists into an array of video ids

// Hint: use two nested calls to map() and one call to mergeAll().
function exercise11() {
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


	// Use map and mergeAll to flatten the movieLists in a list of video titles.
	// Hint: use two nested calls to map() and one call to mergeAll().
	return movieLists.map(function(movieList) {
		return movieList.videos.map(function(video) {
			return video.title;
		});
	}).mergeAll();

}
console.log(exercise11());

console.log("\nExercise 12\n");

// Exercise 12: Retrieve id, title, and a 150x200 box art url for every video
function exercise12() {
	var movieLists = [{
		name: "Instant Queue",
		videos: [{
			"id": 70111470,
			"title": "Die Hard",
			"boxarts": [{
				width: 150,
				height: 200,
				url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
			}, {
				width: 200,
				height: 200,
				url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"
			}],
			"url": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 4.0,
			"bookmark": []
		}, {
			"id": 654356453,
			"title": "Bad Boys",
			"boxarts": [{
					width: 200,
					height: 200,
					url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
				}, {
					width: 150,
					height: 200,
					url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"
				}

			],
			"url": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 5.0,
			"bookmark": [{
				id: 432534,
				time: 65876586
			}]
		}]
	}, {
		name: "New Releases",
		videos: [{
			"id": 65432445,
			"title": "The Chamber",
			"boxarts": [{
				width: 150,
				height: 200,
				url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"
			}, {
				width: 200,
				height: 200,
				url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"
			}],
			"url": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 4.0,
			"bookmark": []
		}, {
			"id": 675465,
			"title": "Fracture",
			"boxarts": [{
				width: 200,
				height: 200,
				url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
			}, {
				width: 150,
				height: 200,
				url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
			}, {
				width: 300,
				height: 200,
				url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
			}],
			"url": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 5.0,
			"bookmark": [{
				id: 432534,
				time: 65876586
			}]
		}]
	}];


	// Use one or more map, mergeAll, and filter calls to create an array with the following items
	// [
	//     {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
	//     {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },                
	//     {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
	//     {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }                
	// ];

	/*
	return movieLists.map(function(movieList) {
		return movieList.videos.map(function(video) {
			return video.boxarts;
		}).mergeAll();
	}).mergeAll();
	// returns all boxarts in single array
	*/
	return movieLists.map(function(movieList) {
		return movieList.videos.map(function(video) {
			return video.boxarts.filter(function(boxart) {
				return boxart.width === 150;
			}).map(function(boxart) {
				return {
					id: video.id,
					title: video.title,
					boxart: boxart.url
				};
			});
		}).mergeAll();
	}).mergeAll();

}
console.log(exercise12());
console.log("\nExercise 13\n");

['one', 'two', 'three', 'four'].forEach(function(ele, index, array) {
	console.log('array[' + index + '] = ' + ele);
});

console.log(Object.getOwnPropertyNames(newReleases));
console.log(Object.keys(newReleases));