// Array of Primes
// 1 is not a prime number.
// Your task is to take a given range and return an array of the prime numbers in that range.

// You will write a function with the following parameters:

// start is the integer from which your range starts.

// end is the integer at which your range ends.

// If the range does not contain any prime numbers return null.

// You can assume that parameters numbers will be positive integers and that the start of the range will be less than the end of the range.

function primes(start, end) {
  var primeArray = [];
  for (var i = start; i <= end; i++) {
    if (isPrime(i)) {
      primeArray.push(i);
    }
  }
  if (primeArray.length === 0) {
    return null;
  } else {
    return primeArray;
  }
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n < 3) {
    return true;
  }
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
primes(100, 200); // [101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199]
primes(1, 10); // [2, 3, 5, 7]
