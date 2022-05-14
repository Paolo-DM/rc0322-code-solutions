const pg = require('pg');
const express = require('express');
const app = express();
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
    from "grades";
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    }, err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const grade = req.body;
  grade.score = Number(grade.score);

  if (!grade.score) {
    return res.status(400).json({ error: 'Score is a required field' });
  } else if (!grade.name) {
    return res.status(400).json({ error: 'Name is a required field' });
  } else if (!grade.course) {
    return res.status(400).json({ error: 'Course is a required field' });
  } else if (!Number.isInteger(grade.score) || grade.score <= 0 || grade.score > 100) {
    return res.status(400).json({ error: 'Score must be a positive integer between 0-100' });
  } else {
    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *
      `;
    const params = [req.body.name, req.body.course, req.body.score];

    db.query(sql, params)
      .then(result => {
        const newGrade = result.rows[0];
        res.status(201).json(newGrade);
      }, err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const grade = req.body;
  grade.score = Number(grade.score);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
  } else if (!grade.score) {
    return res.status(400).json({ error: 'Score is a required field' });
  } else if (!grade.name) {
    return res.status(400).json({ error: 'Name is a required field' });
  } else if (!grade.course) {
    return res.status(400).json({ error: 'Course is a required field' });
  } else if (!Number.isInteger(grade.score) || grade.score <= 0 || grade.score > 100) {
    return res.status(400).json({ error: 'Score must be a positive integer between 0-100' });
  } else {
    const sql = `
      update "grades"
        set "name" = $2,
            "course" = $3,
            "score" = $4
        where "gradeId" = $1
        returning *;
    `;
    const params = [gradeId, req.body.name, req.body.course, req.body.score];

    db.query(sql, params)
      .then(result => {
        const updatedGrade = result.rows[0];
        if (!updatedGrade) {
          return res.status(404).json({ error: `Cannot find grade with gradeId ${gradeId}` });
        } else {
          res.json(updatedGrade);
        }
      }, err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
  }

  const sql = `
    delete from "grades"
      where "gradeId" = $1
    returning * ;
  `;
  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const deletedGrade = result.rows[0];
      if (!deletedGrade) {
        return res.status(404).json({ error: `Cannot find grade with gradeId ${gradeId}` });
      } else {
        res.sendStatus(204);
      }
    }, err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
