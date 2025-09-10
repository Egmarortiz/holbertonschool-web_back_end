const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    const dbPath = process.argv[2] || '';

    readDatabase(dbPath)
      .then((groups) => {
        const lines = ['This is the list of our students'];

        // Sort fields alphabetically (case-insensitive), keep names in original order
        const fields = Object.keys(groups)
          .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        for (let i = 0; i < fields.length; i += 1) {
          const field = fields[i];
          const names = groups[field] || [];
          lines.push(
            `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
          );
        }

        res.status(200).type('text').send(lines.join('\n'));
      })
      .catch(() => {
        res.status(500).type('text').send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    // Only CS or SWE allowed (case-sensitive as per spec)
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).type('text').send('Major parameter must be CS or SWE');
      return;
    }

    const dbPath = process.argv[2] || '';

    readDatabase(dbPath)
      .then((groups) => {
        const names = groups[major] || [];
        res.status(200).type('text').send(`List: ${names.join(', ')}`);
      })
      .catch(() => {
        res.status(500).type('text').send('Cannot load the database');
      });
  }
}

