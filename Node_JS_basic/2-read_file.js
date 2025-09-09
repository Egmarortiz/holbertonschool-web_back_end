const fs = require('fs');

function countStudents(path) {
  if (typeof path !== 'string' || path.length === 0) {
    throw new Error('Cannot load the database');
  }

  let content;
  try {
    content = fs.readFileSync(path, 'utf8');
  } catch (err) {                     // <-- old Babel needs the (err)
    throw new Error('Cannot load the database');
  }

  // Normalize lines; drop empties (handles trailing blank lines)
  const lines = String(content)
    .replace(/^\uFEFF/, '')
    .split(/\r?\n/)
    .filter((l) => l.trim() !== '');

  if (lines.length <= 1) {
    console.log('Number of students: 0');
    return;
  }

  // Anchor by header names (robust if column order changes)
  const headers = lines.shift().split(',').map((h) => h.trim());
  const firstIdx = headers.indexOf('firstname');
  const fieldIdx = headers.indexOf('field');

  const groups = {}; // field -> [firstnames]
  let total = 0;

  for (const line of lines) {
    const cells = line.split(',');
    if (cells.length <= Math.max(firstIdx, fieldIdx)) continue;

    const first = (cells[firstIdx] || '').trim();
    const field = (cells[fieldIdx] || '').trim();
    if (!first || !field) continue;

    if (!groups[field]) groups[field] = [];
    groups[field].push(first);
    total += 1;
  }

  console.log(`Number of students: ${total}`);
  // Objects preserve insertion order for non-integer keys → deterministic output
  Object.keys(groups).forEach((field) => {
    const names = groups[field];
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  });
}

module.exports = countStudents;

