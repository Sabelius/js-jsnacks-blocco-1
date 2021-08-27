let primaParola = prompt("Inserisci la prima parola:")
let secondaParola = prompt("Inserisci la seconda parola:");



if (Number(primaParola) || Number(secondaParola)){
    alert("Uno o tutti i valori inseriti non sono parole!!!");
}
else if( primaParola.length == secondaParola.length){
    alert("Le parole sono uguali. Riprovare!!!");
}
else if (primaParola.length < secondaParola.length){
    console.log(primaParola + "," + secondaParola);
}
else if(secondaParola.length < primaParola.length){
    alert(secondaParola + "," + primaParola);
}