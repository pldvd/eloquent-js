function createTrailingBits(e) {

  for (let i = 0; i < 5; i++) {
    let trailingBit = document.createElement('div');

    trailingBit.className = 'trail';
    trailingBit.style.left = `${e.clientX+ (i * 10)}px`;
    trailingBit.style.top = `${e.clientY + (i * 10)}px`
    document.body.appendChild(trailingBit);
  }
}

function moveTrail(e) {
  const trails = document.querySelectorAll('.trail');
  trails.forEach((trail, i) => {
    trail.style.top = `${e.clientY + (i * 10)}px`;
    trail.style.left = `${e.clientX + (i * 10)}px`;
  });
}

window.addEventListener('click', createTrailingBits);
window.addEventListener('mousemove', moveTrail);