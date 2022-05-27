const countdown = document.querySelector('.countdown');

// date to countdown to
const userDate = new Date("Aug 5, 2022 3:00:00").getTime();



let done = setInterval (() => {
    // current date
    const now = new Date().getTime();
    // get the countdown difference
    const remaining = userDate - now;

    // countdown: days, hours, minutes, seconds calcs
    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(remaining / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(remaining / (1000 * 60)) % 60;
    const seconds = Math.floor(remaining / 1000) % 60;

    // create new element to add the countdown
    countdown.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds <br/> remaining until your event`;

    // terminate counter
    if (remaining < 0) {
        clearInterval(done);
        countdown.innerHTML = 'FINISHED';
    }
}, 1000);
