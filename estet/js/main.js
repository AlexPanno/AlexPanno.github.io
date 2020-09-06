let touchMenu = document.querySelector('.touch-menu');
let headerNav = document.querySelector('.header-nav');
let headerNavLinks = Array.from(document.querySelectorAll('.header-nav .nav-link'));
let darkBack = document.querySelector('.dark-background');

touchMenu.addEventListener('click', () => {
  headerNav.classList.toggle('active');

  darkBack.classList.toggle('active');
})
