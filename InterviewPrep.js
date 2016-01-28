// Object Literals most common
var myObject = {
	myString: 'string',
	myNumber: 10,
	myBoolean: false,
	myNull: null,
	myUndefined: undefined,
	myMehtod: function() {
		console.log("This is " + this.myString);
	}
};

// Constructor Pattern for Creating Objects
function Fruit(theColor, theSweetness, theFruitName, theNativeToLand) {​
	this.color = theColor;
	this.sweetness = theSweetness;
	this.fruitName = theFruitName;
	this.nativeToLand = theNativeToLand;​
	this.showName = function() {
		console.log("This is a " + this.fruitName);
	}​;
	this.nativeTo = function() {
		this.nativeToLand.forEach(function(eachCountry) {
			console.log("Grown in:" + eachCountry);
		});
	}​;
}

// How to Access Properties on an Object
// 1. Dot Notation
// 2. Bracket Notation

if (true) {
	//Do something;
} else if (true) {
	//DO something;
} else {
	//Do defualt;
}

