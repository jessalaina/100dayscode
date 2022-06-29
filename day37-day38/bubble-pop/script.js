const bubbles = document.querySelectorAll('.bubble');
const reset = document.querySelector('.reset');

for(const bubble of bubbles) {
    bubble.addEventListener('mouseover', (e) => {
        if (e.target === bubble) {
            bubble.style.visibility = 'hidden';
        }
    })
}

reset.addEventListener('click', () => {
    for(const bubble of bubbles) {
        bubble.style.visibility = '';
    }
})
