let settingsBlocks = document.querySelectorAll('.settings-block-title');
let catalogCategories = document.querySelectorAll('.catalog-category');

settingsBlocks.forEach((item) => {
  item.addEventListener('click', () => {
    let parent = item.parentElement;
    let value = parent.dataset.active;

    parent.dataset.active = (value == '') ? 'active' : '';
  })
});

catalogCategories.forEach((item) => {
  item.addEventListener('click', () => {
    let list = item.querySelector('.catalog-category-list');
    let value = item.dataset.active;

    item.dataset.active = (value == '') ? 'active' : '';
    list.parentElement.style.maxHeight = (value == '') ? list.offsetHeight + 'px' : '0px'
  })
});
