
// change:
// evento usato soprattutto sulle select dei form

let elTipologia = document.querySelector("#tipologia");
let elNome = document.querySelector("#nome");

let btn = document.querySelector("#btn");
let demo = document.querySelector("#demo");
let feed = document.querySelector("#feed");


elNome.addEventListener("focus", function(){  //SI CLICCA SUL CAMPO

    console.log("campo a fuoco");

    feed.innerHTML = "Inserisci uno username di almeno 4 caratteri";
});

elNome.addEventListener("blur", function(){  //SI CLICCA FUORI DAL CAMPO
    
    console.log("campo NON a fuoco");

    if (elNome.value == "") {
        feed.textContent = "Attenzione: nome non inserito";
    }
});

elTipologia.addEventListener("change", function(){

    console.log("stai selezionando la tipologia " + this.value);

    // this.value in questo caso non è ciò che è scritto nella option (ad esempio "Base"), ma il valore dell'attributo value della option (ad esempio "base")

    feed.removeAttribute("style"); 

    feed.innerHTML = `Tipologia selezionata: ${this.value}`;
});

function controlla(){

    if (elNome.value.length >= 4 && elTipologia.value != -1) {

        feed.setAttribute("style", "color: #013f28");
        feed.innerHTML = `Dati inviati con successo <span>&#9989;</span>`;

        return true;
    }else{

        // tolgo il colore verde al feedback se i campi non sono compilati bene

        feed.removeAttribute("style"); 

        if (elNome.value.length < 4) {
            feed.innerHTML = "Il nome deve contenere almeno 4 caratteri !";
        }
        if (elNome.value == "") {
            feed.innerHTML = "Nome non inserito !";
        }
        if (elTipologia.value == -1) {
            feed.innerHTML = "Non hai selezionato nessuna tipologia !";
        }
        if (elNome.value == "" && elTipologia.value == -1) {
            feed.innerHTML = "Il form è vuoto !";
        }
        return false;
    }
}

btn.addEventListener("click", function(event){

    controlla();

    if (!controlla()) {  
        
        // se controlla() ritorna false previene l'evento 
        // i dati del form non vengono inviati
        // così non vengono inviati form sbagliati o vuoti

        event.preventDefault;

    }else{
       demo.innerHTML += `<li>Dati inviati: user = ${elNome.value} - tipologia ${elTipologia.value}</li>`; 
    }
});


/*
if (elNome.value == "" || elTipologia.value == -1) {

        feed.innerHTML = "Ricontrolla, campi non compilati correttamente";

        event.preventDefault;
        
    }
*/    