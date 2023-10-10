
let formModifica = document.querySelector("#formModifica");

// divModifica contiene il formModifica
let divModifica = document.querySelector("#divModifica");

let imgAvatar = document.querySelector("#imgAvatar");

function User(nome, cognome, username, email, avatar){
    this.nome = nome;
    this.cognome = cognome;
    this.username = username;
    this.email = email;
    this.avatar = avatar;
}


function stampaInfo(){
    
    // conversione JSON - js
    // oggetto js utenteConnesso
    let utenteConnesso = JSON.parse(localStorage.getItem("user"));
    
    if (utenteConnesso == null) {

        alert("Error, la risorsa non esiste");
        window.location.href = "./404.html";
        
    }else{
        // creo il SALUTO all'utente

        let saluto = document.querySelector("#saluta");
        saluto.innerHTML = `Ciao ${utenteConnesso.nome} ${utenteConnesso.cognome}, benvenuto sul sito.`;

        imgAvatar.setAttribute("src", utenteConnesso.avatar);
    }
}

document.addEventListener("DOMContentLoaded", stampaInfo);



// LOGOUT

function logout(){

    // svuoto la local storage
    localStorage.clear();

    // vado alla pagina di arrivederci
    location.href = "./arrivederci.html";
}

let btnLogout = document.querySelector("#btnLogout");
btnLogout.addEventListener("click", logout);



// MODIFICA DATI UTENTE

let btnMod = document.querySelector("#btnMod");

function modificaUser(){

    // mostra il form che era nascosto
    // viene rimossa la classe "d-none"
    divModifica.classList.remove("d-none");

    // recupero i campi input del form precedentemente nascosto
    let nome = document.querySelector("#nome");
    let cognome = document.querySelector("#cognome");
    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let avatarForm = document.querySelector("#avatarForm");

    // oggetto js utenteConnesso
    let utenteConnesso = JSON.parse(localStorage.getItem("user"));

    // imposto il value dei campi
    // i campi saranno precompilati con i valori del form di registrazione 
    nome.value = utenteConnesso.nome;
    cognome.value = utenteConnesso.cognome;
    username.value = utenteConnesso.username;
    email.value = utenteConnesso.email;
    avatarForm.value = utenteConnesso.avatar;
}

btnMod.addEventListener("click", modificaUser);



// SALVATAGGIO MODIFICHE DEI DATI UTENTE

function salvaModifiche(){
    
    // al submit del formModifica si ricarica la pagina perchè:
    // viene inseguita la action che ci porta sulla pagina di benvenuto (sulla quale già ci troviamo)

    // riprendiamo i campi del form 
    let nome = document.querySelector("#nome");
    let cognome = document.querySelector("#cognome");
    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let avatarForm = document.querySelector("#avatarForm");
    

    // creiamo un oggetto User con i dati utente modificati presi dal formModifica

    let userModificato = new User(nome.value, cognome.value, username.value, email.value, avatarForm.value);
    
    let userModificatoJSON = JSON.stringify(userModificato);
    
    localStorage.setItem("user", userModificatoJSON);
}

formModifica.addEventListener("submit", salvaModifiche);




// NASCONDO IL FORM DI MODIFICA SE VOGLIO ANNULLARE LE MODIFICHE

let btnAnnulla = document.querySelector("#btnAnnulla");

function annullaModifiche(){

    // aggiungo la classe per nascondere il form di modifica

    divModifica.classList.add("d-none");
}
btnAnnulla.addEventListener("click", annullaModifiche);




