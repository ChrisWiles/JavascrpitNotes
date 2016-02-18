// [6] WeIrD StRiNg CaSe.js
// returns the same string with all even indexed characters in each word upper cased,
// and all odd indexed characters in each word lower cased.
// Spaces dont count

function toWeirdCase(string) {
  return string.split(' ').map(function(word) {
    return word.split('').map(function(letter, index) {
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}
toWeirdCase('This is a test'); // 'ThIs Is A TeSt'

// split into words
