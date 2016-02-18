// Steamroller.js

// Flatten a nested array. You must account for varying levels of nesting.
// recursion


function steamroller(arr) {
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  function flatten(arg) {
    if (arg.constructor !== Array) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  }

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}
// Use reduce to concatenate each element into the last element
// If the new element is an Array itself call the function recursively to
// flatten it before merging it with the rest of result
// Pass an empty array to reduce as initial value to make sure even the
// first element will be processed

function steamroller(arr) {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? steamroller(toFlatten) : toFlatten);
  }, []);
}

console.log(steamroller([
  [
    ["a"]
  ],
  [
    ["b"]
  ]
]));
// should return ["a", "b"].
console.log(steamroller([1, [2],
  [3, [
    [4]
  ]]
]));
// should return [1, 2, 3, 4].
console.log(steamroller([1, [],
  [3, [
    [4]
  ]]
]));
// should return [1, 3, 4].
console.log(steamroller([1, {},
  [3, [
    [4]
  ]]
]));
// should return [1, {}, 3, 4].
