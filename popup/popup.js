const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const popupclose = document.querySelector('.popup-close');

button.addEventListener('click', () => {
    popup.style.display = 'block';
});

popupclose.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', () => {
    popup.style.display = 'none';
});

