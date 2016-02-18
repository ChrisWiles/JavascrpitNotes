// Sum All Numbers in a Range
// We'll pass you an array of two numbers.
// Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.

function sumAll(arr) {
  var num = arr.sort(function(a, b) {
    return a - b;
  });
  var a = num[0];
  var b = num[1];
  var range = b - a;
  var sum = 0;

  for (var i = a; i <= a + range; i++) {
    sum += i;
  }
  return sum;
}

function sumAll(arr) {

  var a = Math.min.apply(null, arr);
  var b = Math.max.apply(null, arr);
  var range = b - a;
  var sum = 0;

  for (var i = a; i <= a + range; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumAll([5, 10])); //should return 45
