/*
** Get needed elements
** Shapes will need to be able to be dropped onto targets (words)
** Words will popup at random (Math.random())
** Counter will keep time until user is finished
** When finished, show how long it took user to complete
*/

const shapes = document.querySelectorAll('.shape');
const dragShape = document.querySelector('#drag');
const dropTarget = document.querySelectorAll('.drop-target');

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
shapes.forEach(shape => {
    shape.addEventListener('dragenter', dragEnter);
    shape.addEventListener('dragover', dragOver);
    shape.addEventListener('dragleave', dragLeave);
    shape.addEventListener('drop', drop);
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

// loop through all targets
// add show class depedent upon random number

    dropTarget.forEach(target => {
        target.classList.add('show');
        setTimeout(() => {
        target.classList.toggle('show');
            setTimeout(() => {
                target.classList.toggle('show');
            }, 4000);
        }, 5000);
    });
