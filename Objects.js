/* What is an Object
An object is an unordered list of primitive data types (and sometimes reference data types)
that is stored as a series of name-value pairs. Each item in the list is called a property (functions are called methods).

Consider this simple object: */

var myFirstObject = {firstName: "Richard", favoriteAuthor: "Conrad"};

var myFirstObject = {
	firstName: "Richard",
	favoriteAuthor: "Conrad"
};

// This syntax is called JSON (JavaScript Object Notation):
var objectName = {
  propertyA: valueA,
  propertyB: valueB,
  methodX: function(param1, param2) {
    ...
  },
  methodY: function() {
    ...
  }
};

var person = {
	name: 'Thomas',
	age: 28,
	sayHello: function() {
		console.log('Hi, my name is ' + this.name);
		console.log('And my age is ' + this.age);
	}
};

//accessing property name
//via dot
console.log('Name of the object person is ' + person.name);
//accessing property age
//via string key/identifier
console.log('Age of the object person is ' + person['age']);


person.sayHello();
console.log('Name of object person is ' + person.name);

var dog = {
	name: 'Charlie',
	bark: function() {
		console.log('wof wof!');
	}
};

dog.bark();



// Object Literals
// This is an empty object initialized using the object literal notation​
​var myBooks = {};
​
​// This is an object with 4 items, again using object literal​
​var mango = {
	color: "yellow",
	shape: "round",
	sweetness: 8,
​
	​howSweetAmI: function () {
		console.log("Hmm Hmm Good");
	}
}

// Object Constructor
var object = new Object ();
object.key = 2;
object.key1 = "value2";

// 1. Constructor Pattern for Creating Objects
function Fruit (theColor, theSweetness, theFruitName, theNativeToLand) {
​
    this.color = theColor;
    this.sweetness = theSweetness;
    this.fruitName = theFruitName;
    this.nativeToLand = theNativeToLand;
​
    this.showName = function () {
        console.log("This is a " + this.fruitName);
    }
​
    this.nativeTo = function () {
    this.nativeToLand.forEach(function (eachCountry)  {
       console.log("Grown in:" + eachCountry);
        });
    }
}
var mangoFruit = new Fruit ("Yellow", 8, "Mango", ["South America", "Central America", "West Africa"]);
mangoFruit.showName(); // This is a Mango.​
mangoFruit.nativeTo();
​//Grown in:South America​
​// Grown in:Central America​
​// Grown in:West Africa​
​
​var pineappleFruit = new Fruit ("Brown", 5, "Pineapple", ["United States"]);
pineappleFruit.showName(); // This is a Pineapple.

// 2. Prototype Pattern for Creating Objects
function Fruit () {
​
}
​
Fruit.prototype.color = "Yellow";
Fruit.prototype.sweetness = 7;
Fruit.prototype.fruitName = "Generic Fruit";
Fruit.prototype.nativeToLand = "USA";
​
Fruit.prototype.showName = function () {
	console.log("This is a " + this.fruitName);
}
​
Fruit.prototype.nativeTo = function () {
    console.log("Grown in:" + this.nativeToLand);
}

// How to Access Properties on an Object

// Dot Notation
// We have been using dot notation so far in the examples above, here is another example again:​
​var book = {title: "Ways to Go", pages: 280, bookMark1:"Page 20"};
​
​// To access the properties of the book object with dot notation, you do this:​
console.log ( book.title); // Ways to Go​
console.log ( book.pages); // 280

// Bracket Notation
// To access the properties of the book object with bracket notation, you do this:​
console.log ( book["title"]); //Ways to Go​
console.log ( book["pages"]); // 280​
​
​//Or, in case you have the property name in a variable:​
​var bookTitle = "title";
console.log ( book[bookTitle]); // Ways to Go​
console.log (book["bookMark" + 1]); // Page 20 

var num1 = parseInt("1234blue"); //1234
var num2 = parseInt("“”"); //NaN
var num3 = parseInt("0xA"); //10 - hexadecimal
var num4 = parseInt(22.5); //22
var num5 = parseInt("70"); //70 - decimal
var num6 = parseInt("0xf"); //15 - hexadecimal

var num1 = Number("Hello world!"); //NaN
var num2 = Number(""); //0
var num3 = Number("000011"); //11
var num4 = Number(true); //1

//String Type

/* Each Object instance has the following properties and methods:

constructor — The function that was used to create the object. In the previous example,
the constructor is the Object() function.

hasOwnProperty(propertyName) — Indicates if the given property exists on the object
instance (not on the prototype). The property name must be specifi ed as a string (for
example, o.hasOwnProperty(“name”)).

isPrototypeOf(object) — Determines if the object is a prototype of another object.
(Prototypes are discussed in Chapter 5.)

propertyIsEnumerable(propertyName) — Indicates if the given property can be
enumerated using the for-in statement (discussed later in this chapter). As with
hasOwnProperty(), the property name must be a string.

toLocaleString() — Returns a string representation of the object that is appropriate for
the locale of execution environment.

toString() — Returns a string representation of the object.

valueOf() — Returns a string, number, or Boolean equivalent of the object. It often
returns the same value as toString(). */

var obj = {
    a: "hello world",
    b: 42,
    c: true
};

obj.a;      // "hello world"
obj.b;      // 42
obj.c;      // true

obj["a"];   // "hello world"
obj["b"];   // 42
obj["c"];   // true

typeof obj;     // "object"

// Object as a function

//Constructor with name Animal
//and parameter name
function Animal(name) {
	this.name = name;
	this.sayHello = function() {
		console.log('Hello ' + this.name);
	};
}


var rabbit = new Animal('rabbit');
rabbit.sayHello();

var dog = new Animal('dog');
dog.sayHello();

var person = {
	name: 'Josh',
	age: 50,
	phoneNumbers: ['+390 392 981 999', '+520 931 901 590'],
	address: {
		city: 'Prague',
		street: 'Karlova',
		zip: 12390
	},
	//method sayHello
	sayHello: function() {
		console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old');
	}
};
person.sayHello();

function Dog(name) {
  this.name = name;         // Dog.name = name;name;
  this.bark = function() {
    console.log('wof wof');
  };
}
var dog = new Dog('Kai');
console.log(dog.name);
dog.bark();

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log('Hello, my name is ' + this.name);
    console.log('And my age is ' + this.age);
  };
}
var peter = new Person('Peter', 31);
peter.sayHello();

var person = {
	firstName: 'John',
	lastName: 'Doe',
	sayHi: function() {
		return 'Hi there' + this.firstName;
	}
};

var employee = {
   firstName: 'Jim',
   lastName: "Doe",
   postion: "Manager".
   sayHi: function() {
      return "Hi there";
   }
};
// Factory Function
var createPerson = function(firstName, lastName) {
   return {
      firstName: firstName,
      lastName: lastName,
      sayHi: function() {
         return "My name is " + firstName + '' + lastName;
      }
   };
};
var johnDoe = createPerson("John", "Doe"); // Create object


//////////////////////////////////////////////////////////////

var makeRequest = function(url, callback) {
   // make request with url
   var data = 10; // json test xml..
   callback(data);
};

var obj = {
   someValue: 20,
   loadData: function(data) {
      var sum = this.someValue + data;
   },
   prepareRequest: function() {
      var url = "reddit.com";
      makeRequest(url, this.loadData.bind(this));
   }
}

var createPerson = function(firstName, lastName) {
   var person = {}

   Object.defineProperty(person, 'firstName', {
      thi
   });
   return person;
}

var person = {
   firstName: "chris",
   lastName: "wiles",
   age: 28,
   DOB: "03-13-1987",
   fullName: function () {
      return this.firstName + ' ' + this.lastName;
   }
}

var Person = {

}
console.log(person.firstName); // chris
console.log(person.fullName().toUpperCase()); // CHRIS WILES

function Person(name, job) {
  this.name = name;
  this.job = job;
  this.print = function() {
    console.log(this.name + ', ' + this.job);
  };
}
var thatGuy = new Person("Jack", "coder");
thatGuy.print();

myProfile = {
  name: "John Smith",
  email: "johnsmith@gmail.com",
  city: "San Francisco",
  points: 1234,
  isInvited: true,
  friends: [
    {
      name: "John Doe",
      email: "johndoe@gmail.com"
    },
    {
      name: "Jane Doe",
      email: "janedoe@gmail.com"
    }
  ]

 myFunction = function (a, b) {
  console.log(this);
  // do something
}

myFunction = function (a, b) {
  var myObject = this;
  // do something
}

function greetF() {
    function Person(name) {
        this.name = name;
    }

    Person.prototype.greet = function (otherName) {
        return console.log("Hi " + otherName + ", my name is " + this.name +'\n' );
    };

    var chris = new Person("Chris");

    chris.greet("John");
}
greetF();

var myArr = [
    "hello",
    function (name) {
        console.log("Hello " + name);
    },
    {
        name: "Chris Wiles",
        age: 28,
        address: "4600 Muller Blvd, Austin, TX"
    }
];
// myArr[1](); // invoke function
// myArr[2].name // name prop
console.log(myArr + '\n');
myArr[1](myArr[2].name + '\n');

(function(name) { // IIFE

    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name + '\n');

}('Christopher')); // IIFE

function greetF() {
    function Person(name) {
        this.name = name;
    }

    Person.prototype.greet = function (otherName) {
        return console.log("Hi " + otherName + ", my name is " + this.name +'\n' );
    };

    var chris = new Person("Chris");

    chris.greet("John");
}
greetF();

// Memorize how to write a
// factory Function
// both object types

// Factory Function
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    getFullName: function() {
      return this.fistName + " " + this.lastName;
    },
    greet: function(person) {
      if (typeof person.getFullName !== 'undefined') {
        return "Hello, " + person.getFullName();
      } else {
        return "Hello,"
      }
    }
  };
}
// Constor Function
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;


}
////////////////////////////////////
//Two ways to access an object
object.propertyName
object['propertyName']

//Extending Objects
object.prototype.propertyName
car.prototype.year = "2001";
///////////////////////////////////////////
  var numbers = {
    one: 1,
    two: 2,
    three: 3,
    four: 4
  };

  Object.keys(numbers).forEach(function(element, index, array) {
    numbers[element] = numbers[element] * 2;
  });
  numbers // { one: 2, two: 4, three: 6, four: 8 }

var obj = {
    one: 1,
    two: 2,
    three: 3,
    four: 4
};
//console.log(Object.keys(obj).length);
for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key + ':' + obj[key]);
    }
}

// Namespace
// A container which lets developers bundle all functionality under a unique, application-specific name.
// Class
// Defines the object's characteristics. A class is a template definition of an object's properties and methods.
// Object
// An instance of a class.
// Property
// An object characteristic, such as color.
// Method
// An object capability, such as walk. It is a subroutine or function associated with a class.
// Constructor
// A method called at the moment an object is instantiated. It usually has the same name as the class containing it.
// Inheritance
// A class can inherit characteristics from another class.
// Encapsulation
// A method of bundling the data and methods that use the data.
// Abstraction
// The conjunction of an object's complex inheritance, methods, and properties must adequately reflect a reality model.
// Polymorphism
// Poly means "many" and morphism means "forms". Different classes might define the same method or property.

// Identifying a prototype property
// You can determine whether a property is on the prototype by using a function
// such as:
function hasPrototypeProperty(object, name) {
  return name in object && !object.hasOwnProperty(name);
}
console.log(hasPrototypeProperty(book, "title")); // false
console.log(hasPrototypeProperty(book, "hasOwnProperty")); // true
// If the property is in an object but hasOwnProperty() returns false, then
// the property is on the prototype.
