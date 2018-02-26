var students = [ 'Ditte', 'Nicoline', 'René' ];

var findStudent = prompt('Name');

if (students.includes(findStudent)) {
  alert('Index of ' + findStudent + ' is ' + students.indexOf(findStudent));
}
else {
  alert('Student does not exist in array')
}

var findStudenByIndex = 1;

if (typeof(students[findStudenByIndex]) === 'string') {

}
else {

}
