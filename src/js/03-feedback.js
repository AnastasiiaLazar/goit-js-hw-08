const throttle = require('lodash.throttle');

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
}
const formData = (JSON.parse(localStorage.getItem(STORAGE_KEY)) || {});
const { email, message } = formData;
refs.email.value = (email || "");
refs.message.value = (message || "");

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(e) {
    e.preventDefault();
    
    console.log(formData);
    e.currentTarget.reset();  
    localStorage.clear();
};

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
};