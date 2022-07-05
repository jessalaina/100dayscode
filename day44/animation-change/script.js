const heart = document.querySelector('.heart');

const heartScale = [
    {transform: 'rotate(45deg) scale(0)'}
]

const heartScaleTime = {
    duration: 2000,
    iterations: 5,
}

heart.animate(heartScale, heartScaleTime);