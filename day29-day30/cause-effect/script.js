import {people} from './data.js';

const mainContent = document.querySelector('main');
const para = document.createElement('p');

let names = Object.values(people);

for (let person of people) {
    console.log(person);
    para.innerHTML = person.name;
    mainContent.appendChild(para);
}
