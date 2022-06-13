// Kevin Powell tutorial 

const rippleBtn = document.querySelector('.ripple-btn');

function mousePosToCustProp(e, elem) {
    let posX = e.offsetX;
    let posY = e.offsetY;

    elem.style.setProperty('--x', posX + 'px');
    elem.style.setProperty('--y', posY + 'px');
}

rippleBtn.addEventListener('mousedown', (e) => {
   mousePosToCustProp(e, rippleBtn);

   rippleBtn.classList.add('pulse');
   rippleBtn.addEventListener('animationend', () => {
        rippleBtn.classList.remove('pulse');
   })
})