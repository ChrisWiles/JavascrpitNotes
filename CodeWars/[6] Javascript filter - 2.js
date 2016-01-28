// A friend of yours is developing an application for a hotel. 
// You should write a function that returns all names of the people on a given floor. 
// Every floor has 6 rooms, and all rooms are numbered in a consecutive way.

// The function has the following signature:

// function roomMates( rooms, floor ){}
// The argument rooms holds all clients in an array, where the index (starts at 0) corresponds to the room-number (starts at 1) and holds the name of the client.

// floor is an integer and denotes the floor whose names need to be returned. If the floor is empty, the function roomMates should return an empty Array.

// rooms = [ "foo", "bar" ]
// Means that foo (index 0) stays in room #1 of the 1st floor and bar (index 1) in room #2 of the 1st floor.

// Empty rooms shouldn't be returned, so he can directly count the number of occupied rooms by looking at the length of the array.

// You have to use the filter-method of Javascript, which returns each element of the array for which the filter-method returns true. 

// WORRKS
function roomMates(rooms, floor) {

	var f = (floor - 1) * 6;

	// floor is an integer and denotes the floor whose names need to be returned. 
	return rooms.concat().splice(0 + f, 6 + f).filter(function(ele, index, array) {
		return ele;
	});
}

// SPLICE REMOVES ARRAY
function roomMates(rooms, floor) {

	var f = (floor - 1) * 6;

	// floor is an integer and denotes the floor whose names need to be returned. 
	return rooms.splice(0 + f, 6 + f).filter(function(ele, index, array) {
		return ele;
	});
}

function roomMates(rooms, floor) {
	return rooms.slice(floor * 6 - 6, +floor * 6).filter(function(item) {
		return item;
	});
}

var r = ["foo", "bar", "", "barfoo", "", "barbar", "ying", "", "yingyang", "", "yangyang", "yingying"];
var f = 1; // ["foo","bar","barfoo","barbar"]



// console.log(roomMates(r, f));
console.log(roomMates(r, 1));
console.log(roomMates(r, 2));


