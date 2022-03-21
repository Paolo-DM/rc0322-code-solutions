var student = {
  firstName: 'Paolo',
  lastName: 'Di Martino',
  age: 29
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.liveInIrvine = false;
student.previousOccupation = 'news vendor';
console.log('value of student.livesInIrvine:', student.liveInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Ferrari',
  model: 'F1-75',
  year: 2022
};

vehicle['color'] = 'Red';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Pluto',
  type: 'Dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
