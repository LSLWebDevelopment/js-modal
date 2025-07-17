'use strict';

function openModal() {
  document.getElementsByClassName('modal')[0].style.display = 'block';
  document.getElementsByClassName('overlay')[0].style.display = 'block';
}

function closeModal() {
  document.getElementsByClassName('modal')[0].style.display = 'none';
  document.getElementsByClassName('overlay')[0].style.display = 'none';
}

const showModalButtons = document.getElementsByClassName('show-modal');
for (let i = 0; i < showModalButtons.length; i++) {
  showModalButtons[i].addEventListener('click', () => {
    console.log(`Button ${i + 1} clicked!`);
    openModal();
  });
}

const closeModalButton = document.querySelector('.close-modal');
closeModalButton.addEventListener('click', () => {
  closeModal();
});

const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', () => {
  closeModal();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
