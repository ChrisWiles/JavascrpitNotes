// Everything Be True.js { user: 'Dipsy' } undefined

// Check if the predicate (second argument) is truthy on
// all elements of a collection (first argument).

// The every() method tests whether all elements in the array
// pass the test implemented by the provided function.

// Everything Be True.js

// Check if the predicate (second argument) is truthy on
// all elements of a collection (first argument).

// The every() method tests whether all elements in the array
// pass the test implemented by the provided function.

function every(collection, pre) {

  var bool;

  collection.forEach(function(element, index, array) {
    var keys = Object.keys(element);
    console.log(element, element[pre]) // { user: 'Dipsy' } undefined
    if (element[pre]) {
      bool = true;
    } else if (element[pre] === undefined) {
      bool = false;
    } else {
      bool = false;
    }
  });
  return bool;

}

function every(collection, pre) {
  return collection.every(function(element, index, array) {
    return element[pre];
  });
}

function every(collection, pre) {
  return collection.every(function(element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

function every(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;
  // Check for each object
  for (var c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}

console.log(every([{
  "user": "Tinky-Winky",
  "sex": "male"
}, {
  "user": "Dipsy",
  "sex": "male"
}, {
  "user": "Laa-Laa",
  "sex": "female"
}, {
  "user": "Po",
  "sex": "female"
}], "sex"));
//should return true.
console.log(every([{
  "name": "Pete",
  "onBoat": true
}, {
  "name": "Repeat",
  "onBoat": true
}, {
  "name": "FastFoward",
  "onBoat": null
}], "onBoat"));
//should return false
console.log(every([{
  "user": "Tinky-Winky",
  "sex": "male"
}, {
  "user": "Dipsy"
}, {
  "user": "Laa-Laa",
  "sex": "female"
}, {
  "user": "Po",
  "sex": "female"
}], "sex"));
//should return false

console.log(every([{
  "user": "Tinky-Winky",
  "sex": "male"
}, {
  "user": "Dipsy",
  "sex": "male"
}, {
  "user": "Laa-Laa",
  "sex": "female"
}, {
  "user": "Po",
  "sex": "female"
}], "sex"));
//should return true.
console.log(every([{
  "name": "Pete",
  "onBoat": true
}, {
  "name": "Repeat",
  "onBoat": true
}, {
  "name": "FastFoward",
  "onBoat": null
}], "onBoat"));
//should return false
