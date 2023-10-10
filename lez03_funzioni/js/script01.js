// NOME FUNZIONE - camelCase


// FUNZIONE A FIRMA VUOTA , SENZA PARAMETRI

function salutaUtente() {
    console.log("Ciao caro utente");
}

salutaUtente(); // richiamo funzione


// demo, variabile globale
let demo = document.getElementById("demo");

function benvenuto(){
    // msg, variabile locale - non visibile fuori dalla funzione
    let msg = "Ciao utente , benvenuto sulla pagina";
    demo.innerHTML = msg;
}
benvenuto();


