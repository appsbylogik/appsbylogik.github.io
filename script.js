const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const dropBtn = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('open');
  });
}

if (dropBtn && dropdown) {
  dropBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });
}

document.addEventListener('click', (e) => {
  if (dropdown && !dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }

  if (navLinks && menuToggle && !navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    navLinks.classList.remove('open');
  }
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    if (navLinks) navLinks.classList.remove('open');
    if (dropdown) dropdown.classList.remove('open');
  });
});
