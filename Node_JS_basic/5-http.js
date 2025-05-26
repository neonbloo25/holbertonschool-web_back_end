const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, content) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = content.split('\n').filter(line => line.trim() !== '');
      const students = lines.slice(1).map(line => line.split(','));
      const total = students.length;
      const fields = {};

      students.forEach(([first, , , field]) => {
        if (!fields[field]) fields[field] = [];
        fields[field].push(first);
      });

      let output = `Number of students: ${total}`;
      for (const [field, names] of Object.entries(fields)) {
        output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      }

      resolve(output);
    });
  });
}

const app = http.createServer((req, res) => {
  const args = process.argv.slice(2);
  const path = args[0];

  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(path)
      .then(data => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch(() => {
        res.end('This is the list of our students\nCannot load the database');
      });
  }
});

app.listen(1245);

module.exports = app;
