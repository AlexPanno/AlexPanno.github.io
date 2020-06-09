let touchMenu = document.querySelector('.touch-menu');
let headerNav = document.querySelector('.header-nav');
let darkBackground = document.querySelector('.dark-background');

touchMenu.onclick = function () {
  headerNav.classList.toggle('active-header-nav');
  darkBackground.classList.toggle('active-dark-background');
}

darkBackground.onclick = function () {
  headerNav.classList.toggle('active-header-nav');
  darkBackground.classList.toggle('active-dark-background');
}

window.onscroll = function () {
  headerNav.classList.remove('active-header-nav');
  darkBackground.classList.remove('active-dark-background');
}
