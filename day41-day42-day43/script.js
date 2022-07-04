const navLinks = document.getElementById('navlinks');
const sections = document.querySelectorAll('section');


for (const section of sections) {
    let a = document.createElement('a');
    a.innerHTML = section.dataset.nav;
    a.href = `#${section.id}`;
    navLinks.appendChild(a);
}