const fs = require('fs');

function countStudents(path) {
  if (typeof path !== 'string' || path.length === 0) {
    throw new Error('Cannot load the database');
  }

  let content;
  try {
    content = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = String(content)
    .replace(/^\uFEFF/, '')
    .split(/\r?\n/)
    .filter((l) => l.trim() !== '');

  if (lines.length <= 1) {
    console.log('Number of students: 0');
    return;
  }

  const headers = lines.shift().split(',').map((h) => h.trim());
  const firstIdx = headers.indexOf('firstname');
  const fieldIdx = headers.indexOf('field');
  const maxIdx = Math.max(firstIdx, fieldIdx);

  const groups = {};
  let total = 0;

  lines.forEach((line) => {
    const cells = line.split(',');
    if (cells.length > maxIdx) {
      const first = (cells[firstIdx] || '').trim();
      const field = (cells[fieldIdx] || '').trim();
      if (first && field) {
        if (!Object.prototype.hasOwnProperty.call(groups, field)) {
          groups[field] = [];
        }
        groups[field].push(first);
        total += 1;
      }
    }
  });

  console.log(`Number of students: ${total}`);
  Object.keys(groups).forEach((field) => {
    const names = groups[field];
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  });
}

module.exports = countStudents;
