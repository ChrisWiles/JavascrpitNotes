/* 
HTML methods
This example uses the method to "find" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":

Older examples may use a type attribute: <script type="text/javascript">.
The type attribute is not required. JavaScript is the default scripting language in HTML.

Writing into an alert box, using window.alert().
Writing into the HTML output using document.write().
Writing into an HTML element, using innerHTML.
Writing into the browser console, using console.log().

document.getElementsByTagName('');
document.getElementById('');

// common Keywords
break, continue, debugger, do while, for, function, if, else, return, switch, try, catch, var;

==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to

JavaScript Assignment Operators
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
*/

typeof "John"                // Returns string 
typeof 3.14                  // Returns number
typeof false                 // Returns boolean
typeof [1,2,3,4]             // Returns object
typeof {name:'John', age:34} // Returns object
// In JavaScript, an array is a special type of object. Therefore typeof [1,2,3,4] returns object. 

var person;                  // Value is undefined, type is undefined
var car = "";                // The value is "", the typeof is string
var person = null;           // Value is null, but type is still an object

// Difference Between Undefined and Null
typeof undefined             // undefined
typeof null                  // object
null === undefined           // false
null == undefined            // true

// Function Invocation
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius(32);

// You can use:
var text = "The temperature is " + toCelsius(32) + " Centigrade";
// Instead of:
var x = toCelsius(32);
var text = "The temperature is " + x + " Centigrade";

// Objects
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};
// Accessing Object Properties
objectName.propertyName;
objectName[propertyName]
