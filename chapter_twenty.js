//node.js

// search tool

const fsPromises = require('fs').promises;

const regexp = new RegExp(process.argv[2]);
const filesToRead = process.argv.slice(3);

filesToRead.map(async file => {
  try {
    const fileContent = await fsPromises.readFile(file, 'utf8');
    regexp.test(fileContent) && console.log(file);
  }
  catch (e) {
    console.log(e.message);
  }
})
