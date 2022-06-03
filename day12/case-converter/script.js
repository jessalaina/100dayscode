/*
** get sentence from input
** loop through buttons to find case to set on input
** on click change textarea input to match case
** .toUpperCase() -- capitalize all text
** .toLowerCase() -- lowercase all text
** use function to make title case
** -- get string of text
** -- change to lowercase to make all the same
** -- split the string into array of words of input
** -- loop through array, cutting first character and making it uppercase, leave rest lower
** -- join first char & rest of word
** -- return to textarea
*/

const sent = document.querySelector('.sentence');
const btns = document.querySelectorAll('button');

for(let i = 0; i < btns.length; i++) {
    // loop through buttons to get target case
    btns[i].addEventListener('click', e => {
        // toUpper -- change to uppercase
        if(e.target.className === 'toupper') {
           sent.value = sent.value.toUpperCase();
        // toLower -- change to lower case
        } else if (e.target.className === 'tolower') {
            sent.value = sent.value.toLowerCase();
        // use function below to change string to title
        } else if (e.target.className === 'title') {
            sent.value = toTitleCase();
        }
    });
}

function toTitleCase() {
    // lowercase string
    sent.value = sent.value.toLowerCase();
    let str = sent.value;
    // split to array
    str = str.split(' ');
    console.log(str);
    
    // loop through array & change first char to upper
    // join rest of lowercase str back to first char
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}