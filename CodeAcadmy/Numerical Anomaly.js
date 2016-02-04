// Numerical Anomaly
// 88^2 + 33^2 = 8833, find all such pairs
// To find permutations instead of combinations, let's always start y at x.
var pairs = [];
var permutations = [];
for (var x = 10; x < 100; x++) {
  for (var y = 10; y <= x; y++) {
     permutations.push([x,y]);
    if (+(x.toString() + y.toString()) === Math.pow(x, 2) + Math.pow(y, 2)) {
      pairs.push([x,y]);
    }else if (+(y.toString() + x.toString()) === Math.pow(y, 2) + Math.pow(x, 2)) {
      pairs.push([y,x]);
    }

  }
}

console.log(pairs,permutations.length); // [ '12,33', '88,33' ]
