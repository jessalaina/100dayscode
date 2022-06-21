import {people} from './data.js';

const mainContent = document.querySelector('main');
const para = document.createElement('p');

let names = Object.values(people);

names.forEach((name) => {
    console.log(name);
    para.innerHTML = name;
    mainContent.appendChild(para);
})
