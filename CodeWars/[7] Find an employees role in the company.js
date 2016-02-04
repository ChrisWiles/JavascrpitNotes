// You will be given an array of object literals holding the current employees of the
// company. You code must find the employee with the matching firstName and lastName and
// then return the role for that employee or if no employee is not found it should return
// "Does not work here!"

// The array is preloaded and can be referenced using the variable employees.

// There are no duplicate names in the array and the name passed in will be a single
// string with a space between the first and last name i.e. Jane Doe

var employees = [{
  firstName: 'Ollie',
  lastName: 'Hepburn',
  role: 'Boss'
}, {
  firstName: 'Morty',
  lastName: 'Smith',
  role: 'Truck Driver'
}, {
  firstName: 'Peter',
  lastName: 'Ross',
  role: 'Warehouse Manager'
}, {
  firstName: 'Cal',
  lastName: 'Neil',
  role: 'Sales Assistant'
}, {
  firstName: 'Jesse',
  lastName: 'Saunders',
  role: 'Admin'
}, {
  firstName: 'Anna',
  lastName: 'Jones',
  role: 'Sales Assistant'
}, {
  firstName: 'Carmel',
  lastName: 'Hamm',
  role: 'Admin'
}, {
  firstName: 'Tori',
  lastName: 'Sparks',
  role: 'Sales Manager'
}, {
  firstName: 'Peter',
  lastName: 'Jones',
  role: 'Warehouse Picker'
}, {
  firstName: 'Mort',
  lastName: 'Smith',
  role: 'Warehouse Picker'
}, {
  firstName: 'Anna',
  lastName: 'Bell',
  role: 'Admin'
}, {
  firstName: 'Jewel',
  lastName: 'Bell',
  role: 'Receptionist'
}, {
  firstName: 'Colin',
  lastName: 'Brown',
  role: 'Trainee'
}];

function findEmployeesRole(name) {
    // iterate through Employees array
    // create varables for first and last name
    // check names vs employees names
    // return false if every employee has been checked
    // dont put else statement in for loop

    var first = name.split(' ')[0];
    var last = name.split(' ')[1];

    for(var i = 0; i < employees.length; i++) {
        if(employees[i].firstName == first && employees[i].lastName == last ) {
            return employees[i].role;
        }
    }
    return "Does not work here!";

}
function findEmployeesRole(name) {
  for(var i = 0; i < employees.length; i++)
    if(name === employees[i].firstName + " " + employees[i].lastName) return employees[i].role;
  return "Does not work here!";
}
console.log(
    findEmployeesRole("Dipper Pines"),
    findEmployeesRole("Morty Smith"),
    findEmployeesRole("Anna Bell")
);
