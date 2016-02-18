/**
 * COLLECTIONS
 * ===========
 *
 * In this section, we'll have a look at functions that operate on collections
 * of values; in JavaScript, a 'collection' is something that can contain a
 * number of values--either an array or an object.
 *
 */

// Polyfill
// Check if Object is an Array
if (typeof Array.isArray === 'undefined') {
  Array.isArray = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };
}

// The Array.isArray() method returns true if an object is an array, false if it is not.

// *** each ***
// "each" runs a for-loop through either an array or an object.
// This for-loop then calls a function on each element of that
// array or object. The function that gets called is passed
// through "each" at the start.
function each(obj, action) {
  if (obj.constructor === Array) { //  Array.isArray(input)
    for (var i = 0; i < obj.length; i++) {
      action(obj[i]);
    }
  }
  else if (obj.constructor === Object) { //  typeof input === "object"
    for (var key in obj) {
      action(obj[key]);
    }
  }
}
each([1, 2, 3], console.log); // 1,2,3
each({one: 1, two: 2, three: 3}, console.log); // 1,2,3

// *** Map ***
// Produces a new array of values by mapping each value in list through a transformation function
function map(obj, action) {
  var result = [];
  if (obj.constructor === Array) {
    for (var i = 0; i < obj.length; i++) {
      result.push(action(obj[i]));
    }
  } else if (obj.constructor === Object) {
    for (var key in obj) {
      result.push(action(obj[key]));
    }
  }
  return result;
}
map([1,2,3,4],function(n){return n * n}); // [ 1, 4, 9, 16 ]

// filter
// Return all the elements that pass a truth test.
function filter(obj, action) {
    var filtered = [];
    each(obj, function(item) {
        if(action(item)) {
            filtered.push(item);
        }
    });
    return filtered;
}
filter([1,2,3,4], function(n) {return n <= 2}); // [1,2]
