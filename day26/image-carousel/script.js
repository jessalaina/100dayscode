/*
** get images
** setInterval to move images one after another
*/

const imgElem = document.querySelectorAll('img');

let i = 0;

setInterval(() => {
    if(i === 0) {
        imgElem[i].style.display = 'block'; 
    } else {
        imgElem[i - 1].style.display = 'none';
        imgElem[i].style.display = 'block';
    }

    i++;
}, 2000);
