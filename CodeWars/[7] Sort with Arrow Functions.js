// [7] Sort with Arrow Functions.js
var people = [{
  age: 83,
  name: 'joel'
}, {
  age: 46,
  name: 'roger'
}, {
  age: 99,
  name: 'vinny'
}, {
  age: 26,
  name: 'don'
}, {
  age: 74,
  name: 'brendan'
}];


var OrderPeople = function(people) {
  return people.sort((a, b) => a.age - b.age); //complete this function
};


OrderPeople(people);

// return
[{
  age: 26,
  name: 'don'
}, {
  age: 46,
  name: 'roger'
}, {
  age: 74,
  name: 'brendan'
}, {
  age: 83,
  name: 'joel'
}, {
  age: 99,
  name: 'vinny'
}]
