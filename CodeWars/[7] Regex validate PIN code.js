// [7] Regex validate PIN code.js
// ATM machines allow 4 or 6 digit PIN codes and PIN codes
// cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// The search() method executes a search for a match between a regular expression and this String object.
// If successful, search() returns the index of the first match of the
// regular expression inside the string. Otherwise, it returns -1.
function validatePIN (pin) {
  // is length 4 or 6
  if(pin.length == 4 || pin.length == 6) {
      // Maches any char that is not a digit
      if(pin.search(/(\D)/g) == -1) {
          return true;
      }
  }
  return false;
}

// The test() method executes a search for a match between a
// regular expression and a specified string. Returns true or false.
function validatePIN(pin) {
    // test checks if pin is a string composed of 4 ({4}) or (|)
    // 6 ({6}) digits (\d) with nothing else between start (^) & end ($).
  return /^(\d{4}|\d{6})$/.test(pin);
}
