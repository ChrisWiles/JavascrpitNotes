// Drop it.js

// Drop the elements of an array (first argument), starting from the front,
// until the predicate (second argument) returns true.

// The shift() method removes the first element from an array
// and returns that element. This method changes the length of the array.

function drop(arr, func) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    // if func returns false remove 1st element of arr
    // only check first element
    if (!func(arr[0])) {
      arr.shift();
    }
  }
  return arr;
}

function drop(arr, func) {
  // continue checking and dropping the first element
  // of the array until the function returns true.
  while (!func(arr[0])) {
    arr.shift();
  }
  return arr;
}
console.log(drop([0, 1, 0, 1], function(n) {
  return n === 1;
}));
//should return [1, 0, 1].
console.log(drop([1, 2, 3], function(n) {
  return n > 0;
}));
//should return [1, 2, 3].
console.log(drop([1, 2, 3, 4], function(n) {
  return n > 5;
}));
//should return [].
console.log(drop([1, 2, 3, 7, 4], function(n) {
  return n > 3;
}));
//should return [7, 4].
console.log(drop([1, 2, 3, 9, 2], function(n) {
  return n > 2;
}));
//should return [3, 9, 2].
