"use strict"; // strict mode

console.log(c); // hoisting - possibile per var

let x // Non si assegna un valore
let y=null // la variabile non ha ancora un valore

let a = 5;
const b = "prova";
var c = 10;


console.log(a); // stampa
console.log(x)
console.log(y)

// se la variabile non ha ancora un valore
// lo carichichiamo ad esempio con un'operazione
// asincrona
if (y===null){
    y=[1,2,3] // simulazione di un caricamento
}

console.log(y)
a = 5
let d = '5'
console.log(a==d)  // stampa true
console.log(a===d) // stampa false


