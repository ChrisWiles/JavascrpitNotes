// Traversing an Array

function printArray() {
  var names = ["One", "Two", "Three", "Four", "Five"];

  for (var i = 0; i < names.length; i++) {
    document.getElementById("demo").innerHTML = console.log(names[i]);
  }
}
printArray();

//two basic ways to create an empty object:

var obj = new Object();
var obj = {}; //object literal syntax

function Person(name, age) {
	this.name = name;
	this.age = age;
}

// Define an object
var You = new Person("You", 24);

// Once created, an object's properties can again be accessed in one of two ways:
obj.name = "Simon";
var name = obj.name;

// Object literal syntax can be used to initialize an object in its entirety:
var obj = {
	name: "Carrot",
	details: {
		color: "orange",
		size: 12
	}
}
obj.details.color; // orange

// Arrays
var a = ["dog", "cat", "hen"];
a.length; // 3

for (var i = 0, len = a.length; i < len; i++) {
  // Do something with a[i]
}

["dog", "cat", "hen"].forEach(function(currentValue, index, array) {
  // Do something with currentValue or array[index]
});

/*
a.toString()	                                    Returns a string with the toString() of each element separated by commas.
a.toLocaleString()	                                Returns a string with the toLocaleString() of each element separated by commas.
a.concat(item1[, item2[, ...[, itemN]]])            Returns a new array with the items added on to it.
a.join(sep)	                                        Converts the array to a string - values delimited by the sep param
a.pop()                                             Removes and returns the last item.
a.push(item1, ..., itemN)	                        Push adds one or more items to the end.
a.reverse()	                                        Reverse the array.
a.shift()	                                        Removes and returns the first item.
a.slice(start, end)	                                Returns a sub-array.
a.sort([cmpfn])	                                    Takes an optional comparison function.
a.splice(start, delcount[, item1[, ...[, itemN]]])	Lets you modify an array by deleting a section and replacing it with more items.
a.unshift([item])	                                Prepends items to the start of the array. */

