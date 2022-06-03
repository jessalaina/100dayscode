const noun = document.querySelector('.noun');
const color = document.querySelector('.color');
const adjective = document.querySelector('.adjective');
const verb = document.querySelector('.verb');
const place = document.querySelector('.place');
const adverb = document.querySelector('.adverb');
const verb2 = document.querySelector('.verb2');
const submit = document.querySelector('.submit');
const madlib = document.querySelector('.madlib');

submit.addEventListener('click', createMadlib);

function createMadlib() {
    let word1 = noun.value.toLowerCase();
    let word2 = color.value.toLowerCase();
    let word3 = adjective.value.toLowerCase();
    let word4 = verb.value.toLowerCase();
    let word5 = place.value.toLowerCase();
    let word6 = adverb.value.toLowerCase();
    let word7 = verb2.value.toLowerCase();

    madlib.innerText = `The little ${word2} ${word1} went to the ${word5}. The ${word5} was full of ${word4} dinosaurs! If ${word1} got too close, ${word6} ${word3} ${word1} might not get out alive! If ${word1} makes a wrong move the dino's will ${word7} until they can't any longer.`;
}