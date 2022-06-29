const bubbles = document.getElementById('bubbles');
const bubble = document.querySelectorAll('.bubble');

for(const bub of bubble) {
    bub.addEventListener('mouseover', (e) => {
        console.log(e.target);
        if (e.target === bub) {
            bub.classList.add('hidden');
            // bubbles.classList.add('padding');
            // bubbles.textContent = 'POP!!';
        }
    })
}
