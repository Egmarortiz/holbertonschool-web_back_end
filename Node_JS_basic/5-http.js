const http = require('http');
const fs = require('fs');

const DB_PATH = process.argv[2] || '';

function readDatabase(path) {
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
        resolve({ total: 0, groups: {} });
        return;
      }

      const headers = lines.shift().split(',').map((h) => h.trim());
      const firstIdx = headers.indexOf('firstname');
      const fieldIdx = headers.indexOf('field');
      const maxIdx = Math.max(firstIdx, fieldIdx);

      const groups = {};
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

      resolve({ total, groups });
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    readDatabase(DB_PATH)
      .then(({ total, groups }) => {
        let body = 'This is the list of our students\n';
        body += `Number of students: ${total}`;
        const fields = Object.keys(groups); // insertion order preserved
        for (let i = 0; i < fields.length; i += 1) {
          const field = fields[i];
          const names = groups[field];
          body += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
        }
        res.end(body);
      })
      .catch((e) => {
        res.end(`This is the list of our students\n${e.message}`);
      });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
});

app.listen(1245);
module.exports = app;
