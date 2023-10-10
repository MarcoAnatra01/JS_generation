let formReg = document.querySelector("#formReg");


// let newalert = document.createElement("div");
// let btnAlert = document.createElement("button");

// newalert.setAttribute("class", "alert alert-danger alert-dismissible fade show");
// newalert.setAttribute("role", "alert");

// btnAlert.setAttribute("type", "button");
// btnAlert.setAttribute("class", "btn-close");
// btnAlert.setAttribute("data-bs-dismiss", "alert");
// btnAlert.setAttribute("aria-label", "Close");

// newalert.appendChild(btnAlert);


let alertDiv = `<div class="alert alert-danger" role="alert">`;

let alertBtn = `<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;




function User(nome, cognome, username, email, avatar){
    this.nome = nome;
    this.cognome = cognome;
    this.username = username;
    this.email = email;
    this.avatar = avatar;
}


function checkSessione(){

    // se un utente ha già fatto l'accesso, si va subito alla pagina di benvenuto

    // bisogna controllare la local storage al caricamento della pagina

    let utenteConnesso = localStorage.getItem("user");

    if (utenteConnesso != null) {
        location.href = "./benvenuto.html";
    }

    // altrimenti se utenteConnesso == null non succede niente, si rimane su index.html
}
document.addEventListener("DOMContentLoaded", checkSessione);


function controlla(){

    let nome = document.querySelector("#nome");
    let cognome = document.querySelector("#cognome");
    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let avatar = document.querySelector("#avatar");
    
    if (nome.value.trim() != "" && cognome.value.trim() != "" && username.value.trim() != "" && email.value.trim() != "" && avatar.value.trim() != "") {
        
        // trim() elimina gli spazi
        
        // tutti i campi del form sono compilati 

        let user = new User(nome.value, cognome.value, username.value, email.value, avatar.value);

        let userJSON = JSON.stringify(user);
        
        // salvo userJSON nella local storage con key "user"
        localStorage.setItem("user", userJSON);

        return true;
    
    }else{

        alert("Non hai inserito i dati necessari !");
        event.preventDefault();

        return false;
    }
}



// l'evento submit riguarda tutti gli elementi del form

formReg.addEventListener("submit", function(event){

    // per prima cosa controllo i campi
    controlla();

    if (!controlla()) {

        // controlla() ritorna false
        // form non compilato correttamente
        // allora il submit non deve avvenire

        // preventDefault evita l'inseguimento della action del form
        // quindi evita di proseguire sulla pagina successiva
        event.preventDefault();

    }else if (controlla()) {
        
        // controlla() ritorna true 
        // tutti i campi sono compilati
        // si passa alla pagina di benvenuto
        
        errorBox.innerHTML = "";
        nome.value = "";
        cognome.value = "";
        username.value = "";
        email.value = "";
        avatar.value = "";
    }

});

// ALERT
// let alertNome = `${alertDiv} <strong> Attento! </strong> Hai dimenticato il nome. ${alertBtn} </div>`;
// errorBox.innerHTML = alertNome;