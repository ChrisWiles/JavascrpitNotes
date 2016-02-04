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
