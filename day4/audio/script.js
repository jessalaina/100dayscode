// const button = document.querySelector('button');

// let dog = new Audio('audio-clips/dog_bark.mp3');
// button.addEventListener('click', () => {
//     let duration = dog.duration;
//     dog.play();
// })

const animals = document.querySelectorAll('.animal');

for(let i = 0; i < animals.length; i++) {
    animals[i].addEventListener('click', () => {
        let animal = animals[i].innerHTML;
        let lowerAnimal = animal.toLowerCase();
        makeSound(lowerAnimal);
        addStyle(lowerAnimal);
    })
}

function makeSound(name) {
    switch(name) {
        case "dog":
            let sound1 = new Audio('audio-clips/dog_bark.mp3');
            sound1.play();
            break;
        case "lion":
            let sound2 = new Audio('audio-clips/lion_roar.mp3');
            sound2.play();
            break;
        case "wolf":
            let sound3 = new Audio('audio-clips/wolf_howl.mp3');
            sound3.play();
            break;
    }
}

function addStyle(name){
    let activeElement = document.querySelector("." + name);
    activeElement.classList.add("active");
    setTimeout(function() {
        activeElement.classList.remove("active");
    }, 400);
    console.log(activeElement);
}