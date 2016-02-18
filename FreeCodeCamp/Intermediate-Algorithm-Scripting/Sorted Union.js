// Sorted Union.js

// The program has to return a new array of unique values from two original arrays in
// the order they show up. So there is not sorting required, and no duplicates.
function unite() {
  var arr = [];
  var unique = [];

  // concat all arrays into one
  for (var i = 0; i < arguments.length; i++) {
    arr = arr.concat(arguments[i]);
  }

  arr.forEach(function(element, index, array) {
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  });

  return unique;
}

function unite() {
  var concatArr = [];
  var i = 0;
  while (arguments[i]) {
    concatArr = concatArr.concat(arguments[i]);
    i++;
  }
  // remove the duplicate elements by checking the index of each element
  // and removing same elements with different positions
  return concatArr.filter(function(element, index, array) {
    return concatArr.indexOf(element) == array;
  });

}
unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//should return [1, 3, 2, 5, 4].
