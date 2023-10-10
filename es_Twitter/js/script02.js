
let textarea = document.querySelector("#textarea");

let btn = document.querySelector("#btn");

let contatore = document.querySelector("#contatore");

let feed = document.querySelector("#feed");

let stampa = document.querySelector("#stampa");


textarea.addEventListener('input', function() {

  if (textarea.value.length >= 280) {

    let limitedMsg = textarea.value.substring(0, 280);

    textarea.value = limitedMsg;

    feed.innerHTML = `<strong>Attenzione: hai raggiunto la lunghezza massima di 280 caratteri</strong>`;
  }

  if (textarea.value.length < 280) {
    
    feed.innerHTML = "";
  }

  let countChar = textarea.value.length;

  contatore.innerHTML = `<p>numero caratteri: ${countChar}</p>`;

});



function inviaMsg(){

    let oraEsatta = new Date();

    let ora = oraEsatta.getHours();
    let min = oraEsatta.getMinutes();
    let date = oraEsatta.toLocaleDateString();

    if (textarea.value == "") {
        // se la textarea è vuota NON deve essere inviato il messaggio

    }

    // risolvere il problema che se il messaggio è molto lungo viene inviato vuoto

    stampa.innerHTML += `<li>${textarea.value}</li><br>
                         <span>${ora}:${min} - ${date}</span>`;

    // svuoto la textarea
    textarea.value = "";

    // svuoto il div contatore 
    contatore.innerHTML = "";

    // svuoto il div feed
    feed.innerHTML = "";
}

btn.addEventListener("click", inviaMsg);

// sostituire il button con tag input type submit ?