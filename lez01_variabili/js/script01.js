let nomeUser = "Pippo";
let mailUser = "pippo@mail.it";
let idUser = 3;
let connessioneAttiva = true;

console.log(" Username : " + nomeUser + "\n" + " Email : " + mailUser + "\n" + " ID utente : " + idUser + "\n" + " connessione : " + connessioneAttiva);

let primoNum = 4;
let secondoNum = 9;

let somma = primoNum + secondoNum;
let prodotto = primoNum * secondoNum;
let differenza = primoNum - secondoNum;
let quoziente = primoNum / secondoNum;

console.log("somma = " + somma);
console.log("prodotto = " + prodotto);
console.log("differenza = " + differenza);
console.log("quoziente = " + quoziente.toPrecision(3));

// recupero elementi HTML
// ogni elemento html è un oggetto
let numeri = document.getElementById("numeri");

// modifico il contenuto dell'elemento html
numeri.innerHTML = "I numeri sono : " + primoNum + " e " + secondoNum;


let elSomma = document.getElementById("elSomma");
let elProdotto = document.getElementById("elProdotto");
let elDifferenza = document.getElementById("elDifferenza");
let elQuoziente = document.getElementById("elQuoziente");

elSomma.innerHTML = "somma = " + somma;
elProdotto.innerHTML = "prodotto = " + prodotto;
elDifferenza.innerHTML = "differenza = " + differenza;
elQuoziente.innerHTML = "quoziente = " + quoziente;




