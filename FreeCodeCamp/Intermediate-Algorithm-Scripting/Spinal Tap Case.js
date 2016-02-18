// Spinal Tap Case.js

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  var string = '';
  if (str.indexOf('_') != -1 || str.indexOf(' ') != -1) {
    return str.replace(/[_ ]/g, '-').toLowerCase();
    // camelcase
  } else {
    for (var i = 0; i < str.length; i++) {

      // if char is already uppercase
      if (str[i].toUpperCase() == str[i]) {
        string += '-';
      }
      string += str[i];
    }
    return string.toLowerCase();
  }

}

function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}
console.log(spinalCase("This Is Spinal Tap"));
//should return "this-is-spinal-tap".
console.log(spinalCase("thisIsSpinalTap"));
//should return "this-is-spinal-tap".
console.log(spinalCase("The_Andy_Griffith_Show"));
//should return "the-andy-griffith-show".
console.log(spinalCase("Teletubbies say Eh-oh"));
//should return "teletubbies-say-eh-oh".
