function ExampleConstructor() {}

console.log('ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var anExampleConstructor = new ExampleConstructor();
console.log('ExampleConstructor call in var:', anExampleConstructor);
var isIstanceOf = anExampleConstructor instanceof ExampleConstructor;
console.log('is instanceof?', isIstanceOf);
