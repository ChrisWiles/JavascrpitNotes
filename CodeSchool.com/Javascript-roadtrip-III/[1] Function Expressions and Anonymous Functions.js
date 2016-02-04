//[1] Function Expressions and Anonymous Functions.js

// Function Expression
function funcExperssion() {
  return "Function Expressions";
}
//anonymous function expression
var runAway = function() {
  var toAlert = "";
  for (var i = 0; i < 5; i++) {
    toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
  }
  alert(toAlert);
};

// Functions as Parameters, Arguments and Return Values
var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage = function() {
  if (fear < 200) {
    return confirm("Fear Level: LOW\nStill wanna ride?");
  } else if (fear >= 200 && fear <= 300) {
    return confirm("Fear Level: MEDIUM\nThink you'll make it?");
  }
};

function confirmRide(confirmToGo) {
  return confirmToGo();
}

var startRide = confirmRide(fearMessage);

// Using Map With Arrays
var passengers = [ ["Thomas", "Meeks"],
                   ["Gregg", "Pollack"],
                   ["Christine", "Wong"],
                   ["Dan", "McGaw"] ];

var modifiedNames = passengers.map(function(element, index, array) {
	return element[0] + ' ' + element[1];
});

// ex 2
var modifiedNames = [ "Thomas Meeks",
                      "Gregg Pollack",
                      "Christine Wong",
                      "Dan McGaw" ];

modifiedNames.map(function(name, index, array) {
  alert("Yo, " + name + "!");
});

// Expressions Inside Arrays
var puzzlers = [
  function(input) {return 3 * input - 8;},
  function(input) {return Math.pow(input + 2,3);},
  function(input) {return Math.pow(input,2) - 9;},
  function(input) {return input % 4;},
];
// Array.shift()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fruit = fruits.shift(); // Orange
fruits; // [ 'Orange', 'Apple', 'Mango' ]

// Immediately-Invoked Adventure!
function adventureSelector(userChoice) {
  if (userChoice == 1) {
    return function() {
      alert("You selected the Vines of Doom!");
    };
  } else if (userChoice == 2) {
    return function() {
      alert("Looks like you want the Lake of Despair!");
    };
  } else if (userChoice == 3) {
    return function() {
      alert("The Caves of Catastrophe!");
    };
  }
}
adventureSelector(3)();

// Queue Builder
var puzzlers = [
  function (a) { return 8 * a - 10; },
  function (a) { return (a - 3) * (a - 3) * (a - 3); },
  function (a) { return a * a + 4; },
  function (a) { return a % 5; }
];

var start = 2;
var applyAndEmpty = function(input, queue) {
  var length = queue.length;
  // Basically what's happening is that the inside of the for loop is affecting
  // it's length. So we have to move the length to a variable outside the loop:
  for (var i = 0; i < length; i++) {
    input = queue.shift()(input);
  }

  return input;
};
// [ [Function], [Function], [Function], [Function] ]
// [ [Function], [Function], [Function] ]
// [ [Function], [Function] ]
// [ [Function] ]
// []


console.log((applyAndEmpty(start, puzzlers)));

// Immediately-Invoked Puzzler
var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];
/* “What is obtained when the result of passing 9 into the fourth function of
the puzzlers array is then passed into the function whose array index matches
the result of passing 3 into the second function of the puzzlers array?” */
alert(puzzlers[puzzlers[1](3)](puzzlers[3](9)));
