// Your code here
let dodger = null;

document.addEventListener('DOMContentLoaded', () => {
    dodger = document.getElementById('dodger');
});

function moveDodgerLeft() {
  if (!dodger) {
    dodger = document.getElementById('dodger');
    if (!dodger) return;
  }
  let currentLeft = parseInt(dodger.style.left, 10);
  let newLeft = currentLeft - 1;
  if (newLeft >= 0) {
    dodger.style.left = newLeft + 'px';
  } else {
    dodger.style.left = '0px';
  }
}

function moveDodgerRight() {
  if (!dodger) {
    dodger = document.getElementById('dodger');
    if (!dodger) return;
  }
  let currentLeft = parseInt(dodger.style.left, 10);
  let newLeft = currentLeft + 1;
  if (newLeft <= 360) {
    dodger.style.left = newLeft + 'px';
  } else {
    dodger.style.left = '360px';
  }
}