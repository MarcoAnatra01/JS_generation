
function createUserData(){

    // recupero il div in cui stampare tutte le info utente
    let userData = document.querySelector("#userData");

    // utente connesso (obj js)
    let utente = JSON.parse(sessionStorage.getItem("userLoggato"));

    // JSON UTENTI REGISTRATI
    let users = localStorage.getItem("users");

    // array di oggetti che rappresentano gli utenti registrati
    let utentiRegistrati = (JSON.parse(users)).data;

    // trova nell'array utentiRegistrati, l'utente con lo stesso nome e la stessa password dell'utente connesso
    let accountLoggato = utentiRegistrati.find((account) => account.nome == utente.nome && account.pass == utente.pass);

    // ulteriore controllo per essere sicuri che l'oggetto accountLoggato non sia vuoto 
    if (accountLoggato != null) {
        
        let divData = document.createElement("div");

        divData.setAttribute("class", "border border-1 border-dark rounded-2 p-3");
        
        divData.innerHTML = 
        `<li class="list-group-item"> <strong> Nome utente: </strong>${accountLoggato.nome} </li>
         <hr>
         <li class="list-group-item"> <strong> Mail: </strong>${accountLoggato.mail} </li>`;
        
        userData.appendChild(divData);
    }
    
}

// function createData(){

//     let fields = document.querySelectorAll("#formReg input");
//     let userData = document.querySelector("#userData");

//     for (let i = 0; i < fields.length; i++) {
//         let idField = fields[i].getAttribute("id");
//         let fieldValue = fields[i].value;

//         let divData = document.createElement("div");

//         let li = document.createElement("li");
//         li.classList.add("list-group-item");
//         li.innerHTML = `<strong> ${idField}: </strong> ${fieldValue}`;

//         divData.appendChild(li);
//         divData.setAttribute("id", idField);
//         userData.appendChild(divData); 
//     }
// }

function stampaInfo(){
    
    let utenteConnesso = JSON.parse(sessionStorage.getItem("userLoggato"));
    
    if (utenteConnesso == null) {

        alert("Error, la risorsa non esiste");
        window.location.href = "./404.html";
        
    }else{
        // saluto l'utente e stampo le info

        let saluto = document.querySelector("#saluta");
        saluto.innerHTML = `Benvenuto, @${utenteConnesso.nome}`;

        createUserData();
    }
}

document.addEventListener("DOMContentLoaded", stampaInfo);



function logout(){
    // svuoto la session storage
    sessionStorage.clear();

    // vado alla pagina di arrivederci
    location.href = "./arrivederci.html";    
}

let btnLogout = document.querySelector("#btnLogout");
btnLogout.addEventListener("click", logout);