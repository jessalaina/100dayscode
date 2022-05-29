const form = document.querySelector('form');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

form.addEventListener('submit', e => {
    e.preventDefault();

    popup.style.display = 'block';
    close.addEventListener('click', () => {
        popup.style.display = 'none';
    })
})