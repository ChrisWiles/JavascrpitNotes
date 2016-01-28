//********************************************************************************************************************************
//                       STRING METHODS
// charAt() Returns the character at the specified index (position)
// charCodeAt()   Returns the Unicode of the character at the specified index
// concat() Joins two or more strings, and returns a new joined strings
// fromCharCode() Converts Unicode values to characters
// indexOf()   Returns the position of the first found occurrence of a specified value in a string
// lastIndexOf()  Returns the position of the last found occurrence of a specified value in a string
// localeCompare()   Compares two strings in the current locale
// match()  Searches a string for a match against a regular expression, and returns the matches
// replace()   Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
// search() Searches a string for a specified value, or regular expression, and returns the position of the match
// slice()  Extracts a part of a string and returns a new string
// split()  Splits a string into an array of substrings
// substr() Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
// substring() Extracts the characters from a string, between two specified indices
// toLocaleLowerCase()  Converts a string to lowercase letters, according to the host's locale
// toLocaleUpperCase()  Converts a string to uppercase letters, according to the host's locale
// toLowerCase()  Converts a string to lowercase letters
// toString()  Returns the value of a String object
// toUpperCase()  Converts a string to uppercase letters
// trim()   Removes whitespace from both ends of a string
// valueOf()   Returns the primitive value of a String object
//********************************************************************************************************************************



// Squares sequence
// Create a function squares(x,n) that starts with a number (x) and
// returns an array of length (n) with squares of the previous number
// Example:
// squares(2,5)=[2,4,16,256,65536]
// squares(3,3)=[3,9,81]

function squares(x, n) {
  var array = [x];
  for (var i = 1; i < n; i++) {
    x = x * x;
    array[i] = x;
  }
  return array;
}
console.log('[' + squares(7, 4).toString() + ']'); // [7,49,2401,5764801]


// Keypad horror
// You get a string with numbers only
// "0789456123" --> "0123456789"

function computerToPhone(numbers) { // "0123456789" --> "0789456123"
  var sub = numbers.split('');
  var num = '';
  for (var i = 0; i < numbers.length; i++) {
    if (sub[i] === '0') {
      num += '0';
    }
    if (sub[i] === '1') {
      num += '7';
    }
    if (sub[i] === '2') {
      num += '8';
    }
    if (sub[i] === '3') {
      num += '9';
    }
    if (sub[i] === '4') {
      num += '4';
    }
    if (sub[i] === '5') {
      num += '5';
    }
    if (sub[i] === '6') {
      num += '6';
    }
    if (sub[i] === '7') {
      num += '1';
    }
    if (sub[i] === '8') {
      num += '2';
    }
    if (sub[i] === '9') {
      num += '3';
    }
  }
  return num;
}

// Find Your Villain Name
// Create a function, getVillainName, that returns a villain name based on the 
// user's birthday. (The birthday will be passed to the function as a valid 
// Date object, so for simplicity, there's no need to worry about converting strings to dates.)

// The first name will come from the month, and the last name will come from the last digit of the date.

// Month -> first name

// January -> "The Evil"
// February -> "The Vile"
// March -> "The Cruel"
// April -> "The Trashy"
// May -> "The Despicable"
// June -> "The Embarrassing"
// July -> "The Disreputable"
// August -> "The Atrocious"
// September -> "The Twirling"
// October -> "The Orange"
// November -> "The Terrifying"
// December -> "The Awkward"
// Last digit of date -> last name

// 0 -> "Mustache"
// 1 -> "Pickle"
// 2 -> "Hood Ornament"
// 3 -> "Raisin"
// 4 -> "Recycling Bin"
// 5 -> "Potato"
// 6 -> "Tomato"
// 7 -> "House Cat"
// 8 -> "Teaspoon"
// 9 -> "Laundry Basket"
// The returned value should be a string in the form of "First Name Last Name".

// For example, a birthday of November 18 would return "The Terrifying Teaspoon"

function getVillainName(birthday) {
  var month = birthday.getMonth(); // Returns the month (from 0-11)
  var day = birthday.getDate().substr(-1); // day of the month (from 1-31)
  // .substr(-1) last index
  var monthName = ["Evil", "Vile", "Cruel", "Trashy", "Despicable", "Embarrassing",
    "Disreputable", "Atrocious", "Twirling", "Orange", "Terrifying",
    "Awkward"
  ];

  var dayName = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin",
    "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"
  ];
  var firstName = monthName[month];
  var lastName = dayName[day];

  return "The " + firstName + " " + lastName;
}

// problem of adding up all the whole numbers from 1 through a given number n.
// f(n=100) // returns 5050
// It's your duty to verify that n is a valid positive integer number. If not, please, return false.

function f(n) {
  if (n <= 0 || NaN || n !== parseInt(n, 10)) {
    return false;
  }
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Tug-o'-War
// [[5,0,3,2,1], [1,6,8,2,9]]  // 11 < 26
function tug_o_war(teams) {
  var team1 = teams[0];
  var team2 = teams[1];

  var team1Score = 0;
  var team2Score = 0;

  var anchor1 = team1[0];
  var anchor2 = team2[4];


  for (var i in team1) {
    team1Score += team1[i];
  }
  for (var j in team2) {
    team2Score += team2[i];
  }

  if (team1Score > team2Score) {
    return "Team 1 wins!";
  } else if (team1Score < team2Score) {
    return "Team 2 wins!";
  } else if (team1Score == team2Score && anchor1 < anchor2) {
    return "Team 2 wins!";
  } else if (team1Score == team2Score && anchor1 > anchor2) {
    return "Team 1 wins!";
  } else
    return "It's a tie!";
}


// Discover Original Price

// Given an item of final price $75 sold with a 25% discount, 
// the function should return an original price of $100.

function discoverOriginalPrice(discountedPrice, salePercentage) {
  var orgPrice = discountedPrice / (1 - salePercentage / 100);
  return +orgPrice.toFixed(2); //+ number rater than string
}
(discoverOriginalPrice(25, 75)); // 101

// Testing 1-2-3
function number(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr[i] = (i + 1) + ':' + ' ' + array[i];
  }
  return newArr;
}
number(["a", "b", "c"]); // => ["1: a", "2: b", "3: c"]

// We Have Liftoff
function liftoff(instructions) {

  instructions
    .sort(function(a, b) {
      return a - b;
    })
    .reverse()
    .push('liftoff!')
    .toString();

  return instructions.join(' ');
}
liftoff([3, 2, 4, 6, 1, 5, 8, 10, 7, 9]); // 10 9 8 7 6 5 4 3 2 1 liftoff!

function liftoff(instructions) {
  return instructions.sort(function(a, b) {
    return b - a;
  }).join(' ') + ' liftoff!';
}

// Exes and Ohs
function XO(str) {
  var x = 0;
  var o = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'x' || str[i] === 'X') {
      x++;
    }
    if (str[i] === 'o' || str[i] === 'O') {
      o++;
    }
  }
  if (x !== o) {
    return false;
  }
  return true;
}

function XO(str) {
  var a = str.replace(/x/gi, ''),
    b = str.replace(/o/gi, '');
  return a.length === b.length;
}
// Testing 1-2-3
number(["a", "b", "c"]); // => ["1: a", "2: b", "3: c"]


// longest_palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.
// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

// Round a number to n decimal places

function Round(n, p) {
  return n.toFixed(p);
}
// Round(1.56881,4)==>"1.5688"
// Round(0.3333,2)==> "0.33"

// Is n divisible by x and y?
// Create a function isDivisible(n,x,y) 
// that checks if a number n is divisible by two numbers x AND y

function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  }
  return false;
}

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

// isDivisible(3,1,3)--> true because 3 is divisible by 1 and 3
// isDivisible(12,2,6)--> true because 12 is divisible by 2 and 6
// isDivisible(100,5,3)--> false because 100 is not divisible by 3
// isDivisible(12,7,5)--> false because 12 is neither divisible by 7 nor 5

// http://www.codewars.com/kata/52724507b149fa120600031d/train/javascript
// Write out numbers
// Create a function that transforms any positive number
// to a string representing the number in words. 
// The function should work for all numbers between 0 and 999999.
// number2words(99999) should return "ninety-nine thousand nine hundred ninety-nine"
function number2words(n) {

  var names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twevel', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'
  ]; // 1-19

  var tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (n <= 19) {
    return names[n];
  }
  if (n < 100 && n > 19) {

  }

  function tensDigit(a) {

    // twenty-four
  }

}
number2words(18);

// http: //www.codewars.com/kata/554e6241d665537588000079/train/javascript
// Are the brackets balanced? // Not Solved
function isBalanced(string) {
  var level = 0;

  for (var i = 0; i < string.length; i++) {
    if (i === '(') {
      level++;
    }
    if (i === ')') {
      level--;
    }
    if (level < 0) {
      return false;
    }
  }
  return true;
}

// Greeting My Friends
// If the argument is a valide array of strings, the method should return a hello message for every array entry
function greetingForAllFriends(friends) {
  if (friends.length < 1 || friends === null) {
    return null;
  }
  var friendsArray = [];
  for (var i in friends) {
    friendsArray[i] = "Hello, " + friends[i] + "!";
  }
  return friendsArray;
}
greetingForAllFriends(["Bilal", "Amir", "Rachid", "Said", "Yamin", "Rahim", "Sofiane"]);

// Counting Array Elements
// Write a function that takes an array and counts the number of each unique element present returns a object
// http://www.codewars.com/kata/5569b10074fe4a6715000054/train/javascript
count(['a', 'a', 'b', 'b', 'b']); // { 'a': 2, 'b': 3 }

function count(array) {

  array.sort();
  var counts = 0;
  var current = null;
  var obj = {};

  for (var i = 0; i <= array.length; i++) {
    if (array[i] != current) {
      if (counts > 0) {
        obj[current] = counts;
      }
      current = array[i];
      counts = 1;
    } else {
      count++;
    }
  }
  return obj;
}

array_elements = ["2", "1", "2", "2", "3", "4", "3", "3", "3", "5"];


function count(array) {
  var count = {};

  for (var i = 0; i < array.length; i++) {
    if (!count[array[i]]) {
      count[array[i]] = 0;
    }
    count[array[i]]++;
  }
  return count;
}

// using reduce()
function count(array) {
  return array.reduce(function(stack, value) {
    return stack[value] ? stack[value]++ : stack[value] = 1, stack;
  }, {});
}

function count(array) {
  var answer = {};

  for (var i = 0; i < array.length; i++) {
    answer[array[i]] = answer[array[i]] ? answer[array[i]] + 1 : 1;
  }

  return answer;
}

// Make them bark!
// Constructor
function Dog(name, breed, sex, age) {
  this.name = name;
  this.breed = breed;
  this.sex = sex;
  this.age = age;
  this.bark = function() {
    return 'Woof!';
  };
}
Dog.prototype.pee = function pee() {
  return 'Not right now!';
};

var kai = new Dog('kai', 'uknown', 'male', 1.2);
kai.bark();

// Count by X
// Create a function with two arguments that will return a list of length (n) with multiples of (x).

function countBy(x, n) {
  for (var z = [], i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}
countBy(2, 5); // [ 2, 4, 6, 8, 10 ]
countBy(1, 10); // [1,2,3,4,5,6,7,8,9,10]


// Convert number to reversed array of digits
function digitize(n) {
  var a = n.toString().split('').reverse();
  var x = [];
  for (var i = 0; i < a.length; i++) { // .map(Number); 
    x[i] = parseInt(a[i]); // convert a[i] the string to a number
  }
  return x;
}

function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}
digitize(35231); // [1,3,2,5,3]

// map Method (Array)
// Calls a defined callback function on each element of an array, and returns an array that contains the results.

// Apply Math.sqrt(value) to each element in an array.
var numbers = [9, 16];
var result = numbers.map(Math.sqrt);

document.write(result);
// Output: 3,4

// Define the callback function. ///////////////////////
function AreaOfCircle(radius) {
  var area = Math.PI * (radius * radius);
  return area.toFixed(0);
}

// Create an array.
var radii = [10, 20, 30];

// Get the areas from the radii.
var areas = radii.map(AreaOfCircle);

document.write(areas);

// Output:
// 314,1257,2827

// Calling Boolean on undefined, null, 0, '' and false will returns false. All other values will be evaluated to true.
function countSheeps(arr) {
  return arr.filter(Boolean).length; // .length returns the number of items filtered
}

function countSheeps(arrayOfSheeps, x) {
  return arrayOfSheeps.reduce(function(count, sheep) {
    return count + !!sheep;
  }, 0);
}
// reduce Method (Array)/////////////////////////
// Calls the specified callback function for all the elements in an array. 
// The return value of the callback function is the accumulated result, 
// and is provided as an argument in the next call to the callback function.
////////////////////Sum using reduce Methods////////////////////////////////////////
function sum(num) {
  return num.reduce(function(a, b) {
    return a + b;
  }, 0); // So the 0 at the end is the initialValue of the Sum that will be computed.
}
sum([1, 5.2, 4, 0, -1]); // 9.2
////////////////////Prime Number Generator////////////////////////////////////////////
function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i !== 0) {
      return true;
    }
  }
  return false;
}

function display(n) {
  var arr = [2];
  for (var i = 3; i < n; i += 2) {
    if (isPrime(i)) { // isPrime(i) === true
      arr.push(i);
    }
  }
  console.log(arr);
}
display(100);
////////////////Sieve of Eratosthenes algorithm //////////////////////////////////////////
function start() {
  var array = [2, 3];
  for (var i = 5; i <= 1000; i += 2) {
    if (array.every(function(p) {
        return i % p;
      })) {
      array.push(i);
    }
  }
  var result = array.join(",");
  console.log(result);
}
start();
/////////////////Another/////////////////////////////////////////////
function printPrime(value) {
  var primes = [];
  for (var i = 2; i < value; i++) {
    primes[i] = true;
  }
  var limit = Math.sqrt(value);
  for (var i = 2; i < limit; i++) {
    if (primes[i] === true) {
      for (var j = i * i; j < value; j += i) {
        primes[j] = false;
      }
    }
  }
  for (var i = 2; i < value; i++) {
    if (primes[i] === true) {
      console.log(i + " " + primes[i]);
    }
  }
}
////////////////// return a function that returns n//////////////////////
function always(n) {
  return function() {
    return n;
  };
}
///////////////////"this" is a problem//////////////////////////////////
// We want to create a constructor function 'NameMe', which takes 
// first name and last name as parameters. The function combines 
// the first and last names and saves the value in "name" property.
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = this.firstName + ' ' + this.lastName; // this.name = first + ' ' + last;
}
var n = new NameMe('John', 'Doe');
n.firstName; //Expected: John
n.lastName; //Expected: Doe
n.name; //Expected: John Doe
/////////////////////////Vowel remover//////////////////////////////////
shortcut("codewars"); // --> cdwrs
shortcut("goodbye"); // --> gdby
function shortcut(string) {
  var str = string.split('');
  var s = [];

  for (var i in str) {
    if (str[i] != 'a' && str[i] != 'e' &&
      str[i] != 'i' && str[i] != 'o' &&
      str[i] != 'u') {

      s[i] = str[i];
    }
  }
  return s.join('');
}

function shortcut(string) {
  return string.replace(/[aeiou]+/g, '');
}
///////////////replace Method (String)////////////////////////////////////
// Required. An instance of a Regular Expression object containing the regular 
// expression pattern and applicable flags. Can also be a String object or string 
// literal that represents the regular expression. If rgExp is not an instance of 
// a Regular Expression object, it is converted to a string, and an exact search 
// is made for the results; no attempt is made to convert the string into a regular 
// expression.
var s = "the batter hit the ball with the bat";

// Replace "the" with "a".
var re = /the/g;
var result = s.replace(re, "a");
document.write(result);
// Output: a batter hit a ball with a bat
////////////////////////Opposites Attract///////////////////////
function lovefunc(f1, f2) {

  if (evenOdd(f1) === 'even' && evenOdd(f2) === 'odd' ||
    evenOdd(f1) === 'odd' && evenOdd(f2) === 'even') {
    return true;
  }
  return false;


  function evenOdd(num) {
    if (num === 0 || num % 2 === 0) {
      return 'even';
    }
    if ((num + 1) % 2 === 0) {
      return 'odd';
    }
    return false;
  }
}

function lovefunc(f1, f2) {
  return f1 % 2 !== f2 % 2; // both even = 0 both odd = 1
  ///////////////////////////Replace 'T' with 'G'///////////////
  function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
  }

  function DNAtoRNA(dna) {
    return dna.split("T").join("U");
  }
}
// The split function will change, for example, "GCAT" into ["GCA",""]. 
// The join then adds a "U" between all of the strings in the array so you get "GCA" + "U" + "" -> "GCAU".

//////////////////////////////Format Money////////////////////////////////////////
function formatMoney(amount) {
  return '$' + amount.toFixed(2);
}

function formatMoney(amount) {
  var i = (amount + '').indexOf('.');
  if (i === -1)
    return '$' + amount + '.00';
  var amts = amount + '';
  var cents = amts.substring(i, amts.length);

  if (cents.length === 1)
    cents += '00';
  else if (cents.length === 2)
    cents += '0';

  return '$' + amts.substring(0, i) + cents;
}

////////////Capitalized every word////////////////////
var str = "How can mirrors be real if our eyes aren't real";



function Jaden(sentence) {
  return sentence.split(" ").map(function(word) {
    return word[0].toUpperCase() + word.slice(1);
  }).join(" ");
}

function Jaden(sentence) {
  var split = sentence.split(" ");
  var capitalizedArray = [];
  for (var word = 0; word < split.length; word++) {
    var capitalized = split[word][0].toUpperCase() + split[word].slice(1);
    capitalizedArray.push(capitalized);
  }
  var result = capitalizedArray.join(" ");
  return result;
}
String.prototype.toJadenCase = function() {
  return this.replace(/(^|\s)[a-z]/g, function(x) {
    return x.toUpperCase();
  });
};
String.prototype.toJadenCase = function() {
  var arry = this.split(" ");
  console.log(arry); // [ 'how','can','mirrors',...]
  for (i = 0; i < arry.length; i++) { // index at 0
    arry[i] = arry[i].split(""); // apply split to 1st ele 'how'. 
    console.log(arry[i]); // [ 'h', 'o', 'w' ]
    arry[i][0] = arry[i][0].toUpperCase(); // make H upper case [i][0]
    console.log(arry[i]); // [ 'H', 'o', 'w' ]
    console.log(arry); // [ [ 'H', 'o', 'w' ],'can''mirrors',..]
    arry[i] = arry[i].join(""); // put how back into array move back next ele in for loop
  }
  //return arry.join(" ");
};
// The function 'Jaden' receives a string 'sentence'. It uses String.split() 
// to split it into an array based on a denominator (separating string) - in this case, " " (single space).
// Upon the result, Array.map is called, which - when called by an array - 
// receives a function (whose first parameter is an element of that array), 
// calls that function for each of the elements in the calling array, and 
// returns the result.
// In this case, for each element in the array (that, again, was the result of sentence.split()), 
// we apply the following code: get the first letter of the element (word[0]), turn it 
// into uppercase (via the built-in String method, 'String.toUpperCase()', called upon 
// the first letter - which is in itself a string); attach that to the result of slicing 
// the element from the second letter onwards (word.slice(1)), and return the result (of the attachment).
// Now, after we've applied the inner function to each element in 'sentence.split()', 
// we have an array of capitalized words. To regain a string, we can use the opposite of 
// String.split() - Array.join(), which joins elements from an array into a string based, 
// again, on a common denominator (in this case, again, a single space).

var str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function() {
  var newStr = [];

  for (var i = 0; i < str.length; i++) {
    if (str[i - 1] == ' ') {
      newStr[i] = str[i].toUpperCase();
      console.log(newStr[i]);
    }
    if (str[i - 1] != ' ') { // Must modify index that has already passed so not to be overwritten
      newStr[i] = str[i];
      console.log(newStr[i]);
    }
  }
  return newStr.join('');
};
str.toJadenCase();
String.prototype.toJadenCase = function() {
  var newStr = [];

  for (var i = 0; i < this.length; i++) {
    if (this[i - 1] == ' ') {
      newStr[i] = this[i].toUpperCase();
      console.log(newStr[i]);
    }
    if (this[i - 1] != ' ') { // Must modify index that has already passed so not to be overwritten
      newStr[i] = this[i];
      console.log(newStr[i]);
    }
  }

  return newStr.join('');
};
///////////////////Credit Card Mask ///////////////////////////////
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
function maskify(cc) {
  var split = cc.split('');
  var maskLength = cc.length - 4;

  for (var i = 0; i < maskLength; i++) {
    split[i] = '#';
  }
  return split.join('');
}

function maskify(cc) {
  return cc.replace(/.(?=....)/g, '#');
}
//////Add property to every object in array////////////////////
// Your task is to add a new property usersAnswer to every object 
// in the array questions. The value of usersAnswer should be set 
// to null. The solution should work for array of any length.
function addProp(questions) {

  for (var i = 0; i < questions.length; i++) {
    questions[i].usersAnswer = null;
  }
  return questions;
}
var questions = [{
  question: "A",
}, {
  question: "B",
}];

//////////Array prototype Constructor///////////////////
Array.prototype.myUcase = function() {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.myUcase();
//////////////Categorize New Member/////////////////////
// To be a senior, a member must be at least 55 years old and have a 
// handicap greater than 7. In this croquet club, handicaps range from 
// -2 to +26; the better the player the lower the handicap.
function openOrSenior(data) {
  var log = [];
  for (var i in data) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      log[i] = 'Senior';
    } else {
      log[i] = 'Open';
    }
  }
  return log;
}
openOrSenior([
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9]
]); // ["Open", "Open", "Senior", "Open", "Open", "Senior"]
function openOrSenior(data) {
  function determineMembership(member) {
    return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
  }
  return data.map(determineMembership);
}
//////////////////////////You're a square!/////////////////////////////////
// Given an integral number, determine if it's a square number:
function isSquare(n) {
  if (n < 0) {
    return false;
  }
  if (n === 0) {
    return true;
  }
  for (var i = 0; i < n; i++) {
    if (n == i * i || n == 1) {
      return true;
    }
  }
  return false;
}
var isSquare = function(n) {
  var s = Math.sqrt(n);
  return s === (s | 0);
};
///////////Clone Arrays/////////////////
function copyList(myArray) {
  return myArray.slice();
}
Array.prototype.clone = function() {
  return this.slice(0);
};
//////////////////////////Digitize///////////////////////////////////////////
// Given a non-negative integer, return an array / a list of the individual digits in order.
// 8675309 => [8,6,7,5,3,0,9]
function digitize(n) {
  return String(n).split('').map(Number);
}
////////////////// List Filtering///////////////////////
function filter_list(l) {
  var num = [];
  for (var i in l) {
    if (typeof(l[i]) === 'number') {
      num.push(l[i]);
    }
  }
  return num;
}

function filter_list(l) {
  return l.filter(function(e) {
    return typeof e === 'number';
  });
}

function filter_list(l) {
  var F = l.filter(function(i) {
      return typeof(i == 'number')
    }
    return F;
  }
}
////Use reduce() to calculate the sum of the values in an array///////////
function sum(array) {
  return array.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;
  });
}
////////////////////Functional Addition///////////////////
function add(n) {
  return function(a) {
    return a + n;
  }
}
//////////////////////The 'if' function/////////////////////////////////////
function _if(bool, func1, func2) {
  if (bool == true) {
    return func1();
  }
  if (bool === false || bool == undefined || bool == null || bool == 0 || bool == '') {
    return func2();
  }
}

function _if(bool, func1, func2) {
  return bool ? func1() : func2(); // //Used ternary
}

function _if(bool, func1, func2) {
  if (bool) {
    func1();
  } else {
    func2();
  }
}
/////////////////////Regular Ball Super Ball/////////////////////////////////
var Ball = function(ballType) {
  this.ballType = ballType || 'regular';
};
// we're taking advantage of the short-circuit feature of the boolean OR operation, 
// which effectively returns the first "truthy" value it comes across, or the last value.

// This means that if nothing is passed in to the constructor, 
// ballType will be undefined, and this.ballType will be set to 'regular'.
///////////////////////////Color Ghost/////////////////////////////////////////
// Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated
function Ghost() {
  randomColor = function() {
    var colors = ["white", "yellow", "purple", "red"];
    var random = Math.round(Math.random() * 3);
    return colors[random];
  };
  this.color = randomColor();
}
var ghost = new Ghost();
ghost.color;
color = randomColor();

var Ghost = function() {
  var colors = ["white", "yellow", "purple", "red"];
  var colorIndex = Math.floor(Math.random() * (colors.length));
  this.color = colors[colorIndex];
};
//////////////////////Object Oriented Piracy/////////////////////////
function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
  this.isWorthIt = function() {
    if (draft - crew * 1.5 > 20) {
      return true;
    }
    return false;
  };
}
////////////////Sentence Smash////////////////////////////////////////////
function smash(words) {
  return words.join(" ");
}

function smash(words) {
  var smashed = '';
  for (var i = 0; i < words.length; i++) {
    smashed += words[i];
    if (i != words.length - 1) {
      smashed += ' ';
    }
  }
  return smashed;
}
smash(["hello", "world"]); // "hello world"
////////////////////////////Complete The Pattern #1///////////////////////////////////
// 1
// 22
// 333
// ....
// .....
// nnnnnn
function pattern(n) {
  var output = "";
  if (n <= 0) {
    return output = "";;
  }
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
      output += i;
    }
    if (i != n) {
      output += '\n';
    }
  }
  return output;
}

function pattern(n) {
  var res = [],
    i;
  for (i = 1; i <= n; i++) {
    res.push(Array(i + 1).join(i));
  }
  return res.join('\n');
}
//////////////////////////////Complete The Pattern #2//////////////////////////////////////
(n)(n - 1)(n - 2)...4321
  (n)(n - 1)(n - 2)...432(n)(n - 1)(n - 2)...43(n)(n - 1)(n - 2)...4(n)(n - 1)
  (n)
pattern(4):
  4321
432
43
4
/////////////////////////////Find the capitals////////////////////////////////
// MENU
// Functions
// 1. Find Capital Letters
// 2. Create Random Letters
// 3. 
function capitals(word) {
  var split = word.toString().split('');
  var capitalsIndex = [];

  for (var i = 0; i < split.length; i++) {
    if (isCapital(split[i])) { // found Capital
      capitalsIndex.push(split[i]);
    }
  }

  function isCapital(index) {
    var capitalized = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
      'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
      'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    for (var i = 0; i < capitalized.length; i++) {
      if (index === capitalized[i]) {
        return true;
      }
    }
  }
  return capitalsIndex;
}

function randomLetterGen() {
  var capitalized = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  var lowerCase = [];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (var i in capitalized) {
    lowerCase.push(capitalized[i].toLowerCase());
  }
  var characters = numbers.concat(capitalized, lowerCase);
  var randomIndex = Math.floor(Math.random() * characters.length);
  var randomChar = characters[randomIndex];
  return (randomChar);
}

function createRandomArry(length) {
  var array = [];
  for (var i = 0; i < length; i++) {
    array.push(randomLetterGen());
  }
  return array;
}
capitals('CodEWaRs'); // [0,3,4,6] 
////////////////////////////////////////////////////////////
function addEntry(squirrel) {
  var entry = {
    events: [],
    squirrel: squirrel
  };
  for (var i = 1; i < arguments.length; i++)
    entry.events.push(arguments[i]);
  journal.push(entry);
}
addEntry(true, "work", "touched tree", "pizza",
  "running", "television");
//////////////////The sum of a range/////////////////////////// copy array: array.slice(0)
function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var Sum = 0;
  for (var i = 0; i < array.length; i++) {
    Sum += array[i];
  }
  return Sum;
}
//////////////////////Reversing an array//////////////////////////
function reverseArray(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;
}
//////////////////////HIGHER ORDER FUNCTIONS/////////////////////////////////////////
function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]); // console.log(array[i])
}
forEach(["Wampeter", "Foma", "Granfalloon"], console.log);
forEach(names, function(name) {
  console.log(name);
});

var numbers = [1, 2, 3, 4, 5],
  sum = 0;
forEach(numbers, function(num) {
  sum += num;
});
// forEach is called
// parameter: function(num) {sum += number;} is passed into forEach function
// action(array[i]); --> function(array[i]) {sum += i;}