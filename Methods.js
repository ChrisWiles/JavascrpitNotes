// Arrays
// join()
// length()
// pop()
// push()
// reverse()
// shift()
// unshift()
// slice()
// splice()
// Object.keys(yourObjectHere)

// Strings
// charAt()
// concat()
// indexOf()
// length()
// search()
// slice()
// split()
// sub()
// substr()
// toLowerCase()
// toUpperCase()

array.concat(item);
// The concat method produces a new array containing a shallow copy of this array with the
// items appended to it. If an item is an array, then each of its elements is appended
// individually.

var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.concat(b, true);
// c is ['a', 'b', 'c', 'x', 'y', 'z', true]

array.join(separator);
// The join method makes a string from an array . It does this by making a string of each of
// the array 's elements, and then concatenating them all together with a separator
// between them. The default separator is ','. To join without separation, use an empty
// string as the separator.
// If you are assembling a string from a large number of pieces, it is usually faster to put the
// pieces into an array and join them than it is to concatenate the pieces with the + operator:
var a = ['a', 'b', 'c'];
a.push('d');
var c = a.join(''); // c is 'abcd';

array.pop( );
// The pop and push methods make an array work like a stack. The pop method removes
// and returns the last element in this array . If the array is empty, it returns undefined.
var a = ['a', 'b', 'c'];
var c = a.pop( ); // a is ['a', 'b'] & c is 'c'

// pop can be implemented like this:
Array.method('pop', function ( ) {
	return this.splice(this.length - 1, 1)[0];
});

array.push(item...);
// The push method appends items to the end of an array. Unlike the concat method, it
// modifies the array and appends array items whole. It returns the new length of the array:
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.push(b, true);
// a is ['a', 'b', 'c', ['x', 'y', 'z'], true]
// c is 5;

// push can be implemented like this:
Array.method('push', function() {
	this.splice.apply(
		this, [this.length, 0].concat(Array.prototype.slice.apply(arguments)));
	return this.length;
});

array.reverse( );
// The reverse method modifies the array by reversing the order of the elements. It returns
// the array:
var a = ['a', 'b', 'c'];
var b = a.reverse( );
// both a and b are ['c', 'b', 'a']

array.shift( );
// The shift method removes the first element from an array and returns it. If the array is
// empty, it returns undefined. shift is usually much slower than pop:
var a = ['a', 'b', 'c'];
var c = a.shift( ); // a is ['b', 'c'] & c is 'a'

// shift can be implemented like this:
Array.method('shift', function() {
	return this.splice(0, 1)[0];
});

array.slice(start, end );
// The slice method makes a shallow copy of a portion of an array . The first element
// copied will be array [ start ]. It will stop before copying array [ end ]. The end
// parameter is optional, and the default is array .length. If either parameter is negative,
// array .length will be added to them in an attempt to make them nonnegative. If start
// is greater than or equal to array .length, the result will be a new empty array. Do not
// confuse slice with splice. Also see string .slice later in this chapter.
var a = ['a', 'b', 'c'];
var b = a.slice(0, 1); // b is ['a']
var c = a.slice(1); // c is ['b', 'c']
var d = a.slice(1, 2); // d is ['b']

array.sort(comparefn );
// The sort method sorts the contents of an array in place. It sorts arrays of numbers
// incorrectly:
var n = [4, 8, 15, 16, 23, 42];
n.sort( );
// n is [15, 16, 23, 4, 42, 8]

n.sort(function(a, b) {
	return a - b;
});
// n is [4, 8, 15, 16, 23, 42];
// That function will sort numbers, but it doesn't sort strings. If we want to be able to sort any
// array of simple values, we must work harder:

var m = ['aa', 'bb', 'a', 4, 8, 15, 16, 23, 42];
m.sort(function(a, b) {
	if (a === b) {
		return 0;
	}
	if (typeof a === typeof b) {
		return a < b ? -1 : 1;
	}
	return typeof a < typeof b ? -1 : 1;
});
// m is [4, 8, 15, 16, 23, 42, 'a', 'aa', 'bb']

// Function by takes a member name string and returns
// a comparison function that can be used to sort an
// array of objects that contain that member.
var by = function(name) {
	return function(o, p) {
		var a, b;
		if (typeof o === 'object' && typeof p === 'object' && o && p) {
			a = o[name];
			b = p[name];
			if (a === b) {
				return 0;
			}
			if (typeof a === typeof b) {
				return a < b ? -1 : 1;
			}
			return typeof a < typeof b ? -1 : 1;
		} else {
			throw {
				name: 'Error',
				message: 'Expected an object when sorting by ' + name;
			};
		}
	};
};

var s = [
{first: 'Joe', last: 'Besser'},
{first: 'Moe', last: 'Howard'},
{first: 'Joe', last: 'DeRita'},
{first: 'Shemp', last: 'Howard'},
{first: 'Larry', last: 'Fine'},
{first: 'Curly', last: 'Howard'}
];
s.sort(by('first')); // s is [
// {first: 'Curly', last: 'Howard'},
// {first: 'Joe', last: 'DeRita'},
// {first: 'Joe', last: 'Besser'},
// {first: 'Larry', last: 'Fine'},
// {first: 'Moe', last: 'Howard'},
// {first: 'Shemp', last: 'Howard'}
// ]

array.splice(start, deleteCount, item...);
// The splice method removes elements from an array, replacing them with new item s.
// The start parameter is the number of a position within the array . The deleteCount
// parameter is the number of elements to delete starting from that position. If there are
// additional parameters, those item s will be inserted at the position. It returns an array
// containing the deleted elements.
// The most popular use of splice is to delete elements from an array. Do not confuse
// splice with slice:
var a = ['a', 'b', 'c'];
var r = a.splice(1, 1, 'ache', 'bug');
// a is ['a', 'ache', 'bug', 'c']
// r is ['b']

// splice can be implemented like this:
Array.method('splice', function(start, deleteCount) {
	var max = Math.max,
		min = Math.min,
		delta,
		element,
		insertCount = max(arguments.length - 2, 0),
		k = 0,
		len = this.length,
		new_len,
		result = [],
		shift_count;
	start = start || 0;
	if (start < 0) {
		start += len;
	}
	start = max(min(start, len), 0);
	deleteCount = max(min(typeof deleteCount === 'number' ?
		deleteCount : len, len - start), 0);
	delta = insertCount - deleteCount;
	new_len = len + delta;
	while (k < deleteCount) {
		element = this[start + k];
		if (element !== undefined) {
			result[k] = element;
		}
		k += 1;
	}
	shift_count = len - start - deleteCount;
	if (delta < 0) {
		k = start + insertCount;
		while (shift_count) {
			this[k] = this[k - delta];
			k += 1;
			shift_count -= 1;
		}
		this.length = new_len;
	} else if (delta > 0) {
		k = 1;
		while (shift_count) {
			this[new_len - k] = this[len - k];
			k += 1;
			shift_count -= 1;
		}
	}
	for (k = 0; k < insertCount; k += 1) {
		this[start + k] = arguments[k + 2];
	}
	return result;
})

array.unshift(item...);
// The unshift method is like the push method except that it shoves the item s onto the
// front of this array instead of at the end. It returns the array 's new length:
var a = ['a', 'b', 'c'];
var r = a.unshift('?', '@');
// a is ['?', '@', 'a', 'b', 'c']
// r is 5
// unshift can be implemented like this:
Array.method('unshift', function() {
	this.splice.apply(this, [0, 0].concat(Array.prototype.slice.apply(arguments)));
	return this.length;
});

string.charAt(pos );
// The charAt method returns the character at position pos in this string . If pos is less
// than zero or greater than or equal to string .length, it returns the empty string.
// JavaScript does not have a character type. The result of this method is a string:
var name = 'Curly';
var initial = name.charAt(0); // initial is 'C'

// charAt could be implemented as:
String.method('charAt', function() {
	return this.slice(0, 1);
});

string.charCodeAt(pos );
// The charCodeAt method is the same as charAt except that instead of returning a string, it
// returns an integer representation of the code point value of the character at position pos in
// that string . If pos is less than zero or greater than or equal to string .length, it
// returns NaN:
var name = 'Curly';
var initial = name.charCodeAt(0); // initial is 67

string.indexOf(searchString, position );
// The indexOf method searches for a searchString within a string. If it is found, it
// returns the position of the first matched character; otherwise, it returns -1. The optional
// position parameter causes the search to begin at some specified position in the string:
var text = 'Mississippi';
var p = text.indexOf('ss'); // p is 2
p = text.indexOf('ss', 3); // p is 5
p = text.indexOf('ss', 6); // p is -1

string.lastIndexOf(searchString, position );
// The lastIndexOf method is like the indexOf method, except that it searches from the
// end of the string instead of the front:
var text = 'Mississippi';
var p = text.lastIndexOf('ss'); // p is 5
p = text.lastIndexOf('ss', 3); // p is 2
p = text.lastIndexOf('ss', 6); // p is 5

string.search(regexp );
// The search method is like the indexOf method, except that it takes a regular expression
// object instead of a string. It returns the position of the first character of the first match, if there
// is one, or -1 if the search fails. The g flag is ignored. There is no position parameter:
var text = 'and in it he says "Any damn fool could';
var pos = text.search(/["']/); // pos is 18

string.toLowerCase( );
// The toLowerCase method produces a new string that is made by converting this string
// to lowercase.
string.toUpperCase( );
// The toUpperCase method produces a new string that is made by converting this string
// to uppercase.