const type = document.getElementById('sentence');

let i = 0;
const word = ' developer, designer, and dog lover!';
const speed = 150;

function typeWriter() {
    if (i < word.length) {
        type.innerHTML += word.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

document.addEventListener('DOMContentLoaded', typeWriter);
