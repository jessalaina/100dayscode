const name = document.getElementById('user-name');
const send = document.getElementById('send-btn');

send.disabled = true;
// name.focus();

name.addEventListener('input', e => {
    const elem = e.target;
    const valid = elem.value.length != 0;

    if (valid && send.disabled) {
        send.disabled = false;
    } else if (!valid && !send.disabled) {
        send.disabled = true;
    }
})