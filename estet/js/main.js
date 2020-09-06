let touchMenu = document.querySelector('.touch-menu');
let headerNav = document.querySelector('.header-nav');
let darkBack = document.querySelector('.dark-background');
let headerNavLinks = Array.from(document.querySelectorAll('.header-nav .nav-link'));

touchMenu.addEventListener('click', () => {
  headerNav.classList.toggle('active');
  darkBack.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  headerNav.classList.remove('active');
  darkBack.classList.remove('active');
});

let newProductsCategories = document.querySelectorAll('.new-products .home-catalog-category');
let newProductsSliders = document.querySelectorAll('.new-products .slider-wrapper');

let saleCategories = document.querySelectorAll('.sale .home-catalog-category');
let saleSliders = document.querySelectorAll('.sale .slider-wrapper');

newProductsCategories.forEach((item) => {
  item.addEventListener('click', () => {
    let current = item.dataset.slider;

    newProductsSliders.forEach((slider) => {
      slider.classList.remove('active');

      if (slider.classList.contains(current)) {
        slider.classList.add('active');
      }
    });

    newProductsCategories.forEach((other) => {
      other.classList.remove('active');
    });
    item.classList.add('active');
  })
});

saleCategories.forEach((item) => {
  item.addEventListener('click', () => {
    let current = item.dataset.slider;

    saleSliders.forEach((slider) => {
      slider.classList.remove('active');

      if (slider.classList.contains(current)) {
        slider.classList.add('active');
      }
    });

    saleCategories.forEach((other) => {
      other.classList.remove('active');
    });
    item.classList.add('active');
  })
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

let maleCollection = new Swiper('.new-products .slider-wrapper.male .home-catalog-slider', {
  navigation: {
    nextEl: '.slider-wrapper.male .slider-nav-next',
    prevEl: '.slider-wrapper.male .slider-nav-prev',
  },
  breakpoints: homeCatalogsBreakpoints,
});

let womanCollection = new Swiper('.new-products .slider-wrapper.woman .home-catalog-slider', {
  navigation: {
    nextEl: '.new-products .slider-wrapper.woman .slider-nav-next',
    prevEl: '.new-products .slider-wrapper.woman .slider-nav-prev',
  },
  breakpoints: homeCatalogsBreakpoints,
});

let saleMale = new Swiper('.sale .slider-wrapper.male .home-catalog-slider', {
  navigation: {
    nextEl: '.sale .slider-wrapper.male .slider-nav-next',
    prevEl: '.sale .slider-wrapper.male .slider-nav-prev',
  },
  breakpoints: homeCatalogsBreakpoints,
});

let saleWoman = new Swiper('.sale .slider-wrapper.woman .home-catalog-slider', {
  navigation: {
    nextEl: '.sale .slider-wrapper.woman  .slider-nav-next',
    prevEl: '.sale .slider-wrapper.woman  .slider-nav-prev',
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
