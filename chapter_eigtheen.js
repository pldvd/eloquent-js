//HTTP and forms

//content negotiation

//fetch text/plain
fetch('https://eloquentjavascript.net/author', {headers: {
  'accept': 'text/plain'
}})
.then(response => response.text())
.then(text => console.log(text));

