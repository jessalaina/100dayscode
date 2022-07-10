const sections = Array.from(document.querySelectorAll('section[id]'));

sections.forEach(section => {
    let title = section.querySelector('h2');
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', '#' + section.id);
    let text = document.createTextNode(title.textContent);
    a.appendChild(text);
    li.appendChild(a);
    document.querySelector('.navbar').appendChild(li);
})