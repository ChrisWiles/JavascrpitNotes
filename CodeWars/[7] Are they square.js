//Are they square ?
// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

// Your function should return true if all elements in the array are square numbers and false if not.

// An empty array should return undefined. You can assume that all array elements will be positive integers

// polyfill
Number.isInteger = Number.isInteger || function(value) {
    return typeof value === "number" &&
           isFinite(value) &&
           Math.floor(value) === value;
};

function isSquare(arr){
    if(arr.length === 0) {
        return undefined;
    }
  return arr.every(function(element,index,array) {
    return Number.isInteger(Math.sqrt(element));
  });
}

function isSquare(arr) {
    return arr.length ? arr.every(function(element,index,array) {
    return Number.isInteger(Math.sqrt(element));
  }) : undefined;
}

const isSquare = (arr) => arr.length ? arr.every(x => Number.isInteger(Math.sqrt(x))) : void 0

console.log(isSquare([1, 4, 9, 16]));
//returns true

console.log(isSquare([3, 4, 7, 9]));
//returns false

console.log(isSquare([]));
//returns undefined
