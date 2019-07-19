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

function controlSize(e) {
  if (e.key == `ArrowUp`) {
    inflate();
  } else if (e.key = 'ArrowDown') {
    deflate();
  }}

window.addEventListener('keydown', controlSize);

window.addEventListener('keydown', () => {
  let currentSize = Number(balloon.style.fontSize.match(/\d+/g))
  if (currentSize > 240) {
    explode();
    window.removeEventListener('keydown', controlSize);
  }
})


