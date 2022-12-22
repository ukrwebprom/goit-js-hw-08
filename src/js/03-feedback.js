import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formData = {};

const storedData = localStorage.getItem('feedback-form-state');
if (storedData) {
  initFormFields(JSON.parse(storedData));
}

form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onFormSubmit);

function onInputForm(e) {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(formData);
}

function initFormFields({ email, message }) {
  formData.email = email;
  formData.message = message;
  form.elements.email.value = email;
  form.elements.message.value = message;
}
