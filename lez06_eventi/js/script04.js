
// MIA SOLUZIONE ROTTA
/*
let box = document.querySelectorAll(".box");  // nodelist di box

let singoloBox = document.querySelector(".box");

let pagina = document.querySelector("body");

let colori = [];

for (let i = 0; i < box.length; i++) {
    
    coloreBox = box[i].getAttribute("style");

    colori.push(coloreBox);
}

function cambiaSfondo(elemento){

    for (let i = 0; i < box.length; i++) {

        let colore = colori[i];

        elemento.setAttribute("style", colore);
        
    }
}

[...box].forEach(singoloBox => {

    singoloBox.addEventListener("click", function(){
        cambiaSfondo(pagina);
    })
});
*/


// SOLUZIONE CON GLI ID DEI BOX
/*
let box1 = document.querySelector("#box1");

let body = document.querySelector("body");

box1.addEventListener("click", function(){

    let stileBG = this.getAttribute("style");  // darkmagenta

    body.setAttribute("style", stileBG);
});
*/   




// SOLUZIONE DARIO

let boxes = document.querySelectorAll(".box");
let body = document.querySelector("body");

let demo = document.querySelector("#demo");

boxes.forEach(box => {
    box.addEventListener("click", function(){

        let regolaStyle = this.getAttribute("style");

        body.setAttribute("style", regolaStyle);

        let colore = regolaStyle.split(" ")[1].slice(0,-1);

        // slice(0,-1), elimina l'ultimo carattere della stringa (in questo caso elimina il carattere ; della regola css)

        demo.innerHTML = `<h1>${colore}</h1>`;
    })
});
    
