
// quando voglio sfruttare il modernizr inserisco il codice da controllare in un if la cui condizione è il modernizr stesso

    if (Modernizr.localstorage) {  // verifico tramite modernizr se il browser supporta il local storage

        // se il local storage è supportato, setto l'item "nomeUser" con value la variabile nomeUtente

        let nomeUtente = "Marco";
    
        localStorage.setItem("nomeUser", nomeUtente);
    
        // setItem(key, value)
    }else{

        console.log("il tuo browser non supporta il local storage");
    }



function verificaSessione(){

    // verifica se nel local storage è salvato il dato

    let utenteConnesso = localStorage.getItem("nomeUser");

    if (utenteConnesso != null) {

        console.log(`Benvenuto sulla pagina ${utenteConnesso}`);
    }else{

        console.log("Esegui il login o registrati");
    }
}
 
// una volta caricato il DOM, parte verificaSessione()

document.addEventListener("DOMContentLoaded", verificaSessione);
