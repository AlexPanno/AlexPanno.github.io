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

// let scrollPoint = document.querySelector('.scroll-point');
//
// scrollPoint.onmousedown = function (event) {
  // event.preventDefault();
  //
  // let shiftX = event.clientX - thumb.getBoundingClientRect().left;
  //
  // document.addEventListener('mousemove', onMouseMove);
  // document.addEventListener('mouseup', onMouseUp);
  //
  // function onMouseMove(event) {
  //   let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
  //   if (newLeft < 0) {
  //     newLeft = 0;
  //   }
  //   let rightEdge = slider.offsetWidth - thumb.offsetWidth;
  //   if (newLeft > rightEdge) {
  //     newLeft = rightEdge;
  //   }
  //
  //   thumb.style.left = newLeft + 'px';
  // }
  //
  // function onMouseUp() {
  //   document.removeEventListener('mouseup', onMouseUp);
  //   document.removeEventListener('mousemove', onMouseMove);
  // }
  //
  // thumb.ondragstart = function() {
  //   return false;
  // };
  alert('hi');
}
