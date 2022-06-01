const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

const dbName = process.argv[2];

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    res.write('This is the list of our students');
    const result = await countStudents(dbName);
    res.status(200).end(result.join('\n'));
  } catch (error) {
    res.status(500).end(error);
  }
});

app.listen(1245, 'localhost', () => {
  console.log('listening');
});

module.exports = app;
