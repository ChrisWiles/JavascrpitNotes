// [7] Basic method.js


Array.prototype.max = function() {
  // check each ele is number
  // try to convert to number
  // if false return NaN
  // else reutrn max number
  var temp = [];
  for (var i = 0; i < this.length; i++) {
    // If the first character cannot be converted to a number, parseFloat returns NaN.
    if (parseFloat(this[i])) {
      temp.push(parseFloat(this[i]));
    } else {
      return NaN;
    }
  }
  return temp.sort(function(a, b) {
    return a - b;
  })[temp.length - 1];
};

// Medthod 2
// This is the new 'spread' operator in ECMAScript 6.
// See https://github.com/lukehoban/es6features#default--rest--spread
// It spreads an array (this in this case) into single function arguments.
Array.prototype.max = function() {
    return Math.max(...this);
  }
// Method 3
// The following function uses Function.prototype.apply() to find the maximum element in a numeric array.

Array.prototype.max = function() {
  return Math.max.apply(null, this);
}


[2, 5, 1, 3].max(); // returns 5
[1, 2, 3, 8, 4, 9, 7, 42, 99].max(); // returns 99
[2, '5', 1, 3].max(); // returns 5
[2, 5, 1, 'ab'].max(); // returns NaN
