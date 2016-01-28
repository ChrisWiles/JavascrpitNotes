function foo() {
    return 42;
}

foo.bar = "hello world";

typeof foo;         // "function"
typeof foo();       // "number"
typeof foo.bar;     // "string"

// Truthy & Falsy useed for boolean values

// "falsy" values
// "" (empty string)
// 0, -0, NaN (invalid number)
// null, undefined
// false

//  "truthy" values
// "hello"
// 42
// true
// [ ], [ 1, "2", 3 ] (arrays)
// { }, { a: 42 } (objects)
// function foo() { .. } (functions)

// Hoisting
var a = 2;

foo();                  // works because `foo()`
                        // declaration is "hoisted"

function foo() {
    a = 3;

    console.log( a );   // 3

    var a;              // declaration is "hoisted"
                        // to the top of `foo()`
}
console.log( a );   // 2

// Nested Scopes
unction foo() {
    var a = 1;

    function bar() {
        var b = 2;

        function baz() {
            var c = 3;

            console.log( a, b, c ); // 1 2 3
        }

        baz();
        console.log( a, b );        // 1 2
    }

    bar();
    console.log( a );               // 1
}
foo();

// switch statement:
switch (a) {
    case 2:
        // do something
        break;
    case 10:
        // do another thing
        break;
    case 42:
        // do yet another thing
        break;
    default:
        // fallback to here
}


// Functions As Values
var foo = function() { //anonymous 
    // ..
};

var x = function bar(){ // Named function expressions
    // ..
};

// Immediately Invoked Function Expressions (IIFEs)
(function IIFE(){
    console.log( "Hello!" );
})();

// Named Function
function myFunction () {}

// Annonymous Function
var myFunction = function () {}

var callTwice = function (targetFunction) {
	targetFunction();
	targetFunction();
}
callTwice(myFunction); // Call myFunction twice

callTwice(function () {
	console.log('Hello from Annonymous function');
});

// Immediately Invoked Function Expressions
(function () {
	var a,b,c;
})();

// Document Object Model (DOM)
var button = document.getElementById('action');

//  Closure
//  think of closure as a way to "remember" and continue
//  to access a function's scope (its variables) even once
//  the function has finished running.

function makeAdder(x) {
    // parameter `x` is an inner variable

    // inner function `add()` uses `x`, so
    // it has a "closure" over it
    function add(y) {
        return y + x;
    };

    return add;
}
// `plusOne` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusOne = makeAdder( 1 );

// `plusTen` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusTen = makeAdder( 10 );

plusOne( 3 );       // 4  <-- 1 + 3
plusOne( 41 );      // 42 <-- 1 + 41

plusTen( 13 );      // 23 <-- 10 + 13

// A comparison function accepts two arguments and returns a negative number if the fi rst argument
// should come before the second, a zero if the arguments are equal, or a positive number if the fi rst
// argument should come after the second.

function compare(value1, value2) {
	if (value1 < value2) {
		return -1;
	} else if (value1 > value2) {
		return 1;
	} else {
		return 0;
	}
}

// Simple compare
function compare(value1, value2){
	return value2 - value1;
}

// funciton expression
var doSomethingElse = funciton() {
	return 1;
};

function doSomething() {
	var arg1 = arguments[0];
	var arg2 = arguments[1];
}

///////////Constructor function vs Factory functions//////////////////////////////////////
// http://stackoverflow.com/questions/8698726/constructor-function-vs-factory-functions
function ConstructorFunction() {
   this.someProp1 = "1";
   this.someProp2 = "2";
}
ConstructorFunction.prototype.someMethod = function() { /* whatever */ };

function factoryFunction() {
   var obj = {
      someProp1 : "1";
      someProp2 : "2";
   };
   // other code to manipulate obj in some way here
   return obj;
}