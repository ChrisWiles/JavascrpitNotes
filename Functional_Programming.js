//***************************************************************************************************************
//HIGHER ORDER FUNCTIONS
var array1 = [1,2,3,4,5,6,7,8];

function forEach(array, callBack) {
    for (var i = 0; i < array.length; i ++) { // Call calBack(); 
        callBack(array[i]);                   // parameter array(i);
    }
}
forEach(array1, console.log);

function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]); // console.log(array[i])
}
forEach(["Wampeter", "Foma", "Granfalloon"], console.log);
forEach(names, function(name) {
  console.log(name);
});

var numbers = [1, 2, 3, 4, 5],sum = 0;
forEach(numbers, function(num) {
  sum += num;
});
// forEach is called
// parameter: function(num) {sum += number;} is passed into forEach function
// action(array[i]); --> function(array[i]) {sum += i;}


// Functions that operate on other functions, either by taking them as arguments
// or by returning them, are called higher-order functions.
// Higher Order Function
function makeAdder(left) {
    return function (right) {
        return left + right;
    };
}
var add5 = makeAdder(5);
add5(1); // 6


function FirstReverse(str) { 
  var string = '';
  for (var i = str.length - 1; i > 0; i--) {
      string += str.charAt(i);
  }
  return string; 
         
}
//var string = '0123456789';


FirstReverse("0123456789");

//string.length - 1; // Last index 
//string.charAt(0);

///////////////////////////////////////////////////
function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}

console.log(reduce([1, 2, 3, 4], function(a, b) {
  return a + b;
}, 0));
// → 10






















//Merge Function
//***************************************************************************************************************
var merge = function(array1, array2, callback){  
  //your code here.
};

var x = merge([1, 2, 3, 4], [5, 6, 7, 8], function(a, b){  
  return a + b;
});

//x should now equal [6, 8, 10, 12].
var euclid = function(coords1, coords2){  
  //Your code here.
  //You should not use any loops and should
  //instead use your original merge function.
};

var x = euclid([1.2, 3.67], [2.0, 4.4]);

//x should now equal approximately 1.08.

var groceries = {
	milk: 3.50,
	egg: 1.50,
	toast: 2.25
};

// print out which groceries are less than $2 and which groceries are more than $2. 

var dogs =  [
	{name: 'A1', sex: 'M'},
	{name: 'B2', sex: 'M'},
	{name: 'C3', sex: 'M'},
	{name: 'D4', sex: 'M'},
	{name: 'E5', sex: 'F'},
	{name: 'F6', sex: 'F'},
	{name: 'G7', sex: 'F'},
	{name: 'H8', sex: 'F'}
];

var names = [];
for (var i = 0; i < dogs.length; i++) {
	names.push(dogs[i].name);
}

var names = dogs.map(function(dog) {
	return dog.name;
});

var order = [
	{ amount: 250},
	{ amount: 50},
	{ amount: 450},
	{ amount: 150},
];

var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
	totalAmount += orders[i].amount;
}

var totalAmount = orders.reduce(function(sum, order) {
	return sum + order.amount;
}, 0);

////////////////////////////////////////////////////////
var attitude = function(original, replacement, source) {
  return function(source) {
    return source.replace(original, replacement);
  };
};
 
var snakify = attitude(/millenials/ig, "Snake People");
var hippify = attitude(/baby boomers/ig, "Aging Hippies");
 
console.log(snakify("The Millenials are always up to something."));
// The Snake People are always up to something.
console.log(hippify("The Baby Boomers just look the other way."));
// The Aging Hippies just look the other way.
/////////////////////////////////////////////////////////

// Count number of vowels
function getCount(str) {
  return str.toLowerCase().split('').filter(function(char) {
    return char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u';
  }).length;
}
console.log(getCount("abracadabrae"));

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

//
// Create my own method
Array.prototype.reverse = function() {
  var that = [];
  for (var i = this.length - 1; i >= 0; i--) {
    that.push(this[i]);
  }
  return that;
};
// Mods orginal array
Array.prototype.reverse = function() {
  for(var i = 0, j = this.length-1; i < j; i++, j--) {
    var tmp = this[i];
    this[i] = this[j];
    this[j] = tmp;
  }
  return this;
};
console.log(['a','b','c'].reverse());

var make_lazy = function(fn) {
  return fn.bind.apply(fn, arguments);
};

fn.bind(scope, arg1, arg2, ...)

// bind, when called on a function f, returns a new function g that calls f 
// with the provided scope, and optionally the provided arguments. 
Function.prototype.bind = function(scope) {
  var fn = this,
    // arguments here are the original arguments
    args = Array.prototype.slice(arguments, 1);
  return function() {
    // this arguments refers to any additional arguments
    return fn.apply(scope, args.concat(arguments));
  };
};

// This allows us to call g at a later time, and guarantee that it will apply to scope, 
// as well as always have any arguments we provided ahead of time.

// fn.apply(scope, argArray)

// apply, when called on a function f, executes the function f as if it was called on the given scope, and passed in the provided args.

// So, these are equivilant

fn.apply(scope, [1, 2, 3]);
scope.fn(1, 2, 3); // assuming `fn` exists on the scope object
fn.bind.apply(fn, args)

// This calls apply on the bind function, because we have unknown values we want to bind to the original fn.

// If we knew the arguments, then these would be equivilant:

fn.bind.apply(fn, [fn, 1, 2, 3]);
//             ^    ^
//             |    '-- this is the scope for bind!
//             '-- this is the scope for apply
fn.bind(fn, 1, 2, 3);
//       ^
//       '-- this is the scope for bind

// This is why passing in the extra fn in arguments is OK. In either case, 
// what is returned is a new function g, that will call fn with the arguments 1, 2, 3. 
// By using apply, we can pass in the original arguments, without worrying about them.

// And that's basically it. We're using the built-in JavaScript function behavior to 
// dynamically create a new function which will call the original function with the provided arguments.

// Basic JS - Building a calculator

var Calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return b === 0 ? false : a / b; 
  }
};

console.log(Calculator.add(1, 2));
console.log(Calculator.subtract(1, 2));
console.log(Calculator.multiply(1, 2));
console.log(Calculator.divide(1, 2));

// Reverse Array
function reverse(array) {
  return array.reduce(function(a, b) {
    return [b].concat(a)
  }, []);
}
//////////
Array.range = function(start, count) {
  var range = [];
  
  for (var i = start; i < start + count; i++) {
    range.push(i);
  }
  return range;
};
console.log(Array.range(-1, 0));
var num1to100 = Array.range(1, 100);

Array.prototype.sum = function() {
  return this.reduce(function(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
  }, 0);
};

console.log( Array.range(-1,4).sum());

//TODO: return the array of duplicates from arr
function duplicates(arr) {
  var dupe = [];
  for (var i = 0; i < arr.length; i++) {
    var n = arr[i];
    if (arr.indexOf(n, i + 1) >= 0 && dupe.indexOf(n) < 0) {
      dupe.push(n);
    }
  }

  return dupe;
}
// arr.sort(); // [ 1, 1, 2, 3, 3, 3, 4, 4, 5, '5' ]

//  calculate the average for an arbitrary number of arguments.
var Calculator = {
  average: function() {

    if (arguments.length === 0) {
      return 0;
    }
    var sum = 0;
    for (var i in arguments) {
      sum += parseInt(arguments[i]);
    }
    return sum / arguments.length;
  }
};
var a = Calculator.average(3,4,5); // 4
