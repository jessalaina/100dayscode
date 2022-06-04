/*
** select draggable element (item)
** use of "drap & drop api" -- dragstart/dragend
** dragenter -- drag over event target (one of two other boxes)
** once dragenter is triggered we want to drop the element -- dragend
** dragend -- data of element is transferred to target
*/

// get draggable item
const dragShape = document.querySelector('#item');
const boxes = document.querySelectorAll('.box');

// dragstart event
dragShape.addEventListener('dragstart', dragStart);

function dragStart(e) {
    // store data of element in motion
    e.dataTransfer.setData('text/plain', e.target.id);
    // hide element once it is dropped (make it look like element has moved from it's original position)
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0)
}

// events on boxes (dragenter, dragover, dragleave, drop)
boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
})

function dragEnter(e) {
    // validate drop target
    e.preventDefault();
    // add notification of where you're dragging
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    // validate drop target
    e.preventDefault();
    // add notification of where you're dragging
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    // remove notification of where you're dragging
    e.target.classList.remove('drag-over');
}

function drop(e) {
    // remove notification of where you're dragging
    e.target.classList.remove('drag-over');

    // prevent hide on dropped shape
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    e.target.appendChild(draggable);
    // remove hide class
    draggable.classList.remove('hide');
}