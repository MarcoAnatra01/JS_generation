
let btnDocentiOnline = document.querySelector("#btnDocentiOnline"); 
let btnDocentiOffline = document.querySelector("#btnDocentiOffline");
let btnTuttiDocenti = document.querySelector("#btnTuttiDocenti");

let listaDocenti = document.querySelector("#listaDocenti");

let newURLdocenti = "";


function mostra(event){

    listaDocenti.innerHTML = "";

    console.log(event.target);

    let status = this.getAttribute("data-status");

    if(status == 'online'){
        newURLdocenti = URLdocenti + "?status=" + status;

        // il "?" equivale al "where" di una query SQL
        // "http://localhost:3000/docenti?status='online'"
    }
    else if(status == 'offline'){
        newURLdocenti = URLdocenti + "?status=" + status;
    }
    else if(status == 'all'){
        newURLdocenti = URLdocenti;
    }

    fetch(newURLdocenti)
    .then(data =>{
        return data.json();
    })
    .then(response =>{
        response.forEach(docente => {
            creaCardDocente(docente);
        });
    })
}


function creaCardDocente(docente){

    let classBgCard = "";   // classe bootstrap per lo sfondo della card

    if (docente.status == "online") {
        classBgCard =  "border border-1 border-dark rounded-2 p-3 mt-3 mb-3 bg-success bg-gradient text-white";

    }else if (docente.status == "offline"){
        classBgCard = "border border-1 border-dark rounded-2 p-3 mt-3 mb-3 bg-danger bg-gradient text-white";
    }

    let card = `
    <div class='col-4'>
        <div class='card-body ${classBgCard}'>
            <h3 class='card-title'> ${docente.nome} </h3>
            <p class='card-text'> ${docente.materia} </p>
            <p class='card-text'> ${docente.status} </p>
        </div>
    </div>
    `;

    listaDocenti.innerHTML += card;
}

btnDocentiOnline.addEventListener("click", mostra);
btnDocentiOffline.addEventListener("click", mostra);
btnTuttiDocenti.addEventListener("click", mostra);