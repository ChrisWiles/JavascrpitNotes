// Bonfire: Where art thou

// Make a function that looks through a list (first argument) and 
// returns an array of all objects that have equivalent property values (second argument).

function where(collection, source) {
	var arr = [];
	var keyName = Object.keys(source)[0];
	for(var key in collection) {

		if(collection[key].hasOwnProperty(keyName) && collection[key][keyName] === source[keyName]){
		console.log(collection[key][0]);
		console.log(keyName);
		}

	}
	return arr;
}
var collection = [{
	first: 'Romeo',
	last: 'Montague'
}, {
	first: 'Mercutio',
	last: null
}, {
	first: 'Tybalt',
	last: 'Capulet'
}];

var source = {
	last: 'Capulet'
};



console.log(where([{
	first: 'Romeo',
	last: 'Montague'
}, {
	first: 'Mercutio',
	last: null
}, {
	first: 'Tybalt',
	last: 'Capulet'
}], {
	last: 'Capulet'
}));

// The hasOwnProperty() method returns a boolean indicating whether the object has the specified property.
// unlike the in operator, this method does not check down the object's prototype chain.

// The Object.keys() method returns an array of a given object's own enumerable properties, 
// in the same order as that provided by a for...in loop (the difference being that a 
// for-in loop enumerates properties in the prototype chain as well).

// function where(collection, source) {
//   var arr = [];
//   var keyName = Object.keys(source)[0];
//     collection.forEach(function(person) {
//         if (person.hasOwnProperty(keyName) && (person[keyName] === source[keyName])) {
//             //console.log(person[keyName]);
//            arr.push(person);
//         }
//     });
//     console.log("1"+ JSON.stringify(arr));
//     return arr;
// }