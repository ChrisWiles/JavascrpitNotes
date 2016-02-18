// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the original arrays.
function diff(arr1, arr2) {
  var bothArr = arr1.concat(arr2); //[ 1, 2, 3, 5, 1, 2, 3, 4, 5 ]
  var match = [];
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        //console.log(arr1[i],arr2[j])
        match.push(arr1[i]);
      }
    }
  }
  return bothArr.filter(function(e, i) {
    return match.indexOf(e) == -1;
  });
}

function diff(arr1, arr2) {
  var temp = [];
  arr1.map(function(e, i) {
    // if array 2 doesnt contain items in array 1
    if (arr2.indexOf(e) === -1) {
      temp.push(e);
    }
  });
  arr2.map(function(e, i) {
    // if array 1 doesnt contain items in array 2
    if (arr1.indexOf(e) === -1) {
      temp.push(e);
    }
  });
  return temp;
}

function diff(arr1, arr2) {
  var temp = [];
  temp = arr1.filter(function(e, i) {
    // if array 2 doesnt contain item in array 1
    // add item to temp var
    return (arr2.indexOf(e) === -1);
  });
  temp = arr2.filter(function(e, i) {
    return (arr1.indexOf(e) === -1);
  });
  return temp;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]); //4
