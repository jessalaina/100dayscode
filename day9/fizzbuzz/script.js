/*
** get user input (number)
** print numbers from 1 to user number
** multiples of 3, print Fizz
** multiples of 5, print Buzz
** multiples of 3 & 5, print FizzBuzz
*/
let num = Number(prompt('Enter a number:'));

for(let i = 1; i <= num; i++) {
    if(i % 15 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}