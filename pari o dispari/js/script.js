let evenOrOdd = prompt('Pari o Dispari?');

console.log(evenOrOdd)

let userNumber = parseInt(prompt('Dammi un numero da 1 a cinque'));

console.log(userNumber)

let pcNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);

console.log(pcNumber)

let sumNumbers = userNumber + pcNumber;

console.log(sumNumbers)



if (sumNumbers % 2 === 0) {

    console.log('la somma dei due numeri è pari');

} else {

    console.log('la somma dei due numeri è dispari');

}

if (sumNumbers % 2 === 0 && evenOrOdd === 'pari') {

    console.log('HAI VINTO!!!!!');
    console.log('HAI VINTO!!!!!!');

} else if (sumNumbers % 2 === 1 && evenOrOdd === 'dispari') {

    console.log('HAI VINTO!!!!!');

} else {

    console.log('Hai perso.');

}
