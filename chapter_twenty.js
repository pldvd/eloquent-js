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

//filesToRead.forEach(file => searchFileContent(file));

//directory creation

const http = require('http');
const methods = Object.create(null);

http.createServer((request, response) => {
  let handler = methods[request.method] || notAllowed;
  handler(request)
    .catch(error => {
      console.log(error.message);
    })
    .then(({ body, status = 200, type = "text/plain" }) => {
      response.writeHead(status, { "Content-Type": type });
      if (body && body.pipe) body.pipe(response);
      response.end(body);
    });
}).listen(8000, () => console.log('app listening on port 8000'));

async function notAllowed(request) {
  return {
    status: 405,
    body: `Method ${request.method} not allowed.`
  }
}

methods.MKCOL = async function (request) {
  const requestUrl = new URL(request.url, 'http://localhost:8000');
  const name = requestUrl.searchParams.get('name');
  let stats;
  try {
    stats = await fsPromises.stat(name)
  } catch (err) {
    if (err.code != 'ENOENT') throw err;
    await fsPromises.mkdir(name);
    return { status: 204 }
  }
  if (stats.isDirectory()) return {
    status: 204
  };
  else return {
    status: 400,
    body: 'file not a directory'
  };
}



