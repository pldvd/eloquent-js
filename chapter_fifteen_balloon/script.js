const balloon = document.querySelector('p');
balloon.style.fontSize = '16px';

function inflate() {
  let currentSize = Number(balloon.style.fontSize.match(/\d+/g));
  balloon.style.fontSize = `${currentSize + 5}px`;
}

function deflate() {
  let currentSize = Number(balloon.style.fontSize.match(/\d+/g));
  balloon.style.fontSize = `${currentSize - 5}px`;
}

function explode() {
  balloon.innerText = "💥";
}

window.addEventListener('keydown', (e) => {
  console.log(e.key);
  if (e.key == `ArrowUp`) {
    inflate();
  } else if (e.key = 'ArrowDown') {
    deflate();
  }
})


