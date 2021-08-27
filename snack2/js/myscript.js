var somma = 0;

for( var i = 0; i < 10; i++) {
    var numero = parseInt(prompt("Inserisci un numero:"));
    somma += numero;
}

console.log("La somma dei numeri è:", somma);