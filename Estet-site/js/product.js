let toggleInfoButtons = document.querySelectorAll('.toggle-info-title');
let toggleSectionsInfo = document.querySelectorAll('.toggle-info-section')

toggleInfoButtons.forEach((item) => {
  item.addEventListener('click', () => {
    let bind = item.dataset.bind

    toggleInfoButtons.forEach((title) => {
      let value = title.dataset.active;
      title.dataset.active = (value == '') ? 'active' : '';
    })

    toggleSectionsInfo.forEach((section) => {
      let value = section.dataset.section;
      section.dataset.active = (value == bind) ? 'active' : '';
    });
  })
});
