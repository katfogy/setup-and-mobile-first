const openHam = document.getElementById('openHam');
const closeHam = document.getElementById('closeHam');
const menu = document.querySelector('.menu-lists');
const menuLinks = document.querySelectorAll('.item');

openHam.addEventListener('click', () => {
  menu.classList.toggle('show');

  openHam.classList.add('hide');
  closeHam.classList.remove('hide');
});

closeHam.addEventListener('click', () => {
  menu.classList.toggle('show');

  openHam.classList.remove('hide');
  closeHam.classList.add('hide');
});

menuLinks.forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('show');
  openHam.classList.remove('hide');
}));