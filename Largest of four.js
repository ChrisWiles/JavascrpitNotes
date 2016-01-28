  function largestOfFour_forEach(arr) {
    var rArr = [];

    arr.forEach(function(arr) {
      var largest = 0;
      arr.forEach(function(num) {
        if (num > largest) {
          largest = num;
        }
      });
      rArr.push(largest);
    });
    return rArr;
  }

  function largestOfFour_forLoop(arr) {
    var rArr = [];

    for (var i = 0; i < arr.length; i++) {
      var largest = 0;
      for (var j = 0; j < arr[i].length; j++) {
        if (arr[i][j] > largest) {
          largest = arr[i][j];
        }
      }
      rArr.push(largest);
    }
    return rArr;
  }

  var a = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

  console.log(largestOfFour_forLoop(a));
  console.log(largestOfFour_forEach(a));



// This example is explained in detail below (just after this code box).​

function celebrityIDCreator(theCelebrities) {
  var i;
  var uniqueID = 100;
  for (i = 0; i < theCelebrities.length; i++) {
    theCelebrities[i].id = function() {
      return uniqueID + i;
    }
  }

  return theCelebrities;
}

var actionCelebs = [{
  name: "Stallone",
  id: 0
}, {
  name: "Cruise",
  id: 0
}, {
  name: "Willis",
  id: 0
}];
var createIdForActionCelebs = celebrityIDCreator(actionCelebs);
var stalloneID = createIdForActionCelebs[0];
console.log(stalloneID.id()); // 103