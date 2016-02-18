// Missing letters.js
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.


function fearNotLetter(str) {
  var a = 'a'.charCodeAt(); // 97
  var z = 'z'.charCodeAt(); // 122

  // vaule between char should be -1, a-b = -1, 97-98 = -1
  for (var i = 0; i < str.length - 1; i++) {
    if (str[i + 1].charCodeAt() - str[i].charCodeAt() != 1) {
      return String.fromCharCode(str[i].charCodeAt() + 1);
    }
  }
}

function fearNotLetter(str) {

  for (var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first charcter + no of iteration
    hence character has been escaped*/
    if (code !== str.charCodeAt(0) + i) {

      /* if current character has escaped one character find previous char and return*/
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}
console.log(fearNotLetter("abce"));
// should return "d".
console.log(fearNotLetter("abcdefghjklmno"));
// should return "i".
console.log(fearNotLetter("bcd"));
// should return undefined.
console.log(fearNotLetter("yz"));
// should return undefined.
