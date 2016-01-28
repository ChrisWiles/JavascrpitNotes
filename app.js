// Closures



// Prototypes

(function greetF() {
    function Person(name) {
        this.name = name;
    }

    Person.prototype.greet = function (otherName) {
        return "Hi " + otherName + ", my name is " + this.name;
    };

    var chris = new Person("Chris");

    chris.greet("John");
})()



// 'this' 'this' 'this' 'this'
(function () {
function foo() {
    console.log(this);
}

// normal function call
foo(); // `this` will refer to `window`

// as object method
var obj = {bar: foo};
obj.bar(); // `this` will refer to `obj`

// as constructor function
new foo(); // `this` will refer to an object that inherits from `foo.prototype`
})()
