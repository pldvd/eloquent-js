//node.js

// search tool

const fsPromises = require('fs').promises;

const regexp = new RegExp(process.argv[2]);
const filesToRead = process.argv.slice(3);

async function searchFileContent(file) {
  try {
    const fileIsDirectory = await fsPromises.stat(file);
    if (fileIsDirectory.isDirectory()) {
      const dirContent = await fsPromises.readdir(file);
      dirContent.forEach(dirFile => searchFileContent(dirFile));
    } else {
      const fileContent = await fsPromises.readFile(file, 'utf8');
      regexp.test(fileContent) && console.log(file);
    };
  }
  catch (e) {
    console.log(e.message);
  }
}

filesToRead.forEach(file => searchFileContent(file));