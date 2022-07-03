const navLinks = document.getElementById('navlinks');
const sections = [...document.querySelectorAll('.section')];

const navItems = () => {
    let navContainer = '';

    sections.forEach(section => {
        const sectId = section.id;
        const sectAttribute = section.dataset.nav;
        navContainer += `<li><a class="link" href="#${sectId}" > ${sectAttribute}</a></li>`;
    })

    navLinks.innerHTML = navContainer;
}
navItems();