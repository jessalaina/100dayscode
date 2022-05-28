const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();

    // validate using regex
    const username = form.username.value;

    if(usernamePattern.test(username)){
        feedback.textContent = 'Username valid. Submitted';
    } else {
        feedback.textContent = 'Username must contain letters only and be between 6 & 12 characters long.'
    }
})

// live feedback
form.username.addEventListener('keyup', e => {
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
})