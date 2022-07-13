const http = require('http');
const fs = require('fs');

const dbName = process.argv[2];

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, file) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const parsed = file.toString('utf-8').split('\n');
        const fields = {};
        const students = {};
        parsed.forEach((x) => {
          const getsplits = x.replace('\r', '').split(',');
          if (getsplits.length === 4 && getsplits[0] !== 'firstname') {
            if (students[getsplits[3]]) {
              students[getsplits[3]].push(getsplits[0]);
            } else {
              students[getsplits[3]] = [getsplits[0]];
            }
            if (fields[getsplits[3]]) {
              fields[getsplits[3]] += 1;
            } else {
              fields[getsplits[3]] = 1;
            }
          }
        });
        let number = 0;
        Object.keys(fields).forEach((x) => {
          number += parseFloat(fields[x]);
        });
        const trackend = 0;
        let tmp = `Number of students: ${number}\n`;
        const len = Object.keys(fields).length;
        Object.keys(fields).forEach((x) => {
          if (trackend !== len) {
            tmp += `Number of students in ${x}: ${fields[x]}. List: ${students[x].join(', ')}\n`;
          } else {
            tmp += `Number of students in ${x}: ${fields[x]}. List: ${students[x].join(', ')}`;
          }
        });
        resolve(tmp);
      }
    });
  });
}

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
      res.write(result);
      break;
    default:
      res.statusCode = 404;
      break;
  }

  res.end();
});

app.listen(1245, 'localhost', () => {});

module.exports = app;
