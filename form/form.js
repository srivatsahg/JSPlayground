
const form = document.querySelector('.form-canvas');

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(form.username.value);
});