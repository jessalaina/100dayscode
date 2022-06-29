const bubbles = document.getElementById('bubbles');
const bubble = document.querySelectorAll('.bubble');
const reset = document.querySelector('.reset');

for(const bub of bubble) {
    bub.addEventListener('mouseover', (e) => {
        console.log(e.target);
        if (e.target === bub) {
            bub.style.visibility = 'hidden';
        }
    })
}

reset.addEventListener('click', () => {
    for(const bub of bubble) {
        bub.style.visibility = '';
    }
})
