function madeFakeInputs() {

  function setFirstElement(firstChild, target) {

    let childText = firstChild.innerText;
    let curentItem = document.createElement('p');

    curentItem.innerText = childText;
    curentItem.className = 'curent-item';
    target.append(curentItem);

  }

  function madeFakeOption(elem, targetContainer) {

    let elemValue = elem.getAttribute('value');
    let elemText = elem.innerText;

    let fakeOption = document.createElement('div');
    fakeOption.className = 'select-item';
    fakeOption.setAttribute('data-value', elemValue);
    fakeOption.innerText = elemText;

    targetContainer.append(fakeOption)
  }

  function getValues(item, targetContainer) {
    let childrenCollection = item.children;
    let childrenArray = [];

    for (let child of childrenCollection) {
      childrenArray.push(child);
    }

    childrenArray.forEach((elem) => {
      madeFakeOption(elem, targetContainer);
    });
  }

  let targets = document.querySelectorAll('.form-select');

  targets.forEach((item) => {
    let parent = item.parentElement;
    let firstChild = item.firstElementChild;

    let fakeInput = document.createElement('div');
    fakeInput.className = 'fake-select';
    fakeInput.classList.add('disabled-body-select');
    parent.append(fakeInput);

    let fakeInputHeader = document.createElement('div');
    fakeInputHeader.className = 'fake-select-header';
    fakeInput.append(fakeInputHeader);

    let fakeInputBody = document.createElement('div');
    fakeInputBody.className = 'fake-select-body';
    fakeInput.append(fakeInputBody);

    getValues(item, fakeInputBody);
    setFirstElement(firstChild, fakeInputHeader)
  });

}

madeFakeInputs()

function select () {

  let selectHeader = document.querySelectorAll('.fake-select-header');
  let selectItem = document.querySelectorAll('.select-item');

  selectHeader.forEach((item) => {
    item.addEventListener('click', selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener('click', selectChoose);
    item.addEventListener('click', setValue);
  });

  function selectToggle() {
    this.parentElement.classList.toggle('disabled-body-select');
    
  }

  function selectChoose() {
    let text        = this.innerText,
        select      = this.closest('.fake-select'),
        currentText = select.querySelector('.curent-item');
    currentText.innerText = text;
    select.classList.add('disabled-body-select');
  }

  function setValue(item) {

    let value  = this.getAttribute('data-value');
    let select = this.closest('.fake-select').previousElementSibling;
    let selectId = select.getAttribute('id')
    document.getElementById(selectId).value = value;

  }

};

select();

let buttons = document.querySelectorAll('.form-input-button');

buttons.forEach((item) => {
  item.onclick = function () {

    let buttonsInput = this.parentElement.nextElementSibling;
    let buttonsInputValue = buttonsInput.value;

    if (this.classList.contains('plus-button')) {

      let currentElement = this.nextElementSibling;
      let currentValue = currentElement.innerHTML;
      let value = parseInt(currentValue) + 1;
      currentElement.innerHTML = value;
      buttonsInput.value = value;

    } else {

      let currentElement = this.previousElementSibling;
      let currentValue = currentElement.innerHTML;
      let value = parseInt(currentValue) - 1;

      if (!(parseInt(currentValue) == 0)) {
        currentElement.innerHTML = value;
        buttonsInput.value = value;
      }
    }
  }
});

// let relocationType = document.querySelector('#relocationType');
// let relocationTypeParent = relocationType.parentElement;
// let current = relocationTypeParent.querySelector('.fake-select');
//
// .
