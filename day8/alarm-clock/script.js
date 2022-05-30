const createAlarm = document.querySelector('.create-alarm');
// active alarm container & text to update
const activeAlarm = document.querySelector('#active-alarm');
const clearAlarm = document.getElementById('clear-alarm');
const alarmTextContainer = document.querySelector('.alarm-text');
const alarmText = time => `Alarm set at time ${time}`;
const alarmAudio = document.getElementById('alarm-audio');

//active alarm
let alarmString = null;

// submit alarm time
const alarmTime = e => {
    // prevent defalut for no page refresh
    e.preventDefault();
    const {hour, sec, min, dayNight} = document.forms[0];
    alarmString = getTimeString({
        hours: hour.value,
        seconds: sec.value,
        minutes: min.value,
        dayNight: dayNight.value
    })

    // reset form after submit
    document.forms[0].reset();

    // hide create alarm
    createAlarm.style.display = 'none';

    // show active alarm with text
    activeAlarm.style.display = 'block';
    alarmTextContainer.innerHTML = alarmText(alarmString);
}

const handleClear = () => {
    alarmString = '';
    activeAlarm.style.display = 'none';
    createAlarm.style.display = 'block';
}

// form submit event
document.forms[0].addEventListener('submit', alarmTime);
// clear the submission
clearAlarm.addEventListener('click', handleClear);


// trigger alarm?
const checkAlarm = timeString => {
    if(alarmString === timeString) {
        alarmAudio.play();
    }
}

// convert time to string
const getTimeString = ({hours, minutes, seconds, dayNight}) => {
    if(minutes / 10 < 1) {
        minutes / '0' + minutes;
    }
    if(seconds / 10 < 1) {
        seconds = '0' + seconds;
    }
    return `${hours}:${minutes}:${seconds} ${dayNight}`;
}

// display current time 
const renderTime = () => {
    let currentTime = document.querySelector('.current-time');
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let dayNight = hours >= 12 ? "PM" : "AM";
    if(hours > 12) {
        hours = hours % 12;
    }
    const timeString = getTimeString({hours, minutes, seconds, dayNight});
    currentTime.innerHTML = timeString;
}

// update time every second
setInterval(renderTime, 1000);