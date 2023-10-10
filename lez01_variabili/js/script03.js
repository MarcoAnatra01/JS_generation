let listaCarrello = document.getElementById("listaCarrello");
let totale = document.getElementById("totale");

let prodotti = ["mouse", "tastiera", "pad", "lampada"];
let prezzi = [32, 65, 20, 89.90];

let totaleCarrello = 0;

// += operatore di auto-incremento

/*listaCarrello.innerHTML = "<li>" + prodotti[0] + "</li>";
listaCarrello.innerHTML += "<li>" + prodotti[1] + "</li>";
listaCarrello.innerHTML += "<li>" + prodotti[2] + "</li>";
listaCarrello.innerHTML += "<li>" + prodotti[3] + "</li>";*/
                          
for(let i = 0; i < prodotti.length; i++) {

    listaCarrello.innerHTML += "<li>" + prodotti[i] + " - prezzo : " + prezzi[i] + " € " + "</li>";

    totaleCarrello += prezzi[i];
}

totale.innerHTML = "Totale carrello : " + totaleCarrello + " € ";



