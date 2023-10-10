
// QUERY SELECTOR

// utilizza la SINTASSI CSS, #id || .class || tagName

// querySelector("sintassi css");

// è diverso da getElementById() perchè recupera non solo tramite id

// seleziona un solo elemento html perchè recupera sempre la PRIMA OCCORRENZA

// let div = document.querySelector('div');
// recupera il primo tag div che trova nel dom



let demo = document.querySelector("#demo");

demo.innerHTML = "Nuovo contenuto del div demo:";



// PROVA DEL querySelector SUGLI <li>

let li3 = document.querySelector('#tre');
li3.innerHTML = "Biscotti";

// esempio sintassi css più complessa
let li2 = document.querySelector("#listaSpesa li#due");
li2.innerHTML = "Birra";


// prende il primo elemento con classe .txtBlue che trova
let li1 = document.querySelector(".txtBlue");


// innerHTML manipola l'HTML e si può usare per :

// sovrascrivere: variabile.innerHTML = ....

// aggiungere: variabile.innerHTML += ....

// leggere: console.log(variabile.innerHTML)


// es voglio sapere cosa c'è scritto nel secondo li:
console.log("secondo elemento ul: " + li2.innerHTML);







