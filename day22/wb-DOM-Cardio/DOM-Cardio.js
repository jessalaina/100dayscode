// Make a div
const wrapper = document.createElement('div');
// add a class of wrapper to it
wrapper.classList.add('wrapper');
// put it into the body
document.body.appendChild(wrapper);



// make an unordered list
const ul = document.createElement('ul');
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
ul.innerHTML = `<li>One</li>
                 <li>Two</li>
                 <li>Three</li>

`
wrapper.appendChild(ul);

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'https://randomwordgenerator.com/img/picture-generator/55e1d3474f53ab14f1dc8460962e33791c3ad6e04e507441722978d6944fc3_640.jpg';
// set the width to 250
img.style.width = '250px';
// add a class of cute
img.classList.add('cute');

// add an alt of Cute Puppy
img.alt = 'Pyramid spaceship';
// Append that image to the wrapper
wrapper.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const HTMLText = `<div class="myDiv">
<p>Para One</p>
<p>Para Two</p>
</div>`

wrapper.insertAdjacentHTML('afterbegin', HTMLText);


// add a class to the second paragraph called warning
// remove the first paragraph
const myDiv = wrapper.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');
myDiv.firstElementChild.remove();


// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
    const html =  `<div class="playerCard">
            <h2>${name} - ${age}</h2>
            <p>Their height is ${height}cm and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
            <button class="delete">Delete</button>
            </div>`
            return html;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('wes', 12, 150);
cardsHTML += generatePlayerCard('scott', 12, 150);
cardsHTML += generatePlayerCard('kait', 12, 150);
cardsHTML += generatePlayerCard('snickers', 12, 150);


// append those cards to the div
cards.innerHTML = cardsHTML;
// put the div into the DOM just before the wrapper element
wrapper.insertAdjacentElement('beforebegin', cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
const btns = document.querySelectorAll('.delete');

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e) => {
        e.target.parentNode.remove();
    })
}
