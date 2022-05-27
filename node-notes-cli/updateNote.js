function updateNote(data, id, content) {
  if (data.notes[id]) {
    data.notes[id] = content;
  }
}

module.exports = updateNote;
