
// CREARE UN OGGETTO USER SULLA BASE DEI DATI INSERITI IN UN FORM


function User(nome, cognome, alias, eta, email, data){
    this.nome = nome;
    this.cognome = cognome;
    this.alias = alias;
    this.eta = eta;
    this.email = email;
    this.data = data;

    this.toString = function(){
        let presentazione = `<strong>Nome:</strong> ${this.nome} ${this.cognome} || 
        <strong>alias:</strong> ${this.alias} ||
        <strong>eta:</strong> ${this.eta} ||
        <strong>email:</strong> ${this.email} || 
        <strong>data registrazione:</strong> ${this.data}`;

        return presentazione;
    }
}

let elencoUsers = document.getElementById("elencoUsers");

let btnRec = document.getElementById("btnRec");


// recuperaInfo() recupera i valori dei campi del form e crea l'oggetto User

function recuperaInfo(){

    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let alias = document.getElementById("alias").value;
    let eta = document.getElementById("eta").value;
    let email = document.getElementById("email").value;
    let data = document.getElementById("data").value;


    if (controllaCampi(nome,cognome,alias,eta,email,data)) {
    
        let mioUser = new User(nome, cognome, alias, eta, email, data);
    
        // stampo l'oggetto User con i dati del form in un tag li
        // l'oggetto però non viene salvato da nessuna parte

        elencoUsers.innerHTML += "<li>" + mioUser.toString() + "</li>";
        
        // una volta stampato User, pulisco i campi input

        pulisciCampi();
    }
}



// pulisciCampi() svuota tutti i campi input del form

function pulisciCampi(){
    document.getElementById("nome").value = "";
    document.getElementById("cognome").value = "";
    document.getElementById("alias").value = "";
    document.getElementById("eta").value = "";
    document.getElementById("email").value = "";
    document.getElementById("data").value = "";
}



let feed = document.getElementById("feed");

// il tag div#feed sostituisce l'alert 

function controllaCampi(nome, cognome, alias, eta, email, data){

    // ogni volta che parte controllaCampi() viene svuotato il feedback

    feed.innerHTML = "";  

    if (nome.lenght >= 2 && cognome.lenght >= 2 && alias.lenght >= 8 && Number(eta) >= 18 && email != "" && data != "") {

        feed.innerHTML = "Dati inviati";

        return true;

    }else{

        if (nome == "") {
            feed.innerHTML += "Nome non compilato correttamente <br>";
        }

        if (cognome == "") {
            feed.innerHTML += "Cognome non compilato correttamente <br>";
        }

        if (alias == "") {
            feed.innerHTML += "L'alias non compilato correttamente <br>";
        }

        if (Number(eta) < 18) {
            feed.innerHTML += "Devi essere maggiorenne per registrarti"
        }else{
            feed.innerHTML += "Età non inserita";
        }

        if (email == "") {
            feed.innerHTML += "Email non inserita <br>";
        }

        if (data == "") {
            feed.innerHTML += "Data non inserita <br>";
            return false;
        }

    }
}

btnRec.addEventListener("click", recuperaInfo);

