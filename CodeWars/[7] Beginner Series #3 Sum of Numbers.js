// [7] Beginner Series #3 Sum of Numbers.js
function GetSum(a, b) {
  var arr = [a, b];

  arr.sort(function(a, b) {
    return a - b;
  });

  var large = arr[1];
  var small = arr[0];
  var sum = 0;

  for (var i = small; i <= large; i++) {
    sum += i;
  }
  return sum;
}
// arithmetic series formula
function GetSum(a, b) {
  var min = Math.min(a, b),
    max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}
console.log(GetSum(1, 2)); // 3
console.log(GetSum(0, -1)); // -1
console.log(GetSum(-1, 2)); // 2;
console.log(GetSum(0, 1)); // 1
console.log(GetSum(99, 0)); // 4950
