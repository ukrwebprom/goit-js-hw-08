import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formData = {};
const STORAGE_KEY = 'feedback-form-state';

const storedData = localStorage.getItem(STORAGE_KEY);
if (storedData) {
  initFormFields(JSON.parse(storedData));
}

form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onFormSubmit);

function onInputForm(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  cleanForm();
}

function initFormFields({ email, message }) {
  formData.email = email;
  formData.message = message;
  form.elements.email.value = email;
  form.elements.message.value = message;
}

function cleanForm() {
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
}