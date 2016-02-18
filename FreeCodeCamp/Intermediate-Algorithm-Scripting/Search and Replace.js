// Search and Replace.js

// You will create a program that takes a sentence, then search for a word
// in it and replaces it for a new one while preserving the uppercase if there is one.

// The replace() method returns a new string with some or all matches of a
// pattern replaced by a replacement. The pattern can be a string or a RegExp,
// and the replacement can be a string or a function to be called for each match.

function myReplace(str, before, after) {
  // Preserve the case && Strings are immutable
  if (before.toLowerCase() != before) {
    after = after.slice(0, 1).toUpperCase() + after.slice(1, after.length);
  }
  return str.replace(before, after);
}

function myReplace(str, before, after) {
  //Create a regular expression object
  var re = new RegExp(before, "gi");
  //Check whether the first letter is uppercase or not
  if (/[A-Z]/.test(before[0])) {
    //Change the word to be capitalized
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  //Replace the original word with new one
  var newStr = str.replace(re, after);

  return newStr;

}

var test = myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
console.log(test);
