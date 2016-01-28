// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Remove all elements from the initial array
// that are of the same value as these arguments.
function destroyer(arr) {

  var toRemove = [];
  for (var i = 1; i < arguments.length; i++) {
    toRemove.push(arguments[i]);
  }
  console.log("toRemove", toRemove);

  var array = arguments[0];

  return array.filter(function(element, index) {
    return toRemove.indexOf(element) == -1;
  });
  // indexOf returns -1 if item is not found
  // filter returns an array of values that are true
  // For every element in array find the index of the element value
  // in the array toRemove. Returns all elements which toRemove doent contain
}

console.log("result", destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // [1, 5, 1]
