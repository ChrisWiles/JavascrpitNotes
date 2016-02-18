// [6] Custom Array Filters.js


Array.prototype.even = function() {
  var array = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] % 2 === 0 && Number.isInteger(this[i])) {
      array.push(this[i]);
    }
  }
  return array;
};

Array.prototype.odd = function() {
  var array = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] % 2 !== 0 && Number.isInteger(this[i])) {
      array.push(this[i]);
    }
  }
  return array;
};

Array.prototype.under = function(x) {
  return this.filter(function(num) {
    return num < x && Number.isInteger(num);
  });
};

Array.prototype.over = function(x) {
  return this.filter((num) => num > x && Number.isInteger(num));
};

Array.prototype.inRange = function(min, max) {
  return this.filter((num) => num >= min && num <= max && Number.isInteger(num));
};

Array.prototype.int = function() {
  return this.filter(function(x) {
    return typeof x == 'number' && x == ~~x;
  });
}
Array.prototype.even = function() {
  return this.int().filter(function(x) {
    return ~x & 1;
  });
}

Array.prototype.odd = function() {
  return this.int().filter(function(x) {
    return x & 1;
  });
}

Array.prototype.under = function(x) {
  return this.int().filter(function(y) {
    return y < x;
  });
}

Array.prototype.over = function(x) {
  return this.int().filter(function(y) {
    return y > x;
  });
}

Array.prototype.inRange = function(min, max) {
    return this.int().filter(function(x) {
      return x >= min && x <= max;
    });
  }
  // even    // [1,2,3,4,5].even() should return [2,4]
  // odd     // [1,2,3,4,5].odd() should return [1,3,5]
  // under   // [1,2,3,4,5].under(4) should return [1,2,3]
  // over    // [1,2,3,4,5].over(4) should return [5]
  // inRange // [1,2,3,4,5].inRange(1,3) should return [1,2,3]
  // [1,2,18,19,20,21,22,30,40,50,100].even().inRange(18,30); // should return [18, 20, 22, 30]
  // ["a", 1, "b", 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even(); // should return [300, 122]
  // ["a", 1, "b", "300", "x", "q", 63, 122, 181, "z", 0.83, 0.11].inRange(0,1000);
