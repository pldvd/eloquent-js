'use strict'

const dots = [];
let mouseX, mouseY;
let currentDot = 0;

for (let i = 0; i < 10; i++) {
  let node = document.createElement('div');
  node.className = 'trail';
  document.body.appendChild(node);
  dots.push(node);
}

function moveTrail(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

function moveDots() {
  let dot = dots[currentDot];
  dot.style.top = `${mouseY - 5}px`;
  dot.style.left = `${mouseX - 5}px`;
  currentDot = (currentDot + 1) % dots.length;
  requestAnimationFrame(moveDots);
}

window.addEventListener('mousemove', moveTrail);
requestAnimationFrame(moveDots);