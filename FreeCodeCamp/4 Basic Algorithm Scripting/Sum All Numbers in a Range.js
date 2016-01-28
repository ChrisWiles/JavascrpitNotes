// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.

// Math.max()
// Math.min()
// Array.reduce()


function sumAll(arr) {
  var num = arr.sort(function(a, b) {
    return a - b;
  });
  var a = num[0];
  var b = num[1];
  var c = b - a;
  var sum = 0;

  for (var i = a; i <= a + c; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([5, 10])); //should return 45.
