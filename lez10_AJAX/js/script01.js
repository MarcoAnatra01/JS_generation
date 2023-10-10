
// metodo fetch():

// sostituisce il vecchio XMLHttpRequest
// serve a recuperare dei dati da server remoti
// chiama delle ENDPOINT dietro le quali sono presenti delle API

// le API ci forniscono dati in formato JSON

// la chiamata all'endpoint si serve dell'ARCHITETTURA REST

// l'architettura REST è basata sull'architettura client - server e si serve dei metodi HTTP:
// - GET
// - POST
// - PUT

// tutti questi metodi sono di tipo AJAX (metodi asincroni)

// sono METODI ASINCRONI perchè si perde il sincronismo della pagina:

// 1.) prima viene caricato tutto il DOM 

// 2.) la fetch() viene eseguita per ULTIMA perchè prima va caricata la struttura della pagina, poi si recupera la risorsa
// la risorsa (endpoint) che vado a chiamare (a cui accedo tramite URL) potrebbe infatti non essere subito disponibile

let demo = document.querySelector("#demo");



// CHIAMO LA ENDPOINT TRAMITE FETCH():

//-------------------------------------------------
// COME API QUI USO - https://reqres.in/
//-------------------------------------------------

// se non specifo nulla, il metodo fetch farà un GET presso l'endpoint

// json() equivale al metodo parse(), trasforma un JSON in oggetto js

// response ritorna l'oggetto js equivalente al JSON recuperato 

// then() è un metodo di fetch()
// 1. nel primo then() si recupera il JSON e lo si converte in obj js
// 2. nel secondo then() si recupera con response l'obj js e si fanno manipolazioni

// metodo migliore - usare 2 then()


const URL = "https://reqres.in/api/users?page=2";  // url endpoint

fetch(URL)
.then(dataInJSON => {  
    
    // dataInJSON sono la response (risposta) del server
    // ritorna il JSON

    //----------------------------------------------
    // if(dataInJSON.status == 404){
    //     location.href = "paginaErrore.html";
    // }    
    //----------------------------------------------

    return dataInJSON.json()    // converto il JSON in obj js
}) 

.then(response => {

    // response è il mega oggetto js

    console.log(response);

    // stampo solo la proprietà data, cioè un array di oggetti utente
    console.log(response.data);

    // ciclo l'array data:

    // user un oggetto con varie proprietà, tra cui first_name, last_name ecc

    // bisogna avere sotto mano l'oggetto per vedere le proprietà 

    response.data.forEach(user => {
        console.log(user.first_name);

        demo.innerHTML += `<li> ${user.first_name} ${user.last_name} </li>`;
    });
})

