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

// Definisco il numero massimo di tentativi possibili e lo salvo in una variabile
let maxAttempts = maxRange - numberOfBombs

// Creo un array contenente le bombe
let bombsArray = []
bombsGenerator();
console.log(bombsArray)

// Creo un array vuoto che conterrà i numeri che non sono bombe
let correctNumbers = []

// Chiedo un numero all'utente e verifico se è una bomba
let userNumber = parseInt(prompt('Dimmi un numero'))

// Se l'utente da il numero di una bomba, ha perso
    // Altrimenti il gioco continua, chiedo un altro numero

if (bombsArray.includes(userNumber)) {
    alert('Hai perso')
} else {
    correctNumbers.push(userNumber)
}

console.log('Numeri giusti', correctNumbers)





// ----------
// FUNCTIONS
// ----------

// Funzione che genera numeri random da minRange a maxRange
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Funzione che popola l'array di bombe
function bombsGenerator() {
   while(bombsArray.length < 16) {
    const randomNumber = getRndInteger(minRange, maxRange);
    // Pusho il numero creato in bombsArray solo se non è già presente
    if(!bombsArray.includes(randomNumber)) {
        bombsArray.push(randomNumber);
    }
        
    }

    return bombsArray;
}

bombsGenerator();


