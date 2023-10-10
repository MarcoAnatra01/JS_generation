
let utente = {
    username: "pippo5456",
    mail: "pippo@mail.com",
    role: "admin",
    account: "premium",
    info: {
        nome: "Giuseppe",
        cognome: "Rossi",
        dataReg: "31/08/23",
        indirizzo: "Via Roma"
    }
};

// l'oggetto js utente dovrà essere salvato nella local storage

// per poterlo salvare nello storage occorre convertirlo in un JSON

let utenteJSON = JSON.stringify(utente);

localStorage.setItem("utente", utenteJSON); 

let btnUser = document.querySelector("#btnUser");
let infoUtente = document.querySelector("#infoUtente");

function verificaSessione(){

    // legge nello storage

    // oggetto js user
    let user = JSON.parse(localStorage.getItem("utente")); 

    console.log(user);
    console.log(user.username);
    console.log(user.info.nome + " " + user.info.cognome);

    if (user != null) {
        
        infoUtente.innerHTML = `Utente connesso - username: ${user.username}, ruolo: ${user.role}`;
    }
}

btnUser.addEventListener("click", verificaSessione);