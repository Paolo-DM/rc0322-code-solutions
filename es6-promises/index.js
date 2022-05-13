const takeAChance = require('./take-a-chance');
const promise = takeAChance('Paolo');

promise.then(value => {
  console.log(value);
});

promise.catch(error => {
  console.error(error.message);
});
