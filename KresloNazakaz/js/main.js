let touchMenu = document.querySelector('.touch-menu');
let headerNav = document.querySelector('.header-nav');
let darkBackground = document.querySelector('.dark-background');

function openHeaderNav() {
  headerNav.classList.toggle('active-header-nav');
  darkBackground.classList.toggle('active-dark-background');
}

touchMenu.onclick = openHeaderNav;
darkBackground.onclick = openHeaderNav;

window.onscroll = function () {
  headerNav.classList.remove('active-header-nav');
  darkBackground.classList.remove('active-dark-background');
}
