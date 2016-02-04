// [7] Remove All The Marked Elements of a List.js

// We need a method in the Class List that may remove from a given list of integers, all the
// values contained in a second list. The method remove_() will accept two arguments, a list
// of an uncertain amount of integers, integer_list and a second list that contains integer
// values, too, values_list. The method will output a list with all the integers that are
// not in values_list

Array.prototype.remove_ = function(integer_list, values_list) {
  // Output a list with all the integers that are not in values_list
  var temp = [];
  for (var i = 0; i < integer_list.length; i++) {
    if (values_list.indexOf(integer_list[i]) === -1) {
      temp.push(integer_list[i]);
    }
  }
  return temp;
};
// Method 2
Array.prototype.remove_ = function(integer_list, values_list) {
  return integer_list.filter(function(element) {
    return values_list.indexOf(element) === -1;
  });
};

var l = [];
integer_list = [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8];
values_list = [1, 3, 4, 2];
l.remove_(integer_list, values_list); // [5, 6 ,7 ,8])
