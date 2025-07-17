'use strict';

function openCloseModal() {
  document.querySelector('.modal').classList.toggle('hidden');
  document.querySelector('.overlay').classList.toggle('hidden');
}

const showModalButtons = document.querySelectorAll('.show-modal');
for (let i = 0; i < showModalButtons.length; i++) {
  showModalButtons[i].addEventListener('click', () => {
    openCloseModal();
  });
}

const closeModalButton = document.querySelector('.close-modal');
closeModalButton.addEventListener('click', () => {
  openCloseModal();
});

const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', () => {
  openCloseModal();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    openCloseModal();
  }
});
