
let strobo = document.querySelector("#strobo");

let demo = document.querySelector("#demo");


/**
 * 
 * @param {HTMLElement} elemento 
 */
function cambiaSfondo(elemento){

    // Math.ceil(), arrotonda all'intero superiore
    // numero random tra 0 e 255 per red, green, blue
    // con le variabili red, green, blue costruisco il colore rgb random

    let red = Math.ceil(Math.random() * 255);  
    let green = Math.ceil(Math.random() * 255);
    let blue = Math.ceil(Math.random() * 255);

    elemento.setAttribute("style", `background-color: rgb(${red}, ${green}, ${blue})`);
}

function rimuoviSfondo(elemento){

    elemento.removeAttribute("style");
}



// evento mousemove, mouse in movimento sopra l'elemento

strobo.addEventListener("mousemove", function(){
    cambiaSfondo(this);

    let colore = this.getAttribute("style");  // background-color

    // stampo in demo l'attributo style background-color salvato nella variabile colore

    demo.innerHTML =`<p>${colore}</p>`;  
});

strobo.addEventListener("mouseout", function(){
    rimuoviSfondo(this);

    demo.innerHTML = "";
});