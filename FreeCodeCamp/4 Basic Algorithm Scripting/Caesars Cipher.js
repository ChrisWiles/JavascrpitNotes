// Caesars Cipher

// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) { // LBH QVQ VG!

  var charCode = str.split('').map(function(element, index) {
    if (element.charCodeAt() < 65) {
      return element.charCodeAt();
    } else if (element.charCodeAt() + 13 < 91) {
      return element.charCodeAt() + 13;
    } else {
      return element.charCodeAt() + 19;
    }

  });

  var decoded = charCode.map(function(element, index) {
    return String.fromCharCode(element);
  });

  return decoded.join('').toUpperCase();
}
// skip 78/90-
console.log('A'.charCodeAt()); // 65
console.log('Z'.charCodeAt()); // 90
String.fromCharCode(65, 90); // AZ
String.fromCharCode(90 + 13); //A + 13 = N
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
// "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."

// String.charCodeAt()
// String.fromCharCode()

var charCodeList = function() {
  var arr = [];
  for (var i = 0; i < 255; i++) {
    arr.push(String.fromCharCode(i), i);
  }
  return arr;
};
//console.log(charCodeList());
