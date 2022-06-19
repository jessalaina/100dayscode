const word = document.querySelector('.random-word');
const btn = document.querySelector('.btn');

let words = ['silly', 'quick', 'clumsy', 'proud', 'scruffy', 'brave', 'fierce'];

let randomWord = words[Math.floor(Math.random() * words.length)];

btn.addEventListener('click', () => {
    word.textContent = randomWord;
});