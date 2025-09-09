const fs = require('node:fs');

function countStudents(path) {
  if (typeof path !== 'string' || path.length === 0) {
    throw new Error('Cannot load the database');
  }

  let content;
  try {
    content = fs.readFileSync(path, 'utf8');
  } catch {
    throw new Error('Cannot load the database');
  }

  // Strip BOM, split lines, drop empties (CSV may have trailing blank lines)
  const lines = content.replace(/^\uFEFF/, '').split(/\r?\n/).filter(l => l.trim() !== '');
  if (lines.length <= 1) {
    console.log('Number of students: 0');
    return;
  }

  // Header: firstname,lastname,age,field
  const headers = lines.shift().split(',').map(h => h.trim());
  const firstIdx = headers.indexOf('firstname');
  const fieldIdx = headers.indexOf('field');

  const groups = new Map(); // preserves first-seen order of fields

  for (const line of lines) {
    const cells = line.split(',');
    const first = (cells[firstIdx] || '').trim();
    const field = (cells[fieldIdx] || '').trim();
    if (!first || !field) continue; // skip malformed/empty
    if (!groups.has(field)) groups.set(field, []);
    groups.get(field).push(first);
  }

  const total = [...groups.values()].reduce((s, arr) => s + arr.length, 0);
  console.log(`Number of students: ${total}`);
  for (const [field, names] of groups) {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
}

module.exports = countStudents;

