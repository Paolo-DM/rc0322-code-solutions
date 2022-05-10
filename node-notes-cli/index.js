const data = require('./data.json');
const read = require('./read');
const create = require('./create');
const fs = require('fs');
const updateData = require('./updateData');
const deleteNote = require('./delete');
const updateNote = require('./updateNote');

const userInput = process.argv[2];

switch (userInput) {
  case 'read':
    read(data);
    break;
  case 'create':
    create(data);
    updateData(fs, data);
    break;
  case 'delete':
    deleteNote(data, process.argv[3]);
    updateData(fs, data);
    break;
  case 'update':
    updateNote(data, process.argv[3], process.argv[4]);
    updateData(fs, data);
    break;
}
