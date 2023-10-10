let btnTitolo = document.querySelector("#btnTitolo");
let btnParagrafo = document.querySelector("#btnParagrafo");
let btnPulsante = document.querySelector("#btnPulsante");
 
let demo = document.querySelector("#demo");
let textarea = document.querySelector("#textarea");

let feed = document.createElement("div");
demo.appendChild(feed);
feed.setAttribute("class", "txtRed");

function creaH1(){
    if (textarea.value == "") {
        feed.innerHTML = "Inserisci del testo !";
    }else{
        feed.innerHTML = "";
        demo.innerHTML += `<h1>${textarea.value}</h1>`;
        textarea.value = "";

        // mantieni sempre il div feed nel div demo
        demo.appendChild(feed);

        // senza l'ultima istruzione il div feed sarebbe nascosto dall'ultimo h1 generato
    }
}
btnTitolo.addEventListener("click", creaH1);


function creaParagrafo(){
    if (textarea.value == "") {
        feed.innerHTML = "Inserisci del testo !";
    }else{
        feed.innerHTML = "";
        demo.innerHTML += `<p>${textarea.value}</p>`;
        textarea.value = "";
        demo.appendChild(feed);
    }
}
btnParagrafo.addEventListener("click", creaParagrafo);


function creaPulsante(){
    if (textarea.value == "") {
        feed.innerHTML = "Inserisci del testo !";
    }else{
        feed.innerHTML = "";
        demo.innerHTML += `<button>${textarea.value}</button>`;
        textarea.value = "";
        demo.appendChild(feed);
    }
}
btnPulsante.addEventListener("click", creaPulsante);
