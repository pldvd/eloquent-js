//node.js

// search tool

const fs = require('fs');

const regexp = new RegExp(process.argv[2]);
const filesToRead = process.argv.slice(3);

filesToRead.map(file => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.log(err.message);
      return null;
    }
    regexp.test(data) ? console.log(file) : console.log('not found');
  })
})

