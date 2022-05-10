const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const grade = {};
  grade.id = nextId;
  grade.name = req.body.name;
  grade.course = req.body.course;
  grade.score = req.body.score;
  grades[nextId] = grade;
  nextId++;
  res.status(201).json(grade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
