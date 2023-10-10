
// REGULAR EXPRESSIONS

// le REGEX servono principalmente per controllare la struttura dei dati inseriti nei campi form

/*let regexCodFisc = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i;

let mioCodFisc = "NTRMRC07R18C469H";

function controllaCodice(){

    if (mioCodFisc.match(regexCodFisc)) {
        console.log("Codice Fiscale corretto");
    }else{
        console.log("Codice Fiscale errato, controlla");
    };
}

controllaCodice();*/




let codFisc = document.getElementById("codFisc");
let password = document.getElementById("password");
let btn = document.getElementById("btn");
let demo = document.getElementById("demo");

let regexCodFisc = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i;

let regexPassword =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

function controllaCampi(){

    demo.innerHTML = "";

    if (codFisc.value.match(regexCodFisc)) {
        
        demo.innerHTML += "<li> codice fiscale corretto </li>";
    }else{

        demo.innerHTML += "<li> codice fiscale errato, controlla i caratteri </li>";
    }

    if (password.value.match(regexPassword)) {

         // primo controllo
        demo.innerHTML += "<li> password ok </li>";

        // secondo controllo
        // controllaSeEsisteInItalia();

    }else{

        demo.innerHTML += "<li> password errata </li>";
    }
}

btn.addEventListener("click", controllaCampi);