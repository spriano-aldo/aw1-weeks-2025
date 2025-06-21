"use strict"

// for classico
for (let i=0; i<4; i++){
    console.log(i); // stampa 0 1 2 3
};

// for su oggetti
// stampa le proprietà
let oggetto = {x:0, y:3}
for ( let elem in oggetto){
    console.log(elem) // stampa x y
}

// for su array
let arr = [10,20,30,40]
for ( let elem of arr){
    console.log(elem) // stampa 10 20 30 40
}