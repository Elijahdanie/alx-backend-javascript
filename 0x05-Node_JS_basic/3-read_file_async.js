const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, file) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const parsed = file.toString('utf-8').split('\n');
        console.log(`Number of students: ${parsed.length - 1}`);
        const fields = {};
        const students = {};
        parsed.forEach((x) => {
          const data = x.split(',');
          const key = data[3];
          if (key !== undefined) {
            if (key !== 'field') {
              fields[key] = fields[key] !== undefined ? fields[key] + 1 : 1;
              if (students[key] !== undefined) {
                students[key] += (`${data[0]}, `);
              } else {
                students[key] = `${data[0]}, `;
              }
            }
          }
        });
        const final = [];
        Object.keys(fields).forEach((x) => {
          const strVal = `Number of students in ${x}: ${fields[x]}. List: ${students[x].slice(0, -2)}`;
          final.push(strVal);
          console.log(strVal);
        });
        resolve(final);
      }
    });
  });
}

module.exports = countStudents;
