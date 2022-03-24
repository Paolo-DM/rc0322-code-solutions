/* exported getStudentNames */
function getStudentNames(students) {
  var names = [];
  for (var student of students) {
    names.push(student.name);
  }
  return names;
}
