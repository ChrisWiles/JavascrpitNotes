// [5] Plains of Prototypes.js
// The objects partent is called its "prototype"
// Passing down properties is called "Inheritance"
// Adding inheriatable properties to prototypes

// Letter count method
String.prototype.countAll = function(letter) {
  // "this" the string that countAll is called on
  var count = 0;
  for (var i = 0; i < this.length; i++) {
    // char = letter
    if (this.charAt(i).toUpperCase() == letter.toUpperCase()) {
      count++;
    }
  }
  return count;
};
var string = "This is my string and how many letters does it have";

string.countAll("t"); //5

// Prototypes I
var canyonCows = [
  {name: "Bessie", type: "cow", hadCalf: "Burt"},
  {name: "Donald", type: "bull", hadCalf: null},
  {name: "Esther", type: "calf", hadCalf: null},
  {name: "Burt", type: "calf", hadCalf: null},
  {name: "Sarah", type: "cow", hadCalf: "Esther"},
  {name: "Samson", type: "bull", hadCalf: null},
  {name: "Delilah", type: "cow", hadCalf: null}
];

Array.prototype.countCattle = function(kind) {
  var numKind = 0;
  for (var i = 0; i < this.length; i++) {
    if (this[i].type == kind) {
      numKind++;
    }
  }
  return numKind;
};

canyonCows.countCattle("calf"); // 2
// Prototypes III
var forestCows = [
  {name: "Legolas", type: "calf", hadCalf: null},
  {name: "Gimli", type: "bull", hadCalf: null},
  {name: "Arwen", type: "cow", hadCalf: null},
  {name: "Galadriel", type: "cow", hadCalf: null},
  {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];
Object.prototype.noCalvesYet = function() {
  if (this.type == "cow" && this.hadCalf === null) {
    return true;
  } else {
    return false;
  }
};

Array.prototype.countForBreeding = function() {
  var array = this;
  var numToBreed = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].noCalvesYet()) {
      numToBreed++;
    }
  }
  return numToBreed;
};

forestCows.countForBreeding(); //2


// Inheritance and Constructors
// Class is a set of Objects that all share and inherit from the same basic prototype

function person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");


// Add a protoype
function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
  this.sendRopeTo = function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  };
  this.removeRope = function(removeTo) {
    var temp = [];
    for (var i = 0; i < this.connectionsTo.length; i++) {
      if (this.connectionsTo[i].postNum != removeTo) {
        temp.push(this.connectionsTo[i]);
      }
    }
    this.connectionsTo = temp;
  };
  this.movePost = function(x, y) {
    this.x = x;
    this.y = y;
  };
}

//--------------------------------------------------------------
function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
}

Fencepost.prototype = {
  sendRopeTo: function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  },
  removeRope: function(removeTo) {
    var temp = [];
    for (var i = 0; i < this.connectionsTo.length; i++) {
      if (this.connectionsTo[i].postNum != removeTo) {
        temp.push(this.connectionsTo[i]);
      }
    }
    this.connectionsTo = temp;
  },
  movePost: function(x, y) {
    this.x = x;
    this.y = y;
  }
};

// Overriding Prototypal Methods
function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
}

Fencepost.prototype = {
  sendRopeTo: function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  },
  removeRope: function(removeTo) {
    var temp = [];
    for (var i = 0; i < this.connectionsTo.length; i++) {
      if (this.connectionsTo[i].postNum != removeTo) {
        temp.push(this.connectionsTo[i]);
      }
    }
    this.connectionsTo = temp;
  },
  movePost: function(x, y) {
    this.x = x;
    this.y = y;
  },
  valueOf: function() {
  return Math.sqrt(this.x * this.x +
                   this.y * this.y);
  }
};

Fencepost.prototype.toString = function() {
  var list = "";
  for (var i = 0; i < this.connectionsTo.length; i++) {
    list += this.connectionsTo[i].postNum + "\n";
  }
  return "Fence post #" + this.postNum + ":\n" +
         "Connected to posts:\n" + list +
         "Distance from ranch: " + this.valueOf() + " yards";
};


// Usefull roperties in the object Prototype
var x = 5;
var y = '5';
console.log(x.valueOf())
x.valueOf() === y.valueOf()

var myObject = {key: "value"};
var myString = "Hello World";
var myArray = ["one", "two", "three"];
var myNumber = 1.2;
var myFunction = function() {return "Yeahi ~";}
/* Object method
valueOf, constructor, toLocaleString, toString, isPrototypeOf, propertyIsEnumerable, hasOwnProperty
*/

/* Array method
length, shift(), join(), pop(), reverse(), reduce(), push(), sort(), splice()
*/

/* String method
length, concat(), toUpperCase(), toLowerCase(), charAt(), indexOf(), trim(), replace(), substring()
*/

/* Number method
toFixed(), toExponential(), toPrecision()
*/

/* Function method
name, call(), bind(), apply()
*/

Number.prototype.numberFormat = function (){
  return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

Object.prototype.getName = function() {
   var funcNameRegex = /function (.{1,})\(/;
   var results = (funcNameRegex).exec((this).constructor.toString());
   return (results && results.length > 1) ? results[1] : "";
};

Object.prototype.findOwnerOfProperty = function(propName) {
  var currentObject = this;

  while(currentObject !== null) {
    if (currentObject.hasOwnProperty(propName)) {
      return currentObject.getName();
    } else {
      currentObject = currentObject.__proto__;
    }
  }

  return "No property found!";
};

var Tornado = function(category, affectedAreas, windGust) {
  this.category = category;
  this.affectedAreas = affectedAreas;
  this.windGust = windGust;
};

Tornado.prototype.valueOf = function() {
  var sum = 0;

  for (var i = 0, len = this.affectedAreas.length; i < len; i++) {
    sum += this.affectedAreas[i][1];
  }

  return sum;
};

Tornado.prototype.toString = function() {
  var list = "";

//   var last = this.affectedAreas.pop();

//   list = this.affectedAreas.map(function(affectedArea) {
//       return affectedArea[0];
//     }).join(", ") + ", and " + last[0];

  for (var i = 0, len = this.affectedAreas.length; i < len; i++) {
    if (i < len -1) {
      list = list + this.affectedAreas[i][0] + ", ";
    } else {
      list = list + "and " + this.affectedAreas[i][0];
    }
  }

  return "This tornado has been certified as an " + this.category + ", with wind gusts up to " + this.windGust + "mph. Affected areas are: " + list + ", potentially affecting a population of " + this.valueOf().numberFormat() + ".";
};

var cities = [
  ["Kansas City", 464310],
  ["Topeka", 127939],
  ["Lenexa", 49398]
];

var twister = new Tornado("F5", cities, 220);

/*
twister.valueOf();
cities.push(["Olathe", 130045]);
twister.valueOf();
twister.constructor;
twister.constructor.prototype;
twister.__proto__;
*/
