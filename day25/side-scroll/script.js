const scrollContainer = document.querySelector('.scroll');


scrollContainer.addEventListener('wheel', e => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
})