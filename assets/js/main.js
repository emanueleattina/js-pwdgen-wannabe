// chiedere all'utente il suo nome, cognome e colore preferito
// infine stampare CognomeColorePreferito21

//dichiaro le variabili
var nome
var cognome
var colorePreferito
var password

//chiedo nome
var nome = prompt("Qual è il tuo nome?");
console.log(nome);

//chiedo cognome
var cognome = prompt(nome + " come?");
console.log(cognome);

//chiedo colorePreferito
var colorePreferito = prompt("Ora dimmi il tuo colore preferito");
console.log(colorePreferito);

//definisco il contenuto della variabile password
var password = cognome + colorePreferito + "21"
console.log(password);

//stampo il risultato
document.getElementById('nuovaPassword').innerHTML = "Bene " + nome + ", la tua nuova password è: " + password + ".";

document.getElementById('attento').innerHTML = "Non è molto sicura, ti consiglio di cambiarla."