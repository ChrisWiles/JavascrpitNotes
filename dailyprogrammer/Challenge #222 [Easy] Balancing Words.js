// [2015-07-06] Challenge #222 [Easy] Balancing Words

// Today we're going to balance words on one of the letters in them. 
// We'll use the position and letter itself to calculate the weight around 
// the balance point. A word can be balanced if the weight on either side
// of the balance point is equal. Not all words can be balanced, but those
// that can are interesting for this challenge.

// The formula to calculate the weight of the word is to look at the letter position
// in the English alphabet (so A=1, B=2, C=3 ... Z=26) as the letter weight,
// then multiply that by the distance from the balance point, so the first letter
// away is multiplied by 1, the second away by 2, etc.

// As an example:

// STEAD balances at T: 1 * S(19) = 1 * E(5) + 2 * A(1) + 3 * D(4))

// Your program or function should emit the words split by their balance
// point and the weight on either side of the balance point. 

// Example:
// S T EAD - 19

// This indicates that the T is the balance point and that the weight on either side is 19.

// Challenge Input

// CONSUBSTANTIATION
// WRONGHEADED
// UNINTELLIGIBILITY
// SUPERGLUE

// Challenge Output
// CONSUBST A NTIATION - 456
// WRO N GHEADED - 120
// UNINTELL I GIBILITY - 521    
// SUPERGLUE DOES NOT BALANCE

var Side = function(word) {
    this.word = word.toUpperCase();
    this.index = 0;
    this.weight = 0;
    this.baseWeight = 0;
}

Side.prototype.addLetter = function() {
    var POSITION_KEY = 64;
    this.baseWeight += this.word.charCodeAt(this.index) - POSITION_KEY;
    this.weight += this.baseWeight;
    this.index++;
}

function balance(word) {
    var output, pivotPoint;
    var left = new Side(word);
    var right = new Side(word.split('').reverse().join(''));

    while (left.index < word.length - (right.index + 1)) {
        if (left.weight <= right.weight) {
            left.addLetter();
        } else {
            right.addLetter();
        }
    }

    if (left.weight === right.weight) {
        pivotPoint = left.index;
        output = word.substring(0, pivotPoint)
            + ' ' + word.substring(pivotPoint, pivotPoint + 1)
            + ' ' + word.substring(pivotPoint + 1)
            + ' - ' + left.weight;
    } else {
        output = word + ' DOES NOT BALANCE';
    }

    return output;
}

console.log(balance("STEAD"));
// S T EAD - 19
console.log(balance("CONSUBSTANTIATION"));
// CONSUBST A NTIATION - 456
console.log(balance("WRONGHEADED"));
// WRO N GHEADED - 120
console.log(balance("UNINTELLIGIBILITY"));
// UNINTELL I GIBILITY - 521
console.log(balance("DOESNOTBALANCE"));
// DOESNOTBALANCE DOES NOT BALANCE
console.log(balance("WRONG"));
// WRONG DOES NOT BALANCE
console.log(balance("THEEXAMPLESSHOULDHAVEWORKED"));
// THEEXAMPLESSHOULDHAVEWORKED DOES NOT BALANCE