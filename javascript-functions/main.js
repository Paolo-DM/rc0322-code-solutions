function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('function convertMinutesToSeconds(5):', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}
console.log("function greet('Beavis'):", greet('Beavis'));

function getArea(width, height) {
  return width * height;
}
console.log('function getArea(17, 42):', getArea(17, 42));

function getFirstName(person) {
  return `${person.firstName} ${person.lastName}`;
}
console.log("function getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }):", getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  return array[array.length - 1];
}
console.log("function getLastElement(['propane', 'and', 'propane', 'accessories']):", getLastElement(['propane', 'and', 'propane', 'accessories']));
