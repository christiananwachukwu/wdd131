// Hamburger menu toggle
const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('show');
  menuButton.textContent = navigation.classList.contains('show') ? 'X' : '☰';
});

// Dynamic footer content
const yearSpan = document.getElementById('year');
const lastModified = document.getElementById('lastModified');

yearSpan.textContent = new Date().getFullYear();
lastModified.textContent =`Last Modified: ${document.lastModified}`;