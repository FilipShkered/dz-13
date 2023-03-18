const addContBtn = document.querySelector('#addContBtn');
const nameInput = document.querySelector('#nameInput');
const surnameInput = document.querySelector('#surnameInput');
const phoneInput = document.querySelector('#phoneInput');
const contactTemp = document.querySelector('#contactTemp').innerHTML;
const contactConteiner = document.querySelector('#contactConteiner');



addContBtn.addEventListener('click', onAddContBtnClick);

function onAddContBtnClick(e) {
  e.preventDefault()
  const name = nameInput.value;
  const surname = surnameInput.value;
  const phone = phoneInput.value;

  if (!name || !surname || !phone || isNaN(phone)) {
    showError()
    return
  }

  const html = contactTemp
    .replace('{{name}}', name)
    .replace('{{surname}}', surname)
    .replace('{{phone}}', phone)

  contactConteiner.insertAdjacentHTML('beforeend', html)
  
clearAll()
}


function showError() {
  alert('Данные не валидны')
}

function clearAll() {
  nameInput.value = '';
  surnameInput.value = '';
  phoneInput.value = '';
}