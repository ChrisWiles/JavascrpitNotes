// DNA Pairing.js

// You will get a DNA strand sequence and you need to get the pair and return it as
// a 2D array of the base pairs. Keep in mind that the provided strand should be first always.

// Return the provided character as the first element in each array.

function pair(str) {
  // TA,CG
  // split string into an array
  str = str.split('');
  var arr = [];
  // itterate through array
  for (var i = 0; i < str.length; i++) {
    // TA, AT
    if (str[i] == 'T') {
      arr.push([str[i], 'A']);
    } else if (str[i] == 'A') {
      arr.push([str[i], 'T']);
    } // CG,GC
    else if (str[i] == 'C') {
      arr.push([str[i], 'G']);
    } else if (str[i] == 'G') {
      arr.push([str[i], 'C']);
    }
  }
  return arr;
}

function pair(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };

  function pair(str) {
    //define a map object with all pair possibilities
    var map = {
      T: 'A',
      A: 'T',
      G: 'C',
      C: 'G'
    };
    //split str into a a char Array
    strArr = str.split('');
    //replace each Array item with a 2d Array using map
    for (var i = 0; i < strArr.length; i++) {
      strArr[i] = [strArr[i], map[strArr[i]]];
    }
    return strArr;
  }
  // Loops through the input and pair.
  console.log(char);
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}
console.log(pair("ATCGA"));
// should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
console.log(pair("TTGAG"));
// should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
console.log(pair("CTCTA"));
// should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
