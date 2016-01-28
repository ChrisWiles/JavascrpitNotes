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

diff([1, 2, 3, 5, 9], [1, 2, 3, 4, 5]); //4, 9
