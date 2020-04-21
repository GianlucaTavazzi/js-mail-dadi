//chiedere un numero tra 1 e 6
var numero_utente = prompt('dimmi un numero da 1 a 6')
console.log(numero_utente);

//estrazione numero
var numero_casuale = Math.floor(Math.random() * 6) + 1;
console.log(numero_casuale);

//stampo risultato
if (numero_utente > numero_casuale) {
    console.log('hai vinto');
} else if(numero_utente < numero_casuale){
    console.log('hai perso');
} else if (isNaN(numero_utente)){
    console.log('ripeti');
} else {
    console.log('avete pareggiato');
}
