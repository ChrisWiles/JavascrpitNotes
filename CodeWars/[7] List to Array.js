// [7] List to Array.js
// Lists are data structures composed of nested objects, each containing a
// single value and a reference to the next object.
// all values will be either numbers, strings, or Booleans.
var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};

function listToArray(obj) {
  var values = [];

  function node(obj) {
    for (var key in obj) {
      if (key == "value") {
        values.push(obj[key]);
      } else if (typeof obj[key] == 'object') {
        node(obj[key]);
      } else {
        return values;
      }
    }
  }
  node(list);
  return values;
}
// Best Practices
// ES6 The next() method returns an object with two properties done and value.
// You can also provide a parameter to the next method to send a value to the generator.

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.next)
    array.push(node.value);
  return array;
}

console.log(listToArray(list)) // [1, 2, 3]);
