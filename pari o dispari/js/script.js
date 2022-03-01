/*SCELTA UTENTE PARI O DISPARI E STAMPA DELLA STRINGA!*/

let evenOrOdd = prompt('SCEGLI: Pari o Dispari?');

let printEvenOrOdd = document.querySelector('.even-odd');

printEvenOrOdd.innerHTML = (`Hai scelto: ${evenOrOdd}`);


/*CHIEDO ALL'UTENTE UN NUMERO TRA 1 & 5 E LO STAMPO*/

let userNumber = parseInt(prompt('Dammi un numero da 1 a cinque'));

let printUserNumber = document.querySelector('.user-number');

printUserNumber.innerHTML = (`Hai scelto il numero: ${userNumber}`);


/*IL PC GENERA UN NUMERO RANDOM TRA 1 & 5 E LO STAMPO*/

let pcNumber = numberRandomBetween(1, 5);

let printPcNumber = document.querySelector('.pc-number');

printPcNumber.innerHTML = (`Il computer ha scelto il numero: ${pcNumber}`);

/*Funzione*/
function numberRandomBetween(min , max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}


/*SOMMA DEI DUE NUMERI SCELTI E STAMPA*/

let sumNumbers = userNumber + pcNumber;

let printSumNumbers = document.querySelector('.sum-numbers');

printSumNumbers.innerHTML = (`La somma dei due numeri che avete scelto è: ${sumNumbers}`);





/*STABILIAMO SE LA SOMMA è PARI O DISPARI E STAMPO*/
let sumEvenOrOdd = document.querySelector('.sum-even-or-odd');

if (resultEven(sumNumbers)) {

    sumEvenOrOdd.innerHTML = ('La somma dei due numeri è: PARI');

} else {

    sumEvenOrOdd.innerHTML = ('La somma dei due numeri è: DISPARI');

}

/*STABILIAMO IL VINCITORE*/
let winner = document.querySelector('.winner');

if (resultEven(sumNumbers) && evenOrOdd === 'pari') {

    winner.innerHTML = ('CONGRATULAZIONI, HAI VINTO!')

} else if (!resultEven(sumNumbers) && evenOrOdd === 'dispari') {

    winner.innerHTML = ('CONGRATULAZIONI, HAI VINTO!')

} else {

    winner.innerHTML = ('Mi dispiace, hai perso.')

}


/*Funzione*/
function resultEven(testNumber) {

    if (testNumber % 2 === 0) {
        return true;
    } else {
        return false;
    }
}