const div = document.querySelector(".message");
const btn = document.querySelector(".message-btn");
const para = document.createElement("p");
const time = new Date();

function displayMessage() {
    // append paragraph text to div
    div.appendChild(para);
    // get hour of day
    const hour = time.getHours();
    // display message depending upon time
    if(hour < 12) {
        para.innerHTML = `Good morning!`;
        // change div background
        div.style.backgroundColor = 'lightcoral';
    } else if (hour >= 12 && hour < 16) {
        para.innerHTML = `Good afternoon!`;
        div.style.backgroundColor = 'darkviolet';
    } else {
        para.innerHTML = `Good evening!`;
        div.style.backgroundColor = 'crimson';
    }
}

btn.addEventListener('click', displayMessage);