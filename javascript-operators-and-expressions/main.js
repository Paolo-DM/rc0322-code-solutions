var width = 10;
var height = 5;
var area = width * height;
console.log('value of area:', area);
console.log('typeof  area:', typeof area);

var bill = 12;
var payment = 20;
var change = payment - bill;
console.log('value of change:', change);
console.log('typeof  change:', typeof change);

var quizzes = 10;
var midterm = 4;
var final = 7;
var grade = (quizzes + midterm + final) / 3;
console.log('value of grade:', grade);
console.log('typeof  grade:', typeof grade);

var firstName = 'Paolo';
var lastName = 'Di Martino';
var fullName = `${firstName} ${lastName}`;
console.log('value of fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

var pH = 6;
var isAcidic = pH < 7;
console.log('value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

var headCount = 25;
var isSparta = headCount === 300;
console.log('value of isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

var motto = fullName;
motto = motto + ' is the GOAT';
console.log('value of motto:', motto);
console.log('typeof motto:', typeof motto);
