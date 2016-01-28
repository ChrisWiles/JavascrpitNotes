// The concat() method is used to join two or more arrays.
// This method does not change the existing arrays, but returns a new array, containing the values of the joined arrays.
var num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];

var nums = num1.concat(num2, num3);

console.log(nums); // Result: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]

// The join() method joins all elements of an array into a string.
var a = ['Wind', 'Rain', 'Fire'];
var myVar1 = a.join();      // assigns 'Wind,Rain,Fire' to myVar1
var myVar2 = a.join(', ');  // assigns 'Wind, Rain, Fire' to myVar2
var myVar3 = a.join(' + '); // assigns 'Wind + Rain + Fire' to myVar3
var myVar4 = a.join('');    // assigns 'WindRainFire' to myVar4

// The length property represents an unsigned, 32-bit integer that specifies the number of elements in an array.
if (statesUS.length > 50) { //shorten array
  statesUS.length = 50;
}

// The pop() method removes the last element from an array and returns that element.
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

console.log(myFish); // ['angel', 'clown', 'mandarin', 'sturgeon']

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ] 

console.log(popped); // 'sturgeon

// slice() returns the sliced array but doesnt change the orginal array

var GFs = ['Winter', 'Spring', 'summer', 'fall', 'rain', 'harvest'];

GFs.slice(2); //['summer', 'fall', 'rain', 'harvest']

GFs.slice(2, 2); //['summer', 'fall'] 

GFs; //['Winter', 'Spring', 'summer', 'fall', 'rain', 'harvest']; 

// splice() changes the orignal array
var GFs = ['Winter', 'Spring', 'summer', 'fall', 'rain', 'harvest'];

GFs.splice(2); //['summer', 'fall', 'rain', 'harvest']

GFs; // ['Winter', 'Spring']

GFs.splice(2, 2); // ['summer', 'fall'] 

GFs.splice(2, 2, 'Texas GF', 'Florida GF', 'Hawai GF'); // ["summer", "fall"]

 GFs; // ["Winter", "Spring", "Texas GF", "Florida GF", "Hawai GF", "rain", "harvest"] 
  
// callback function of map, filter, some, every, forEach has three parameters: elem, index, arr. And you can optionally pass "this" as second argument of these Array method.

// forEach dont return anything. it just run the callback functionf or each element of the array
 [1, 2, 3].forEach(function(elem, index, arr) {
 	console.log(elem);
 });

// map returns new array by executing the callback function for each elements of the array
[1, 2, 3].map(function(elem, index, arr) {
	return elem * elem;
}); // [1, 4, 9];

// filter if the condition is true for an element, element is picked for the return array
[1, 2, 3, 4, 5, 6, 7].filter(function(elem, index, arr) {
	return index % 2 == 0;
}); // [1, 3, 5, 7]

// some if any of element in the arrya fulfil the condition, some will return true else will return false
[1, 2, 3, 4].some(function(elem, index, arr) {
	return elem > 3;
}); // true

// every it will return true if every elements in the array fulfil the condition. else return false
[1, 2, 3, 4].every(function(elem, index, arr) {
	return elem > 3;
}); // false

// reduce cache the value. for example u want to get the sum of all the element. alternatively, you can initially
[1, 2, 3, 4].reduce(function(sum, el, idx, arr){
  return sum + el;
}) // 10

[1, 2, 3, 4].reduce(function(sum, el, idx, arr) {
	return sum + el;
}, 100) // 110


