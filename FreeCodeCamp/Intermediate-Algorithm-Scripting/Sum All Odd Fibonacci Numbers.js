// Sum All Odd Fibonacci Numbers.js
// 1,1,2,3,5,8

function sumFibs(num) {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }

    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

function sumFibs(num) {
  // create an array of fib numbers till num
  // 0 + 1 = 1, 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5...
  var arrFib = [1];
  for (var i = 1; i <= num;) {
    arrFib.push(i);
    i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
  }
  console.log(arrFib);

  // return the sum of odd numbers from the array
  var res = arrFib.reduce(function(prev, curr) {
    if (curr % 2 !== 0) return prev + curr;
    else return prev;
  });

  return res;
}

sumFibs(1000); // 1785
