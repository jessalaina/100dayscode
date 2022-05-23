// elements needed to "do something" on
const input = document.getElementById("miles");
const h3 = document.querySelector("h3");
const convertBtn = document.querySelector(".convert");
const clearBtn = document.querySelector(".clear");

function convertMiles() {
  // get the number the user input
  let mile = input.value;
  // convert the input number to kilometers
  let kilometer = (mile * 1.60934).toFixed(2);
  // add text node
  let text = document.createTextNode(`${mile} miles is equal to ${kilometer} kilometers`);
  // append text to h3
  h3.appendChild(text);
  // clear the input box
  input.value = "";
  // clear h3 after 3 seconds
  setTimeout(function() {text.remove()}, 3000);
}

convertBtn.addEventListener("click", convertMiles);