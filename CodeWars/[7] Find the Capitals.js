// Write a method that takes an array of hashes with two keys each: country or state, and capital. Keys may be symbols or strings

// The method should return an array of sentences declaring the state or country and its capital.



mixed_capitals = [{
	"state": 'Maine',
	capital: 'Augusta'
}, {
	country: 'Spain',
	"capital": "Madrid"
}, {
	state: 'Texas',
	"capital": "Austin"
}];

function capital(object) {
	var state = '';
	var Capital = '';
	var array = [];

	for (var i in object) {
		state = object[i].state;
		Capital = object[i].capital;
		country = object[i].country;
		if (!country) {
			array.push('The capital of ' + state + ' is ' + Capital);
		}
		if (!state) {
			array.push('The capital of ' + country + ' is ' + Capital);
		}
	}
	return array;
}
// Best Practice 
function capital(capitals) {
	return capitals.map(function(e) {
		return 'The capital of ' + (e.state || e.country) + ' is ' + e.capital;
	});
}
console.log(capital(mixed_capitals)); // "The capital of Maine is Augusta"