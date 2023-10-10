

let formReg = document.querySelector("#formReg"); 

function User(nome, pass, mail){
    this.nome = nome;
    this.pass = pass;
    this.mail = mail;
}


function checkSessione(){

    // se un utente ha già fatto l'accesso, si va alla sua pagina personale

    let utenteConnesso = sessionStorage.getItem("userLoggato");

    if (utenteConnesso != null) {
        location.href = "./paginaPersonale.html";
    }
}
document.addEventListener("DOMContentLoaded", checkSessione);


function login(){
    let nome = document.querySelector("#nome");
    let password = document.querySelector("#password");


    if (nome.value.trim() != "" && password.value.trim() != "") {

        let usersJSON = localStorage.getItem("users");

        // conversione in oggetto js (oggetto con 2 proprietà)
        let users = JSON.parse(usersJSON);

        // estraggo da users solo l'array con i dati degli utenti registrati (proprietà "data")

        let accounts = users.data;

        let account = accounts.find((account) => nome.value == account.nome && password.value == account.pass);

        if (account == null) {
            alert("Non puoi accedere, non sei ancora registrato !");
            event.preventDefault();
            console.log(event);
        }else{

            let utenteConnesso = account;
            let utenteConnessoJSON = JSON.stringify(utenteConnesso);
            sessionStorage.setItem("userLoggato", utenteConnessoJSON);
        } 
            
    }
}

formReg.addEventListener("submit", function(event){

    login();
});




