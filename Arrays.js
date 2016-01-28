// ARRAYS

// Array Methods 

// concat()	Joins two or more arrays, and returns a copy of the joined arrays
array1.concat(array2, array3,..., arrayX)
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var kai = ["Robin"];
var children = hege.concat(stale,kai); // Cecilie,Lone,Emil,Tobias,Linus,Robin

// indexOf()	Search the array for an element and returns its position
array.indexOf(item,start);
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple"); // 2

// join()	Joins all elements of an array into a string
array.join(separator)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join("-"); // Banana-Orange-Apple-Mango


// The lastIndexOf() method searches the array for the specified item, and returns it's position.
// The search will start at the specified position, or at the end if no start position is specified, and end the search at the beginning of the array.
// Returns -1 if the item is not found.
// If the item to search for is present more than once, the lastIndexOf method returns the position of the last occurence. 
array.lastIndexOf(item,start) // Returns -1 if the item is not found.


// The pop() method removes the last element of an array, and returns that element.
// Note: This method changes the length of an array.
// Tip: To remove the first element of an array, use the shift() method.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop(); // Banana,Orange,Apple

// The push() method adds new items to the end of an array, and returns the new length.
// Note: The new item(s) will be added at the end of the array.
// Note: This method changes the length of the array.
// Tip: To add items at the beginning of an array, use the unshift() method.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); //Banana,Orange,Apple,Mango,Kiwi

// reverse() Reverses the order of the elements in an array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse(); // Mango,Apple,Orange,Banana 

// The shift() method removes the first item of an array, and returns that item.
// Note: This method changes the length of an array!
// Tip: To remove the last item of an array, use the pop() method.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift(); // Orange,Apple,Mango

// The slice() method returns the selected elements in an array, as a new array object.
// Note: The original array will not be changed.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3); //Orange,Lemon

// sort()	        Sorts the elements of an array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // Apple,Banana,Mango,Orange

// compareFunction
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
// 1,5,10,25,40,100

// splice()	        Adds/Removes elements from an array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); //Banana,Orange,Lemon,Kiwi,Apple,Mango
array.splice(index,howmany,item1,.....,itemX)

// toString()	    Converts an array to a string, and returns the result
// Note: The returned string will separate the elements in the array with commas.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString(); // Banana,Orange,Apple,Mango


// The unshift() method adds new items to the beginning of an array, and returns the new length.
// Note: This method changes the length of an array.
// Tip: To add new items at the end of an array, use the push() method.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
// Lemon,Pineapple,Banana,Orange,Apple,Mango

// valueOf() Returns the primitive value of an array



// Iterative Methods

// Each of the methods accepts two
// arguments: a function to run on each item and an optional scope object in which to run the
// function (affecting the value of this). The function passed into one of these methods will receive
// three arguments: the array item value, the position of the item in the array, and the array object
// itself.

// every() — Runs the given function on every item in the array and returns true if the
// function returns true for every ite

// filter() — Runs the given function on every item in the array and returns an array of all
// items for which the function returns true.

// forEach() — Runs the given function on every item in the array. This method has no
// return value.

// map() — Runs the given function on every item in the array and returns the result of each
// function call in an array.

// some() — Runs the given function on every item in the array and returns true if the
// function returns true for any one item.

var numbers = [1,2,3,4,5,4,3,2,1];
var mapResult = numbers.map(function(item, index, array){
return item * 2;
});
alert(mapResult); //[2,4,6,8,10,8,6,4,2]

var numbers = [1,2,3,4,5,4,3,2,1];
var filterResult = numbers.filter(function(item, index, array){
return (item > 2);
});
alert(filterResult); //[3,4,5,4,3]

var numbers = [1,2,3,4,5,4,3,2,1];
numbers.forEach(function(item, index, array){ // a slower for loop
//do something here
});

var values = [1,2,3,4,5];
var sum = values.reduce(function(prev, cur, index, array){
return prev + cur;
});
alert(sum); //15

//////////Array prototype Constructor///////////////////
Array.prototype.myUcase = function() {
    for (i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
}
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.myUcase();

// Shuffle the Array
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
list = list.sort(function() Math.random() - 0.5);
Print(list); // prints something like: 4,3,1,2,9,5,6,7,8 

// Creates a random alphabetic string
function RandomString(length) {

	var str = '';
	for (; str.length < length; str += Math.random().toString(36).substr(2));
	return str.substr(0, length);
}

//  Get a random item from an array
var items = [12, 548, 'a', 2, 5478, 'foo', 8852, , 'Doe', 2145, 119];

var randomItem = items[Math.floor(Math.random() * items.length)];

// Get a random number in a specific range
var x = Math.floor(Math.random() * (max - min + 1)) + min;

//  Generate an array of numbers with numbers from 0 to max
var numbersArray = [],
	max = 100;

for (var i = 1; numbersArray.push(i++) < max;); // numbers = [1,2,3 ... 100]

//  Get the max or the min in an array of numbers
var  numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411]; 
var maxInNumbers = Math.max.apply(Math, numbers); 
var minInNumbers = Math.min.apply(Math, numbers);

// Use logical AND/ OR for conditions
var foo = 10;  
foo == 10 && doSomething(); // is the same thing as if (foo == 10) doSomething(); 
foo == 5 || doSomething(); // is the same thing as if (foo != 5) doSomething();

// Check the properties of an object when using a for-in loop
for (var name in object) {  
    if (object.hasOwnProperty(name)) { 
        // do something with name                    
    }  
}

// Ternary Operator 
var msg = num % 2 == 0 ? "Even" : "Odd";