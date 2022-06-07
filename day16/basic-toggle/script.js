const body = document.querySelector('body');
const btn = document.querySelector('.toggle');

btn.addEventListener('click', toggle);

function toggle() {
    body.classList.toggle('dark');
    btn.classList.toggle('btn-light');
}