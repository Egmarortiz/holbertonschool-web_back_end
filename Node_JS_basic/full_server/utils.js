const fs = require('fs');
const path = require('path');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    const abs = path.resolve(process.cwd(), filePath || '');
    fs.readFile(abs, 'utf8', (err, content) => {
      if (err) { reject(err); return; }

      const lines = String(content)
        .replace(/^\uFEFF/, '')
        .split(/\r?\n/)
        .filter((l) => l.trim() !== '');

      if (lines.length <= 1) { resolve({}); return; }

      const headers = lines.shift().split(',').map((h) => h.trim());
      const firstIdx = headers.indexOf('firstname');
      const fieldIdx = headers.indexOf('field');
      const maxIdx = Math.max(firstIdx, fieldIdx);

      const result = {};
      for (let i = 0; i < lines.length; i += 1) {
        const cells = lines[i].split(',');
        if (cells.length > maxIdx) {
          const first = (cells[firstIdx] || '').trim();
          const field = (cells[fieldIdx] || '').trim();
          if (first && field) {
            if (!Object.prototype.hasOwnProperty.call(result, field)) result[field] = [];
            result[field].push(first);
          }
        }
      }
      resolve(result);
    });
  });
}

module.exports = readDatabase;
