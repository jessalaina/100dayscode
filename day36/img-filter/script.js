/*
** user will use dropdown to find wanted image scene
** change event will happen on scene data
** loop through images to find images that match select options
** if data value matches input image will be left on screen
*/

const scene = document.getElementById('scene');
const images = document.querySelectorAll('img');


scene.addEventListener('change', () => {
    let value = scene.value;

    // loop through images
    images.forEach(e => {
        const imgData = e.dataset.value;
        // get image data value
        if(!value || imgData != value) {
            e.classList.add('hidden');
        } else {
            e.classList.remove('hidden');
        }
    })
})
