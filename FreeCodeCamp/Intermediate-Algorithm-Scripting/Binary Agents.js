// Binary Agents.js

function binaryAgent(str) {
  // split into indvidual chars
  var chars = str.split(' ');
  var decimal = [];
  var string = [];
  // convert from binary to decimal
  // sum of powers of 2 of the binary number's '1' digits

  chars.forEach(function(byte, index, array) {
    var digit = parseInt(byte, 2);
    decimal.push(digit);
  });

  // convert decimal values into characters
  decimal.forEach(function(int, index, array) {
    var char = String.fromCharCode(int);
    string.push(char);
  });
  return string.join('');
}

function binaryAgent(str) {
  biString = str.split(' ');
  uniString = [];

  /*using the radix (or base) parameter in parseInt, we can convert the binary
    number to a decimal number while simultaneously converting to a char*/

  for (i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }
  //we then simply join the string
  return uniString.join('');
}
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");
// should return "I love FreeCodeCamp!"
