// Are there doubles ?
// Your job is to build a function which determines whether or not there are double characters(in a row) in a string (including whitespace characters). For example aa, !! or . not case sensitive

// You want the function to return true if the string contains double characters and false if not.


function doubleCheck(string){
    var arr = string.toLowerCase().split('');
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == arr[i +1]) {
            return true;
        }
    }
    return false;
}
function doubleCheck(string){
    // The test() method executes a search for a match between a regular expression
    // and a specified string. Returns true or false.
    return /(.)\1/i.test(string);
}

const doubleCheck(str) => /(.)\1/i.test(str);

function doubleCheck(str) {
  return /(.)\1/.test(str.toLowerCase())
}

  console.log(doubleCheck("AabBcC"));
  //returns true

  console.log(doubleCheck("a b  c"));
  //returns true

  console.log(doubleCheck("a b c d e f g h i h k"));
  //returns false
