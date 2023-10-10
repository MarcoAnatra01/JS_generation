// funzione che, collegata al click sul pulsante, saluta un utente
// all'evento onclick, parte la funzione

let demo = document.getElementById("demo");

function salutaUtente(){
    
    // il value del tag con id "nomeUtente" viene salvato nella variabile username

    let username = document.getElementById("nomeUtente").value;

    // trim() , cancella gli spazi vuoti intorno ad una stringa

    if (username.trim() == "") {
        demo.innerHTML = "nome non inserito, inserisci un nome";
    }else{
        
        let saluto = "Ciao " + username + " , benvenuto sulla pagina";
        demo.innerHTML = saluto;
    }


}

