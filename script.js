'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal');

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

const showModalButtons = document.querySelectorAll('.show-modal');
for (let i = 0; i < showModalButtons.length; i++) {
  showModalButtons[i].addEventListener('click', openModal);
}

overlay.addEventListener('click', closeModal);
closeModalButton.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
