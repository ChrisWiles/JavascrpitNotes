// Smallest Common Multiple.js

function smallestCommons(arr) {
  var max = Math.max.apply(null, arr);
  var min = Math.min.apply(null, arr);

  for (i = max; i >= min; i--) {
    arr.push(i);
  }
  return arr.slice(2).reduce(function(x, y) {
    var a = x,
      b = y,
      t = 0;
    while (a % b) {
      a = a % b;
      t = a;
      a = b;
      b = t;
    }
    return x / b * y;
  });
}
