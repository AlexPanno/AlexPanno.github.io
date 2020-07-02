Vue.component('nav-section', {
  props: {
    nav: Object,
  },

  template: `
    <div class="nav-section">
      <h3>{{ nav.title }}</h3>
      <ul class="nav-ul">
        <li class="nav-link" v-for="link in nav.links">
          <a href="#">{{ link }}</a>
        </li>
      </ul>
    </div>
  `
})

Vue.component('custom-select', {
  props: {
    select: Object,
  },

  data: function () {
    return {
      searchType: this.select.search,
      current: this.select.items[0],
      isActive: false,
      values: this.select.items,
    }
  },

  template: `
    <div class="custom-select" v-bind:class="{ 'active-custom-select': isActive, search: searchType}">
      <div class="custom-select-header">
        <p class="custom-select-category">{{ select.name }}</p>
        <div class="custom-select-current">
          <img src="img/icons/Form-search.svg" alt="search" class="custom-select-search-icon" v-if="searchType">
          <input v-if="searchType" v-model="current" type="search" name="" class="custom-select-search">
          <span v-if="!searchType">{{ current }}</span>
          <img src="img/contols/Options_icon.svg" alt="select arrow" class="custom-select-arrow" v-on:click="toggleSelect">
        </div>
      </div>
      <div class="custom-select-body">
        <div class="custom-select-item" v-for="value in select.items" v-on:click="setCurrent">
          {{ value }}
        </div>
      </div>
    </div>
  `,

  methods: {
    toggleSelect: function () {
      this.isActive = !this.isActive;
    },
    setCurrent: function (e) {
      this.isActive = false;
      this.current = e.target.textContent.trim();
    }
  }
});

Vue.component('product', {
  props: { product: Object },

  template: `
    <div class="product">
      <img v-bind:src="product.image" alt="product photo" class="product-photo">
      <div class="product-info">
        <p class="product-name">{{ product.name }}</p>
        <div class="product-seller-wrapper">
          <div class="product-seller">
            <img v-bind:src="product.seller.avatar" alt="seller">
            <a href="#" class="product-seller-name link">{{ product.seller.name }}</a>
          </div>
          <div class="product-categories">
            <img v-for="category in product.categories" v-bind:src="category" alt="product category">
          </div>
        </div>
      </div>
      <div class="product-price-wrapper">
        <p class="product-price">{{ product.price }}</p>
        <a href="#" class="button">Add</a>
      </div>
    </div>
  `,
});

Vue.component('menu-list', {
  props: { menu: Object },

  template: `
  <div class="menu-list">
    <div class="menu-list-top">
      <h3 class="menu-list-title">{{ menu.title }}</h3>
      <div class="line"></div>
      <a v-bind:href="menu.link" class="link">View All</a>
    </div>
    <div class="products-list">
      <product
        v-for="product in menu.products"
        v-bind:product="product">
      </product>
    </div>
  </div>
  `
});

const vw = new Vue({
  el: '#app',
  data: {
    userName: 'Amit',
    selects: [
      {
        name: 'Meal Type',
        current: 'Value',
        items: [
          'Lunch',
          'Value 2',
          'Value 3',
        ],
      },
      {
        name: 'Select Dish/Cuisine',
        current: 'Value',
        search: true,
        items: [
          'Chinese',
          'Value 2',
          'Value 3',
          'Value 4',
        ],
      },
      {
        name: 'Food Type',
        current: 'Value',
        items: [
          'Non-veg',
          'Value 2',
        ],
      },
    ],
    menuLists: {
      breakfast: {
        title: 'all-day breakfast',
        link: '#',
        products: [
          {
            image: "img/content/Product-1.png",
            name: 'Gajar ka Halwa with Crackling Dry Fruits',
            price: '` 60.00',
            categories: [
              'img/content/product category.svg',
            ],
            seller: {
              avatar: 'img/content/Ashish Soni.png',
              name: 'Ashish Soni',
            },
          },
          {
            image: "img/content/Product-2.png",
            name: 'Punjabi Dhaba Style Chicken Curry with Rice',
            price: '` 80.00',
            categories: [
              'img/content/product category 2.svg'
            ],
            seller: {
              avatar: 'img/content/Ravisha Sharma.png',
              name: 'Ravisha Sharma',
            },
          },
          {
            image: "img/content/Product-3.png",
            name: 'Veg. Laziz with 4 Parathas',
            price: '` 50.00',
            categories: [
              'img/content/product category 2.svg'
            ],
            seller: {
              avatar: 'img/content/Samina Qureshi.png',
              name: 'Samina Qureshi',
            },
          },
          {
            image: "img/content/Product-4.png",
            name: 'Paneer Hariyali Tikka with Green Chutney',
            price: '` 175.00',
            categories: [
              'img/content/product category 3.svg',
              'img/content/product category.svg',
            ],
            seller: {
              avatar: 'img/content/Aum.png',
              name: 'Aum',
            },
          },
        ]
      },
      treats: {
        title: 'Healthy treats',
        link: '#',
        products: [
          {
            image: "img/content/Product-5.png",
            name: 'Gajar ka Halwa with Crackling Dry Fruits',
            price: '` 60.00',
            categories: [
              'img/content/product category.svg'
            ],
            seller: {
              avatar: 'img/content/Ashish Soni.png',
              name: 'Ashish Soni',
            },
          },
          {
            image: "img/content/Product-6.png",
            name: 'Chocolate Mousse',
            price: '` 80.00',
            categories: [
              'img/content/product category 2.svg'
            ],
            seller: {
              avatar: 'img/content/Ravisha Sharma.png',
              name: 'Ravisha Sharma',
            },
          },
          {
            image: "img/content/Product-7.png",
            name: 'Cottage Cheese Quiche with Garlic and Cheese',
            price: '` 50.00',
            categories: [
              'img/content/product category 2.svg'
            ],
            seller: {
              avatar: 'img/content/Aum.png',
              name: 'Samina Qureshi',
            },
          },
          {
            image: "img/content/Product-8.png",
            name: 'Aloo Tikki (4) with Chole, Sweet Imli Chutney and...',
            price: '` 175.00',
            categories: [
              'img/content/product category 3.svg',
              'img/content/product category.svg',
            ],
            seller: {
              avatar: 'img/content/Ashish Soni.png',
              name: 'Aum',
            },
          },
        ]
      }
    },
    navSections: [
      {
        title: 'Company',
        links: [
          'About Us',
          'Partner with us',
          'Team',
        ]
      },
      {
        title: 'Support',
        links: [
          'Contact',
          'Forums',
          'Blog',
        ]
      }
    ]
  }
});

let touchMenu = document.querySelector('.touch-menu');

function openMenu() {
  alert('hi')
}

touchMenu.addEventListener('click', openMenu);
