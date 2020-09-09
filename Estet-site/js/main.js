let touchMenu = document.querySelector('.touch-menu');
let headerNav = document.querySelector('.header-nav');
let darkBack = document.querySelector('.dark-background');

touchMenu.addEventListener('click', () => {
  headerNav.classList.toggle('active');
  darkBack.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  headerNav.classList.remove('active');
  darkBack.classList.remove('active');
});
