function create(data) {
  data.notes[data.nextId] = process.argv[3];
  data.nextId++;
}

module.exports = create;
