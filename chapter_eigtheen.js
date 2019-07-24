//HTTP and forms

//content negotiation

//fetch text/plain
fetch('https://eloquentjavascript.net/author', {
  headers: {
    'accept': 'text/plain'
  }
})
  .then(response => response.text())
  .then(text => console.log(text));

//fetch JSON

fetch('https://eloquentjavascript.net/author', {
  headers: {
    'accept': 'application/json'
  }
})
  .then(response => response.json())
  .then(json => console.log(json));

//fetch html

fetch('https://eloquentjavascript.net/author', {
  headers: {
    'accept': 'text/html'
  }
})
  .then(response => response.text())
  .then(text => console.log(text));

//javascript workbench 

const textArea = document.querySelector('textarea');
const myButton = document.querySelector('button');
const output = document.getElementById('output');

function runCode(inputString) {
  try {
    let result = new Function(inputString)();
    output.textContent = result;
    return result;
  } catch (error) {
    output.textContent = error.message;
  }
}
myButton.addEventListener('click', () => runCode(textArea.value));