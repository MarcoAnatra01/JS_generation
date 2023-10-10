
// INSTALLAZIONE DI Nodejs
// https://nodejs.org/it
// versione 18.17.1
// scaricherà anche npm 
// Nodejs permette di aprire e gestire sessioni javascript non più solo lato client, ma anche LATO SERVER


// INSTALLAZIONE DI JSON Server, comando su terminale VSC:

// npm install -g json-server
// npm è un gestore di pacchetti
// -g significa che l'installazione è a livello globale (su tutta la macchina) e non solo sull'applicativo

// JSON Server è un sistema gratuito che simula un server con architettura REST, che supporta quindi HTTP
// si mette così in piedi il CRUD (Create Read Update Delete), ovvero la manipolazione dei dati
// permette di sviluppare applicativi senza un db reale
 

// COLLEGARSI AL JSON Server:
// tasto dx sulla cartella contenente il file json --> Apri nel Terminale Integrato
// comando da terminale:
// json-server --watch nomeJSON.json
// se il file json specificato nel comando non esiste, te ne crea uno con dati di default

// (su terminale)
// Resources
// URL DEGLI ENDPOINT

// TENERE APERTO IL TERMINALE PER COMUNICARE CON JSON Server E ACCEDERE AI FILE JSON

fetch("http://localhost:3000/posts")
.then(data =>{
    return data.json();
})
.then(response => {
    console.log(response);
})