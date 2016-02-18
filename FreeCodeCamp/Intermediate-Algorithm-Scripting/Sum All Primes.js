// Sum All Primes.js
function sumPrimes(num) {
  var sum = 0;
  for (var k = 1; k <= num; k++) {
    if (isPrime(k)) {
      sum += k;
    }
  }
  return sum;
}

function isPrime(n) {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

sumPrimes(10);
