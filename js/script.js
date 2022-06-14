// Consegna
// L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
// se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
// Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce con un messaggio di vittoria.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un numero che non era una bomba.

// Chiedo all'utente il livello per la difficoltà del gioco
let gameLevel = parseInt(prompt('Scegli la difficoltà del gioco (1 - 2 - 3)'))

// Definisco in numberOfBombs il numero di bombe presenti nel campo minato
const numberOfBombs = 16;

// Definisco minRange e maxRange
const minRange = 1
let maxRange

if (gameLevel === 1) {
    maxRange = 100
} else if (gameLevel === 2) {
    maxRange = 81
} else if (gameLevel === 3) {
    maxRange = 49
}
console.log(maxRange)

// Definisco il numero massimo di tentativi possibili e lo salvo in una variabile
let maxAttempts = maxRange - numberOfBombs






// ----------
// FUNCTIONS
// ----------

function bombGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


