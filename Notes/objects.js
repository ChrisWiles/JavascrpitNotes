// LITERAL NOTATION

// Creat object then add properties & methods
var hotel = {}

hotel.name = "Quay";
hotel.rooms = 40;
hotel.booked = 25;
hotel.checkAvailability = function() {
  return this.rooms - this.booked;
};

//create object with properties & methods
var hotel = {
  name: "Quay",
  rooms: 40,
  booked: 25,
  checkAvailability: function() {
    return this.rooms - this.booked;
  }
};

// OBJECT CONSTRUCTOR NOTATION
var hotel = new Object();

hote.name = "Quay";
hotel.rooms = 40;
hotel.booked = 25;
hotel.checkAvailability = function() {
  return this.rooms - this.booked;
}

// function is used as a templete to create objects
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);

// 'this' keyword
function windowSize() {
  var width = this.innerWidth;
  var height = this.innerHeight;
  return [height, width];
};
/* getArea() method apperas inside the saope object, so 'this' refers to the shape object it is contained in*/

var shape = {
  width: 600,
  height: 400,
  getArea: function() {
    return this.width * this.height;
    // shape.width * shape.height
  }
};
/* Array are acually a special type of object. They hold a related set of key/value pairs (like all objects), but they key for each value is its index number */

// define Person constructor function in order to create custom Person() objects later
var Person = function(living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = function() {return this.gender;};
};
// instantiate a Person object and store it in the cody variable
var cody = new Person(true, 33, 'male');
/* The same cody object is created below, but instead of using the native Object()
constructor to create a one-off cody, we first define our own Person() constructor that can
create a cody object (and any other Person object we like) and then instantiate it with
"new". */

// create a codyA object using the Object() constructor
var codyA = new Object();
codyA.living = true;
codyA.age = 33;
codyA.gender = 'male';
codyA.getGender = function() {return codyA.gender;};
























