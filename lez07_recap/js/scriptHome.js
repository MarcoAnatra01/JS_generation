// metodo costruttore dell'oggetto Viaggio

function Viaggio(titolo, meta, prezzo, img, descrizione, disponibilita){

    // ad ogni proprietà del costruttore assegno il valore che andremo ad inserire successivamente

    this.titolo = titolo;
    this.meta = meta;
    this.prezzo = prezzo;
    this.img = img;
    this.descrizione = descrizione;
    this.disponibilita = disponibilita;
}

let listaViaggi = [  // array di oggetti Viaggio

    new Viaggio("Vacanze da Sogno", "Hawaii", 4499, "https://hips.hearstapps.com/hmg-prod/images/hawaii-1667909275.png?crop=1xw:1xh;center,top&resize=1200:*", "Soggiorno alle Hawaii per 2 persone, 2 settimane in un resort non di lusso", 5),

    new Viaggio("Non è Ischia ma una piccola Ischia", "Ischitella", 1450, "https://www.edenpuglia.com/images/easyblog_articles/14/b2ap3_amp_ischitella.jpg", "Divertiti alla long beach della Campania, una pizza fritta al giorno inclusa nel prezzo", 1),

    new Viaggio("L'isola italiana più ambita", "Sardegna", 2200, "https://www.repstatic.it/content/nazionale/img/2022/03/14/113010969-1a1798c5-66c3-49b5-9615-436790fb8311.jpg", "Se vai a Stintino non trovi posto nemmeno in piedi", 0),

    new Viaggio("La perla del Cilento", "Castellabate", 1970, "https://www.campania.info/wp-content/uploads/sites/111/santa-maria-castellabate-hd.jpg", "Non sarà come Ischia ma sicuro meglio di Ischitella !", 6),

    new Viaggio("A chi piace, a chi no", "Trentino Alto-Adige", 1357, "https://travel.thewom.it/content/uploads/sites/4/2022/09/trentino-alto-adige_1.jpeg", "Mele a volontà", 10)
];


let grigliaViaggi = document.querySelector("#grigliaViaggi");  // div

for (let i = 0; i < listaViaggi.length; i++) {
    
    // creo il div che avvolge la singola card
    let col4 = document.createElement("div");


    // all'elemento col4 assegno delle classi bootstrap 
    // col-sm-6 serve per il layout responsive (numero di colonne per riga)
    col4.setAttribute("class", "col-md-4 col-sm-6");

    let disclaimer = "";

    // sotto i 3 posti disponibli --> disclaimer = "affrettati..."
    // 0 posti --> disclaimer = "posti esauriti"

    if (listaViaggi[i].disponibilita == 0) {
        disclaimer = "<p class='text-danger'>Mi spiace, posti esauriti</p>";

    }else if (listaViaggi[i].disponibilita > 0 && listaViaggi[i].disponibilita <= 3) {
        disclaimer = "<p class='text-warning'>Affrettati, mancano ancora pochi posti !</p>";
    }else{
        disclaimer = "";
    }

    

    // COMPONGO LA SINGOLA CARD
    
    // card = codice html fatto con bootstrap della card

    let card = `
    <div class="card my-3 h-100" style="border-color: black;">
        <img class="card-img-top" src="${listaViaggi[i].img}" alt="Title">

        <div class="card-body h-100 d-flex flex-column">
            <h4 class="card-title">${listaViaggi[i].meta}</h4>
            <h6 class="card-text">${listaViaggi[i].titolo}</h6> 
            <p class="card-text">${listaViaggi[i].descrizione}</p>
            <p class="card-text text-end mb-auto"><strong>€ ${listaViaggi[i].prezzo}</strong></p>

            <p class="card-text">${listaViaggi[i].disponibilita} disponibili</p>

            ${disclaimer}

            <button type="button" class="btn btn-primary" onclick='compra("${listaViaggi[i].meta}", "€ ${listaViaggi[i].prezzo}", "${listaViaggi[i].disponibilita}")'>Compra</button>
        </div>
    </div> `;

    col4.innerHTML = card;

    // aggancio ogni card (col4) alla griglia
    grigliaViaggi.appendChild(col4);
}


let viaggiDaAcquistare = [];

function compra(meta, prezzo, disponibilita){

    console.log("Stai acquistando il viaggio: " + meta + " - prezzo: " + prezzo + " - disponiblita: " + disponibilita);

    if (disponibilita != 0) {
        // se la disponbilità è diversa da zero, il viaggio viene inserito nel carrello

        let listaCarrello = document.querySelector("#listaCarrello");
    
        let viaggio = `<li> ${meta} - ${prezzo} </li>`;
    
        viaggiDaAcquistare.push(viaggio);
    
        viaggiDaAcquistare.forEach(rigaViaggio => {
            listaCarrello.innerHTML += rigaViaggio;
        });

    }else{
        // alert che appare nel caso in cui i posti disponibili per un viaggio siano esauriti

        let spazioAlert = document.querySelector("#spazioAlert");

        let alert = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong> Attenzione: </strong> Mi dispiace, i posti per il viaggio da te scelto sono esauriti. 
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;

      spazioAlert.innerHTML = alert;
    }

}




