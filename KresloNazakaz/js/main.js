let touchHeaderMenu = document.querySelector('.header .site-nav');
let headerMenuButton = document.querySelector('.touch-menu');
let userMenu = document.querySelector('.user');

headerMenuButton.onclick = function () {
  touchHeaderMenu.classList.toggle('active-touch-menu');
  userMenu.classList.toggle('active-touch-menu');
}
