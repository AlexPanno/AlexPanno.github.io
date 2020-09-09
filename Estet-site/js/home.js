let rowCatalogsBreakpoints = {
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
    spaceBetween: 15,
  },
  481: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  361: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  0: {
    slidesPerView: 1,
  }
};

let bannerSlider = new Swiper('.banner-slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.banner-slider-next',
    prevEl: '.banner-slider-prev',
  }
});

let arrivalMaleSlider = new Swiper('.new-arrivals .male-collection-slider .row-catalog-slider', {
  navigation: {
    nextEl: '.new-arrivals .male-collection-slider .slider-nav-next',
    prevEl: '.new-arrivals .male-collection-slider .slider-nav-prev',
  },
  breakpoints: rowCatalogsBreakpoints,
});

let arrivalFemaleSlider = new Swiper('.new-arrivals .female-collection-slider .row-catalog-slider', {
  navigation: {
    nextEl: '.new-arrivals .female-collection-slider .slider-nav-next',
    prevEl: '.new-arrivals .female-collection-slider .slider-nav-prev',
  },
  breakpoints: rowCatalogsBreakpoints,
});

let saleMaleSlider = new Swiper('.sale .male-collection-slider .row-catalog-slider', {
  navigation: {
    nextEl: '.sale .male-collection-slider .slider-nav-next',
    prevEl: '.sale .male-collection-slider .slider-nav-prev',
  },
  breakpoints: rowCatalogsBreakpoints,
});

let saleFemaleSlider = new Swiper('.sale .female-collection-slider .row-catalog-slider', {
  navigation: {
    nextEl: '.sale .female-collection-slider .slider-nav-next',
    prevEl: '.sale .female-collection-slider .slider-nav-prev',
  },
  breakpoints: rowCatalogsBreakpoints,
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
});

let arrivalCategories = document.querySelectorAll('.new-arrivals .row-catalog-category');
let arrivalSliders = document.querySelectorAll('.new-arrivals .row-slider-wrapper');

arrivalCategories.forEach((item) => {
  item.addEventListener('click', () => {
    let current = item.dataset.bind;

    arrivalCategories.forEach((category) => {
      let value = category.dataset.active;
      category.dataset.active = (value == '') ? 'active' : '';
    });

    arrivalSliders.forEach((slider) => {
      let value = slider.dataset.slider;
      slider.dataset.active = (value == current) ? 'active' : '';
    });
  })
});

let saleCategories = document.querySelectorAll('.sale .row-catalog-category');
let saleSliders = document.querySelectorAll('.sale .row-slider-wrapper');

saleCategories.forEach((item) => {
  item.addEventListener('click', () => {
    let current = item.dataset.bind;

    saleCategories.forEach((category) => {
      let value = category.dataset.active;
      category.dataset.active = (value == '') ? 'active' : '';
    });

    saleSliders.forEach((slider) => {
      let value = slider.dataset.slider;
      slider.dataset.active = (value == current) ? 'active' : '';
    });
  })
});
