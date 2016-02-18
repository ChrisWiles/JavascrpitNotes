// [6] Is Integer Array ?.js

// returns true if every element in an array is an integer.
// returns true if array is empty.
// returns false for every other input.

// The every() method tests whether all elements in the array pass the test implemented by the provided function.

function isIntArray(arr) {
  if (!arr) {
    return false;
  }
  return arr.every(function(num, index, array) {
    return Number.isInteger(num) || array == [];
  });
}

function isIntArray(arr) {
  return Array.isArray(arr) && arr.every(function(x) {
    return Math.floor(x) === x
  });
}

let isIntArray = arr => !!arr && arr.every(Number.isInteger);

//isIntArray([]);             // true
//isIntArray([1, 2, 3, 4]);   // true
//isIntArray([1, 2, 3, NaN]); // false
//isIntArray([null]);         // false
//isIntArray('');             // false
