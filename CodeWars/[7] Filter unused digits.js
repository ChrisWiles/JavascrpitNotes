// [7] Filter unused digits.js
// Given few numbers, you need to print out the digits that are not being used.
// Result string should be sorted
// The test case won't pass Integer with leading zero
function unusedDigits() {
  var array = [];
  for (var i = 0; i < arguments.length; i++) {
    array.push(arguments[i]);
  }
  var sortedNums = array.join('').split('').sort();

  var nums = "0123456789".split('');
  var notFound = [];

  for (var j = 0; j < 10; j++) {
    if (sortedNums.indexOf((j).toString()) == -1) {
      notFound.push((j).toString());
    }
  }
  return notFound.join('');
}

function unusedDigits(...args) {
  return "0123456789".replace(new RegExp('[' + args.join('') + ']', 'g'), '')
}

function unusedDigits() {
  return [].reduce.call(arguments, function(left, num) {
    (num + '').split('').map(function(digit) {
      left = left.replace(digit, '');
    });
    return left;
  }, '0123456789');
}

function unusedDigits() {
  var concat = "";
  var missing = "";
  for (var i = 0; i <= arguments.length; i++) {
    concat = concat + arguments[i];
  }
  for (var j = 0; j < 10; j++) {
    if (concat.search(j) == -1) {
      missing = missing + j;
    }
  }
  return missing;
}

function unusedDigits() {
  var args = (Array.prototype.slice.call(arguments)).join(''),
    res = "";
  for (var i = 0; i <= 9; i++) {
    if (args.indexOf(i.toString()) == -1) {
      res += i;
    }
  }
  return res;
}
unusedDigits(12, 34, 56, 78); // "09"
unusedDigits(2015, 8, 26); // "3479"
