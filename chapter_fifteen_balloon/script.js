const balloon = document.querySelector('p');
balloon.style.fontSize = '16px';

function controlSize(e) {
  let size = Number(balloon.style.fontSize.match(/\d+/g));
  
  if (e.key == `ArrowUp`) {
    balloon.style.fontSize = `${size + 5}px`

    if (size > 340) {
      balloon.innerText = "💥";
      window.removeEventListener('keydown', controlSize);
    }
  } else if (e.key = 'ArrowDown') {
    balloon.style.fontSize = `${size - 5}px`;
  }
}

window.addEventListener('keydown', controlSize);
