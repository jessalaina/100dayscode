const colors = ['', 'aquamarine', 'orchid', 'coral'];
const sections = [...document.querySelectorAll('section')];

window.addEventListener('scroll', () => {
    const scrollFromTop = window.pageYOffset;

    for(let i = 0; i < sections.length; i++) {
        if(scrollFromTop <= sections[i].offsetTop) {
            document.body.className = colors[i];
            break;
        }
    }
})