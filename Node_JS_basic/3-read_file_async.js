const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    if (typeof path !== 'string' || path.length === 0) {
      reject(new Error('Cannot load the database'));
      return;
    }

    fs.readFile(path, 'utf8', (err, content) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = String(content)
        .replace(/^\uFEFF/, '')
        .split(/\r?\n/)
        .filter((l) => l.trim() !== '');

      if (lines.length <= 1) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

      // cool header-driven indexing lol
      const headers = lines.shift().split(',').map((h) => h.trim());
      const firstIdx = headers.indexOf('firstname');
      const fieldIdx = headers.indexOf('field');
      const maxIdx = Math.max(firstIdx, fieldIdx);

      const groups = {}; // remember: field -> [firstnames]
      let total = 0;

      for (let i = 0; i < lines.length; i += 1) {
        const cells = lines[i].split(',');
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
      }

      console.log(`Number of students: ${total}`);
      Object.keys(groups).forEach((field) => {
        const names = groups[field];
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      });

      resolve();
    });
  });
}

module.exports = countStudents;
