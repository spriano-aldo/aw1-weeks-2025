"use strict"
let a = '';  // a è falsy
let b = "default";
console.log(a||b) // stampa b perchè a è foulsy
a = 'ciao';  // a è truthly
console.log(a||b) // adesso a è truthly e stampa a