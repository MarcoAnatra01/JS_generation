function login(event){
    // prende lo username e lo salva in local storage

    let username = document.querySelector("#username").value;

    let ruolo = document.querySelector("#ruolo").value;

    if (username != "" && ruolo != -1) {
        // salva i dati nel local storage se è stato compilato il campo

        localStorage.setItem("username", username);
        localStorage.setItem("ruolo", ruolo);

    }else{
        alert("Inserisci lo username e seleziona un ruolo !");
        event.preventDefault;

        // per evitare di vedere event barrato metto event come parametro funzione

        // con il preventDefault la pagina non viene ricaricata
    }
}


function logout(){

    // clear() cancella tutta la local storage
    // removeItem() cancella solo un item specifico

    localStorage.removeItem("username");
    localStorage.removeItem("ruolo");

    location.reload();  // ricarica la pagina in seguito al logout 

}

let btnLogin = document.querySelector("#btnLogin");
let btnLogout = document.querySelector("#btnLogout");

btnLogin.addEventListener("click", login);
btnLogout.addEventListener("click",logout);

// div con il messaggio di benvenuto
let sessioneUser = document.querySelector("#sessioneUser");  


function salutaUser(){
    // verifica se esiste qualcosa in local o session storage

    let username = localStorage.getItem("username");
    let ruolo = localStorage.getItem("ruolo");

    if (username != null && ruolo != null) {
        // se l'utente ha già fatto il login e i suoi dati sono stati salvati nel local storage appare il saluto di benvenuto

        sessioneUser.innerHTML = `<h2> Benvenuto sulla pagina ${username} </h2> <p> Ruolo selezionato: ${ruolo} </p>`;
    }else{
        sessioneUser.innerHTML = ` <h2> Nessun utente connesso, effettua il login o registrati </h2>`;
    }
}

document.addEventListener("DOMContentLoaded", salutaUser);



let btnVerifica = document.querySelector("#btnVerifica");

function verificaStorage(){
    // verifica il contenuto di local storage e lo stampa in console chiavi e valori associati

    for (let i = 0; i < localStorage.length; i++) {
        
        console.log(`${localStorage.key(i)} = ${localStorage.getItem(localStorage.key(i))}`);

        // localStorage.key(i) - key del dato salvato nella local storage

        // localStorage.getItem(localStorage.key(i)) - value del dato salvato nella local storage 
        
    }
}

btnVerifica.addEventListener("click", verificaStorage);