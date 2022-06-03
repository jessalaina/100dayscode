/*
** get elements to interact with
** get input values for height & weight
** onclick of submit continue with conversion
** BMI = kg / m2 (kilograms / meters)
** convert lbs to kg (lbs / 2.205)
** convert inches to m (inches / 39.37)
** output BMI to screen
*/

const height = document.querySelector('.height');
const weight = document.querySelector('.weight');
const submit = document.querySelector('.submit');
const output = document.querySelector('.bmi');

submit.addEventListener('click', getBMI);

function getBMI() {
    // get input values for height & weight & convert
    let userHeight = (Number(height.value) / 39.37).toFixed(2);
    let userWeight = (Number(weight.value) / 2.205).toFixed(2);
    
    output.innerHTML = `You are ${userHeight} meters tall and ${userWeight} kilograms. Your body mass index is ${(userWeight / (userHeight ** 2)).toFixed(2)}.`
}