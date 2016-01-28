/*
Write a function that determines if given number is a power of two. A power of two means a number of the form 2^n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent. I.e. 1024 is a power of two: it 2^10.
*/
function isPowerOfTwo(n) { //.. should return true or false ..
  while (n % 2 === 0 & n > 1) { // While n is even and > 1
    n /= 2;
  }
  return n == 1;
}

function isPowerOfTwo(n){
  if (n < 2) return false;
  if (n == 2) return true;
  return isPowerOfTwo(n / 2);
}

function isPowerOfTwo(n) {
  return !(n & (n - 1));
}
// Check all solutions 2^1 to 2^31

for (var i = 1; i < 32; i++) {
  console.log("2^" + i + " is " + Math.pow(2, i) + " which is " + isPowerOfTwo(Math.pow(2, i)));
}
