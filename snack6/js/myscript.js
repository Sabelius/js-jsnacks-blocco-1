var listaParole =[];

for(i = 0; i < 5; i++){
  var parola = prompt("Inserisci parola:");
  if( parola == parola.toUpperCase()){
    alert("La parola è scritta in maiuscolo!!!")
  }
  else{
    listaParole.push(parola);
  }
}

console.log(listaParole);