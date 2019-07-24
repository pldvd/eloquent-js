//HTTP and forms

//content negotiation

//fetch text/plain
fetch('https://eloquentjavascript.net/author', {headers: {
  'accept': 'text/plain'
}})
.then(response => response.text())
.then(text => console.log(text));

//fetch JSON

fetch('https://eloquentjavascript.net/author', {headers: {
  'accept': 'application/json'
}})
  .then(response => response.json())
  .then(json => console.log(json));