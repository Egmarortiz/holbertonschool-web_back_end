function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        // Spec: reject with the error itself
        reject(err);
        return;
      }

      // Normalize text and drop blank lines (trailing empties aren’t valid students)
      const lines = String(content)
        .replace(/^\uFEFF/, '')       // strip BOM if present
        .split(/\r?\n/)
        .filter((l) => l.trim() !== '');

      // No data rows => empty result
      if (lines.length <= 1) {
        resolve({});
        return;
      }

      // Anchor by header names (robust if column order changes)
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
            if (!Object.prototype.hasOwnProperty.call(result, field)) {
              result[field] = [];
            }
            result[field].push(first);
          }
        }
      }

      resolve(result);
    });
  });
}

module.exports = readDatabase;
