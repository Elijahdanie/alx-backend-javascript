const fs = require('fs');

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
        console.log(`Number of students: ${number}`);
        Object.keys(fields).forEach((x) => {
          const strVal = `Number of students in ${x}: ${fields[x]}. List: ${students[x].join(', ')}`;
          console.log(strVal);
        });
        resolve();
      }
    });
  });
}

module.exports = countStudents;
