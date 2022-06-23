import {people} from './data.js';

const mainContent = document.querySelector('main');
const para = document.createElement('p');



for (let person of people) {
    para.innerHTML = JSON.stringify(person.name);
    mainContent.appendChild(para);
}

