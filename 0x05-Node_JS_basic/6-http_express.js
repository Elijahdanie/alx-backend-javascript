const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(1245, 'localhost', () => {
  console.log('listening');
});

module.exports = app;
