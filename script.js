const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const dropdownButton = document.querySelector('.dropdown-button');

menuToggle?.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

dropdownButton?.addEventListener('click', () => {
  const expanded = dropdownButton.getAttribute('aria-expanded') === 'true';
  dropdownButton.setAttribute('aria-expanded', String(!expanded));
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});
