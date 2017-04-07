var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// from I modified the code from http://www.javascriptkit.com/javatutors/arraysort.shtml
// sort by value
var numericSort = function (a, b) {
  return b.age - a.age;
};

// sort by name
var mySort = function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return numericSort(a, b);
};

console.log(students.sort(mySort));