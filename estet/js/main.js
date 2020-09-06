let touchMenu = document.querySelector('.touch-menu');
let headerNav = document.querySelector('.header-nav');
let darkBack = document.querySelector('.dark-background');
let headerNavLinks = Array.from(document.querySelectorAll('.header-nav .nav-link'));

touchMenu.addEventListener('click', () => {
  headerNav.classList.toggle('active');
  darkBack.classList.toggle('active');
});

let homeCatalogsBreakpoints = {
  1201: {
    slidesPerView: 4,
    spaceBetween: 45,
  },
  1025: {
    slidesPerView: 4,
    spaceBetween: 35,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 15,
  },
  601: {
    slidesPerView: 3,
    spaceBetween: 45,
  },
  481: {
    slidesPerView: 2,
    spaceBetween: 45,
  },
  361: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  0: {
    slidesPerView: 1,
  }
}

let bannerSlider = new Swiper('.banner-slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.banner-slider-next',
    prevEl: '.banner-slider-prev',
  }
});

let newProductsSlider = new Swiper('.new-products .home-catalog-slider', {
  navigation: {
    nextEl: '.new-products .slider-nav-next',
    prevEl: '.new-products .slider-nav-prev',
  },
  breakpoints: homeCatalogsBreakpoints,
});

let saleSlider = new Swiper('.sale .home-catalog-slider', {
  navigation: {
    nextEl: '.sale .slider-nav-next',
    prevEl: '.sale .slider-nav-prev',
  },
  breakpoints: homeCatalogsBreakpoints,
});

let brandsSlider = new Swiper('.brands-slider', {
  navigation: {
    nextEl: '.brands .slider-nav-next',
    prevEl: '.brands .slider-nav-prev',
  },
  breakpoints: {
    1201: {
      slidesPerView: 4,
      spaceBetween: 70,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    481: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    0: {
      slidesPerView: 1,
    }
  }
})
