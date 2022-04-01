var books = [{
  isbn: '978-0-7352-1120-9',
  title: 'Into the Water',
  author: 'Paula Hawkins'
},
{
  isbn: '978-0-7352-1120-9',
  title: 'Unstoppable: My Life So Far',
  author: 'Maria Sharapova'
},
{
  isbn: '978-0-316-36213-9',
  title: 'Fly Me',
  author: 'Daniel Riley'
}];

console.log('Array of books:', books, 'typeof:', typeof books);

var jsonBooks = JSON.stringify(books);
console.log('JSON books:', jsonBooks, '\ntypeof JSON books:', typeof jsonBooks);

var studentString = '{ "Number id": "12345678","name": "Ada Lovelace"}';
console.log('studentString:', studentString, 'typeof studentString:', typeof studentString);

var parsedStudent = JSON.parse(studentString);
console.log('parsed studentString:', parsedStudent, '\ntypeof parsedStudent:', typeof parsedStudent);
