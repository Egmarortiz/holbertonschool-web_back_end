const fs = require('fs');

// Asynchronous file read
function readFileAsync(filepath) {
fs.readFile('filepath', 'utf8', (err, data) => {
  if (err) throw err;
  const matrix = data.trim().split('\n').map(row => row.split','));
  const content = matrix.slice(1);

  if (content.length <= 1) {
    console.log("Number of students: 0");
  }
  else {
    let cs = []
    let swe = []
    for (const rows of content) {
      for (const value of rows) {
        if (value[3] === 'CS') {
          swe.push(value[0]);
        } else if (value[3] === 'SWE') {
          cs.push(value[0]);
        }
      }
    }
    console.log(`Number of students: ${content.length}`);
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length}. List ${swe.join{', ')}`);
  }
}
});
}

