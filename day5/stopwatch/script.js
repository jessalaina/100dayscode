const btns = document.querySelectorAll('button');
console.log(btns);

btns.forEach(btn => {
    btn.addEventListener('click', setTimer);
})

function setTimer(e) {
    // use logic to start, stop, and reset stopwatch
    if(e.currentTarget.innerText === 'Start'){
        start();
    } else if(e.currentTarget.innerText === 'Stop'){
        stop();
    } else if(e.currentTarget.innerText === 'Reset'){
        reset();
    }
}

let [min, sec, ms] = [0, 0, 0];
let timerRef = document.querySelector('.timer');
let int = null;

// start stopwatch
function start() {
    if(int !== null){
        clearInterval(int);
    }
    int = setInterval(startTimer, 10);
}

// stop the timer
function stop() {
    clearInterval(int);
}

// rest the stopwatch to 00:00:00
function reset() {
    clearInterval(int);
    [min, sec, ms] = [0, 0, 0];
    timerRef.innerHTML = '00:00:00';
}

function startTimer() {
    ms += 10;
    if(ms === 1000){
        ms = 0;
        sec++;
        if(sec === 60){
            sec = 0;
            min++;
            if(min === 60){
                min = 0;
            }
        }
    }

let m = min < 10 ? '0' + min : min;
let s = sec < 10 ? '0' + sec : sec;
let mil = ms < 10 ? '00' + ms : ms < 100 ? '0' + ms : ms;

timerRef.innerHTML = `${m} : ${s} : ${mil}`;
}