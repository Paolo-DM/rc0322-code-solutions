function updateData(fs, data, res, succCode) {
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    } else {
      res.status(succCode).json(data.notes[data.nextId]);
    }
  });
}

module.exports = updateData;
