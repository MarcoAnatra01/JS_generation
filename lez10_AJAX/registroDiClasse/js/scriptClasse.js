

// GET

// let listaStudenti = document.querySelector("#listaStudenti");
// let listaDocenti = document.querySelector("#listaDocenti");

let URLdocenti = "http://localhost:3000/docenti";
let URLstudenti = "http://localhost:3000/studenti"; 


function creaCardStudente(studente){

    let cardStudente = document.createElement("li");
    cardStudente.setAttribute("class", "list-group-item d-flex align-items-center");

    cardStudente.innerHTML = `<span> - id: ${studente.id} - ${studente.nome} ${studente.cognome} </span>`;

    let btnElim = document.createElement("button");
    btnElim.setAttribute("class", "btn btn-default d-inline-block ms-auto");
    btnElim.innerHTML = "X";
    cardStudente.appendChild(btnElim);

    listaStudenti.appendChild(cardStudente);

    btnElim.addEventListener("click", function(){

        let UrlEliminazione = URLstudenti + "/" + studente.id;

        fetch(UrlEliminazione, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(data => {return data.json()})
    })
}


fetch(URLstudenti)
.then(data => {
    return data.json();
})
.then(response =>{  // response in questo caso è direttamente un array
    console.log(response);

    response.forEach(studente => {

        creaCardStudente(studente);
    });
})





// let btnDocentiOnline = document.querySelector("#btnDocentiOnline"); 
// let btnDocentiOffline = document.querySelector("#btnDocentiOffline");
// let btnTuttiDocenti = document.querySelector("#btnTuttiDocenti");



// function creaCardDocente(docente){

//     let containerCard = document.createElement("div");
//     containerCard.setAttribute("class", "col-6");

//     let cardDocente = document.createElement("div");
    
//     cardDocente.innerHTML = `
//     <p><strong> Nome: </strong>${docente.nome} ${docente.cognome}</p>
//     <p><strong> Materia: </strong>${docente.materia}</p>
//     <p><strong> Status: </strong>${docente.status}</p>
//     `;

//     containerCard.appendChild(cardDocente);
//     listaDocenti.appendChild(containerCard);
// }

// function infoDocenti(){  // mostra tutti i docenti
    
//     fetch(URLdocenti)
//     .then(docentiJSON => {
//         return docentiJSON.json();
//     })
//     .then(response => {

//     })
// }
// btnTuttiDocenti.addEventListener("click", infoDocenti);


// function docentiOnline(){

//     fetch(URLdocenti) 
//     .then(data => {
//         return data.json();
//     })
//     .then(response =>{  // response in questo caso è direttamente un array
//         console.log(response);

//         response.forEach(docente => {
            
//             if (docente.status == "online") {
//                 creaCardDocente();

//                 cardDocente.setAttribute("class", "border border-1 border-dark rounded-2 p-3 mb-3 bg-success bg-gradient text-white");
//             }
//         })
//     })
// }
// btnDocentiOnline.addEventListener("click", docentiOnline);



// function docentiOffline(){

//     fetch(URLdocenti) 
//     .then(data => {
//         return data.json();
//     })
//     .then(response =>{  
//         console.log(response);

//         response.forEach(docente => {
            
//             if (docente.status == "offline") {
//                 creaCardDocente();

//                 cardDocente.setAttribute("class", "border border-1 border-dark rounded-2 p-3 mb-3 bg-danger bg-gradient text-white");
//             }
//         })
//     })
// }
// btnDocentiOffline.addEventListener("click", docentiOffline);



//--------------------------------------------------------


// fetch(URLdocenti) 
// .then(data => {
//     return data.json();
// })
// .then(response =>{  // response in questo caso è direttamente un array
//     console.log(response);

//     response.forEach(docente => {
//         let containerCard = document.createElement("div");
//         containerCard.setAttribute("class", "col-6");

//         let cardDocente = document.createElement("div");
        
//         cardDocente.innerHTML = `
//         <p><strong> Nome: </strong>${docente.nome} ${docente.cognome}</p>
//         <p><strong> Materia: </strong>${docente.materia}</p>
//         <p><strong> Status: </strong>${docente.status}</p>
//         `;

//         if (docente.status == "offline") {
//             cardDocente.setAttribute("class", "border border-1 border-dark rounded-2 p-3 mb-3 bg-danger bg-gradient text-white");
//         }

//         if (docente.status == "online") {
//             cardDocente.setAttribute("class", "border border-1 border-dark rounded-2 p-3 mb-3 bg-success bg-gradient text-white");
//         }

//         if (docente.status == null) {
//             cardDocente.setAttribute("class", "border border-1 border-dark rounded-2 p-3 mb-3 bg-light bg-gradient text-dark");
//         }

//         containerCard.appendChild(cardDocente);
//         listaDocenti.appendChild(containerCard);
//     });
// })