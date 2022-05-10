function deleteNote(data, id) {
  delete data.notes[id];
}

module.exports = deleteNote;
