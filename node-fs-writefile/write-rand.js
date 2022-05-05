const fs = require('fs');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

fs.writeFile('random.txt', getRandomInt(100000) + '\n', { flag: 'a+' }, err => { if (err) throw err; });
