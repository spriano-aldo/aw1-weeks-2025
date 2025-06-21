" use strict"

let a = 1;

// creazione di un nuovo scope
{
    let a = 5;
    let b = 'ciao';
    console.log(a); // stampa 5 
    console.log(b); // stampa ciao
}

console.log(a)  // stampa 1
console.log(b) // genera un'eccezione perchè b non è visibile
               // al di fuori dello scope delle graffe.
               // quindi si accede ad una variabile non dichiarata