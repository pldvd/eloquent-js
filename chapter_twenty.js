//node.js

// search tool

const fsPromises = require('fs').promises;
const path = require('path');
const regexp = new RegExp(process.argv[2]);
const filesToRead = process.argv.slice(3);

async function searchFileContent(file) {
  try {
    const fileStats = await fsPromises.stat(file);
    if (fileStats.isDirectory()) {
      const dirContent = await fsPromises.readdir(file);
      dirContent.forEach(dirFile => searchFileContent(path.resolve(file, dirFile)));
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