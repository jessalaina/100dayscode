/*
** User will input search term 
** search term will be compared to data value
** loop through image data value to find images that match user input
** if data value matches input image will be left on screen
*/

const input = document.querySelector('.text-search');
const imageData = document.querySelector('[data-value]');


//loop through image data
for (let data in imageData) {
    console.log(data, imageData[data]);
}
// if user input matches data value, eliminate images that don't match
