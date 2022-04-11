/* exported student */
var student = {
  firstName: 'Paolo',
  lastName: 'Di Martino',
  subject: 'Javascript',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction() {
    return `Hello, my name is ${this.getFullName()} and I am studying ${this.subject}.`;
  }
};
