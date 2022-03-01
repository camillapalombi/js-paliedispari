/*Parola palindroma*/

let userWord = prompt('Scrivi una qualsiasi parola');

let invertedWord = invertWord(userWord);

let result = document.querySelector('.result');

if (userWord === invertedWord) {
    console.log('La parola è palindroma');
    result.innerHTML = ('La parola inserita è palindroma');
} else {
    console.log('La parola non è palindroma');
    result.innerHTML = ('La parola inserita non è palindroma');
}

function invertWord(string) {
    let invertString = string.split('').reverse().join('');
    return invertString;
}