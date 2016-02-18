// [6] Unique In Order.js

// Implement the function unique_in_order which takes as argument
// a sequence and returns a list of items without any elements with
// the same value next to each other and preserving the original order of elements.

// iterable can be a string or an array
function uniqueInOrder(iterable) {
  if (typeof iterable == "string") {
    iterable = iterable.split('');
  }
  return iterable.reduce(function(a, b) {
    if (a[a.length - 1] == b) {
      return a;
    } else {
      return a.concat(b);
    }
  }, []);
}

function uniqueInOrder(it) {
  var result = []
  var last

  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }

  return result
}
var uniqueInOrder = function(iterable) {
    return Array.prototype.reduce.call(iterable, function(a, b) {
      if (a[a.length - 1] !== b) a.push(b);
      return a;
    }, []);
  }
  // should work with empty array
  // and work with int arrays

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
// uniqueInOrder([])                == []
