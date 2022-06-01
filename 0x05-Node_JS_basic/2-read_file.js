const fs = require('fs');

function countStudents(path) {
  let file = '';
  try {
    file = fs.readFileSync(path);
  } catch (err) {
    // eslint-disable-next-line no-throw-literal
    throw ('Cannot load the database');
  }

  const parsed = file.toString('utf-8').split('\n');
  console.log(`Number of students: ${parsed.length - 1}`);
  const fields = {};
  const students = {};
  parsed.forEach((x) => {
    const data = x.split(',');
    const key = data[3];
    if (key !== 'field') {
      fields[key] = fields[key] !== undefined ? fields[key] + 1 : 1;
      if (students[key] !== undefined) {
        students[key] += (`${data[0]}, `);
      } else {
        students[key] = `${data[0]}, `;
      }
    }
  });
  Object.keys(fields).forEach((x) => {
    console.log(`Number of students in ${x}: ${fields[x]}. List: ${students[x].slice(0, -2)}`);
  });
}

module.exports = countStudents;
