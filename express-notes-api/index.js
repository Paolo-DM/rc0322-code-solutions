const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notes = [];
  for (const key in data.notes) {
    notes.push(data.notes[key]);
  }
  res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0 || isNaN(id)) {
    return res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[id]) {
    return res.status(404).json({ error: `cannot find note with id ${id}` });
  }
  res.json(data.notes[id]);
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    return res.status(400).json({ error: 'content is a required field' });
  } else {
    const note = {
      id: data.nextId,
      content: req.body.content
    };
    data.notes[data.nextId] = note;
    data.nextId++;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(data.notes[data.nextId]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
