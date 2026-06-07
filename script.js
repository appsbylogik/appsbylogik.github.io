const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const dropBtn = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown');

function closeDropdown() {
  if (dropdown) dropdown.classList.remove('open');
  if (dropBtn) dropBtn.setAttribute('aria-expanded', 'false');
}

function closeMobileMenu() {
  if (navLinks) navLinks.classList.remove('open');
  if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
}

if (menuToggle && navLinks) {
  menuToggle.setAttribute('aria-expanded', 'false');

  menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

if (dropBtn && dropdown) {
  dropBtn.setAttribute('aria-expanded', 'false');

  dropBtn.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    const isOpen = dropdown.classList.toggle('open');
    dropBtn.setAttribute('aria-expanded', String(isOpen));
  });
}

document.addEventListener('click', (event) => {
  if (dropdown && !dropdown.contains(event.target)) {
    closeDropdown();
  }

  if (
    navLinks &&
    menuToggle &&
    !navLinks.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    closeMobileMenu();
  }
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    closeMobileMenu();
    closeDropdown();
  });
});
