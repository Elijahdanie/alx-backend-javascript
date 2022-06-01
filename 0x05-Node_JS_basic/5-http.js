const http = require('http');
const countStudents = require('./3-read_file_async');

const dbName = process.argv[2];

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  switch (req.url) {
    case '/':
      res.write('Hello Holberton School!');
      break;
    case '/students':
      // eslint-disable-next-line no-case-declarations
      const result = await countStudents(dbName);
      res.write('This is the list of our students\n');
      res.write(result.join('\n'));
      break;
    default:
      res.statusCode = 404;
      break;
  }

  res.end();
});
app.listen(1245, 'localhost', () => {});

module.exports = app;
