var txt = 'abcd';
txt.substring(txt.length - 1) // last char
txt.substring(1) // 'bcd' returns all but 1st char


/* using Math.min/Math.max apply */
var max = Math.max.apply(null, numbers); /* This about equal to Math.max(numbers[0], ...)
                                            or Math.max(5, 6, ...) */
var min = Math.min.apply(null, numbers);

// Round to at most 2 decimal places
Math.round(num * 100) / 100

// Find the sum of number in range
function GetSum(a, b){
  var min = Math.min(a, b),
      max = Math.max(a, b);
      // arithmetic series formula
  return (max - min + 1) * (min + max) / 2;
}


var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};

// ES6 The next() method returns an object with two properties done and value.
// You can also provide a parameter to the next method to send a value to the generator.

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.next)
    array.push(node.value);
  return array;
}
console.log(listToArray(list)); // [1, 2, 3]);


// Fisher-Yates Shuffle entry on Wikipedia
String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}
