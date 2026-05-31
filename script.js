const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const dropBtn = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown');
if (menuToggle) menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
if (dropBtn) dropBtn.addEventListener('click', (e) => { e.preventDefault(); dropdown.classList.toggle('open'); });
document.addEventListener('click', (e) => { if (dropdown && !dropdown.contains(e.target)) dropdown.classList.remove('open'); });
