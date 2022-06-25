const btn = document.querySelector('button');
const box = document.querySelector('.box');

btn.addEventListener('click', changeRadius);

function changeRadius() {
    let randNum = Math.floor(Math.random() * 100);
    box.style.borderRadius = `${randNum}px`;
    console.log(randNum);
}