'use strict';

const modal= document.querySelector('.modal');
const overlay= document.querySelector('.overlay');
const btnCloseModal= document.querySelector('.close-modal');
const btnsShowModal= document.querySelectorAll('.show-modal');

const closeModal= function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal= function(i){
  console.log(`Button with text ${btnsShowModal[i].textContent} clicked`);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for(let i=0; i<btnsShowModal.length; i++) btnsShowModal[i].addEventListener('click', function() {openModal(i)}); // function() {openModal(i)} does the same as () => openModal(i)

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
  if(e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});