var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// What index is Z
str.length - 1; //
str.charAt(str.length - 1);// Z

// convert string to number
var str = '123';
parseInt(str); // 123
+str; // 123

////////////////////////////////////////////////////// Using Arrow functions
var arrows = [{range: 5}, {range: 10, damaged: true}, {damaged: true}];
// some() executes the callback function once for each element present in the 
// array until it finds one where callback returns a true value. 
// If such an element is found, some() immediately returns true.


// Using Arrow functions & some
function anyArrows(arrows){
  return arrows.some(a => !a.damaged);
}
// Using some
function anyArrows(arrows){
  return arrows.some(function() {
  	return !a.damaged;
  });
}
// using for loop
function anyArrows(arrows){
	for (var i = 0; i < arrows.length; i++) { 
		if(arrows[i].damaged) {
			return false;
		}
	}
}
/////////////////////////////////////////////////
var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryllium"
];

var a2 = a.map(function(s){ return s.length }); // [ 8, 6, 7, 9 ]
////////////////////////////////////////////////////////////////
function addLength(string) {
	var words = string.split(' ');
	var arr = [];
	words.forEach(function(el) {
		arr.push(el + ' ' + el.length);
	});
	return arr;
}
//  map() method creates a new array with the results of calling a provided function on every element in this array.
function addLength(string) {
    return string.split(' ').map(function(a) {
        return a + ' ' + a.length;
    });
}
// Arrows
function addLength(str) {
  return str.split(' ').map(v => v + ' ' + v.length);
}

// Return Negative 
function makeNegative(num) {
  return num < 0 ? num : -num;
}
// Swap values
function swapValues() {
  return arguments[0].reverse();
}
// number to fromCharCode
var ArrowFunc = function(arr) {
  return arr.map(function (e) {
    return String.fromCharCode(e);
  }).join('');
};
function ArrowFunc(arr) {
  return arr.map( x => String.fromCharCode(x) ).join(''); 
}
[70,85,83,32,82,79,72,32,68,65,72] // 'FUS ROH DAH'
/////////////////////
function last(list){
  var last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}
// Isogram no meaching letters
function isIsogram(str) {
	var s = str.toLowerCase();
	var matchs = 0;

	for (var i = 0; i < str.length; i++) {
		for (var j = 0; j < str.length; j++) {
			if (s[i] === s[j]) {
				matchs++;
			}
		}
	}
	console.log(matchs);
	if (matchs !== str.length) {
		return false;
	}
	return true;
}
function isIsogram(str){
  return !str.match(/(.).*\1/i);
}
isIsogram("Dermatoglyphics");
///////////////////////////////////////////////////////////////
var dogs =  [
	{name: 'A1', sex: 'M'},
	{name: 'B2', sex: 'M'},
	{name: 'C3', sex: 'M'},
	{name: 'D4', sex: 'M'},
	{name: 'E5', sex: 'F'},
	{name: 'F6', sex: 'F'},
	{name: 'G7', sex: 'F'},
	{name: 'H8', sex: 'F'}
];

var names = [];
for (var i = 0; i < dogs.length; i++) {
	names.push(dogs[i].name);
}

var names = dogs.map(function(dog) {
	return dog.name;
});

var maleDogs = dogs.filter(function(dog) {
   return dog.sex == 'M'; 
});
console.log(maleDogs);

////////////////////
function formatMoney(number) {
	
	var dollars = number.toFixed(2).toString().split('');

	if (dollars.length > 4) {
		for (var i = dollars.length - 6; i > 0; i -= 3) {
			dollars.splice(i,0,',');
		}
	}
	dollars.splice(0,0,'$');
	return dollars.join('');
}

console.log(formatMoney(1234123));

// Flattening
var arrays = [
	[1, 2, 3],
	[4, 5],
	[6]
];
console.log(arrays.reduce(function(flat, current) {
	return flat.concat(current);
}, [])); // [ 1, 2, 3, 4, 5, 6 ]

// EVERY()
function every(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (!predicate(array[i]))
      return false;
  }
  return true;
}
// SOME()
function some(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i]))
      return true;
  }
  return false;
}
// Reversing an Array
function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}