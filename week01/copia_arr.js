let v = [10,20];
// copia dei riferimenti
let alias = v;
console.log(v);
console.log(alias);
// aggiunta di un elemento ad alias
alias.push(30);
// la modifica di alias influenza
// anche v che ha lo stesso rif
console.log(v);
console.log(alias);

// shalow copy 
// copia punta ad un nuovo array
let copia= Array.from(v);
// si togli il primo elem
// da copia e non influenza v
copia.shift();
console.log(copia);
console.log(v);