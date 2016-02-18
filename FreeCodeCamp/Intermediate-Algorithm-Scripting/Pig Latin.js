// Pig Latin.js
function translate(str) {

  var firstVowelIndex = str.search(/[aeiou]/i);
  var firstChar = str.slice(0, 1);

  // If a word begins with a vowel
  if (firstChar == str[firstVowelIndex]) {
    str += "way";

    // else word begins with consonants
  } else {
    // remove all the consonants up to the first vowel
    var str0 = str.slice(firstVowelIndex);
    var str1 = str.slice(0, firstVowelIndex);
    str = str0 + str1 + "ay";
  }

  return str;
}

function translate(str) {
  //finding all the consonants in the beginning of the str.
  //by using && below I'm achiving a concept called Intersection of Regular Expressions
  //where your pattern finds the union of two or more RegEx rules.
  //In Java you can achive this with RegEx special character '&&'
  //but in Javascript you can use the following instead.
  //Credit goes to http://stackoverflow.com/q/6595477
  var consChars = str.match(/^[a-z]/) && str.match(/[^aeiou]*/).join('');

  //if no consonants found (i.e. str starts with vowels)
  //use replace to remove consonants and construct newStr else add 'way' in the end
  if (consChars !== '') {
    newStr = str.replace(consChars, '') + consChars + "ay";
  } else {
    newStr = str + "way";
  }
  return newStr;
}
