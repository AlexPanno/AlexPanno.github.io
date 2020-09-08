let settingsBlocks = document.querySelectorAll('.settings-block');

settingsBlocks.forEach((item) => {
  item.addEventListener('click', () => {
    let active = item.dataset.active;

    item.dataset.active = (active == '') ? 'active' : '';
  })
});
