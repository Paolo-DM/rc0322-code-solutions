var colors = ['red', 'white', 'blue'];

for (let i = 0; i < colors.length; i++) {
  console.log(`value of colors[${i}]: ${colors[i]}`);
}

console.log('America is ' + colors[0] + ', ' + colors[1] + ' and ' + colors[2] + '.');

colors[2] = 'green';
console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ' and ' + colors[2] + '.');
console.log('value of colors:', colors);

var students = ['Giovanni', 'Vincenzo', 'Maria', 'Giuseppe'];
var numberOfStudents = students.length;
console.log(`There are ${numberOfStudents} students in the class.`);

var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log(`The last student in the array is ${lastStudent}.`);
console.log('value of students:', students);
