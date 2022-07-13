const express = require('express');
const fs = require('fs');

const app = express();

const dbName = process.argv[2];

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, file) => {
      try {
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
      } catch (err) {
        reject(err);
      }
    });
  });
}
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
