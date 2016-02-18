// [7] Remove the minimum.js
// Given an array of integers, remove the smallest value.
// If there are multiple elements with the same value, remove
// the one with a lower index. If you get an empty array/list,
// return an empty array/list.
//
// Don't change the order of the elements that are left.

// The splice() method changes the content of an array by
// removing existing elements and/or adding new elements.
function removeSmallest(numbers) {
  // sort, so that smallest number == index[0]
  // return value of smallest number
  // search indexOf(index[0])
  // remove element at index;
  var copy = numbers.slice();
  var smallest = copy.sort(function(a, b) {
    return b - a;
  }).pop();
  var index = numbers.indexOf(smallest);
  numbers.splice(index, 1);
  return numbers;
}

function removeSmallest(numbers) {
  var min = Math.min.apply(null, numbers);
  numbers.splice(numbers.indexOf(min), 1);
  return numbers;
}

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}
removeSmallest([5, 3, 2, 1, 4]); // [5,3,2,4]
