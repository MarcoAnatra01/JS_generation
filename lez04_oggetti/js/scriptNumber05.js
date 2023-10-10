
// gli oggetti built in sono oggetti prefabbricati del linguaggio

// Number è un oggetto built in

let numero = 277.77;


// toFixed() stabilisce le CIFRE DECIMALI e arrotonda
let numArrotondato = numero.toFixed(1);
console.log(numArrotondato);


// toPrecision() stabilisce il numero di CIFRE SIGNIFICATIVE (cifre tot del numero)
let numSignificativo = numero.toPrecision(2);
console.log(numSignificativo);

let num2 = 4.646673774;
console.log(num2.toPrecision(3));


// toExponential ritorna il numero con NOTAZIONE ESPONENZIALE
let num3 = 8;
console.log(num3.toExponential(3));



// isNaN , is Not a Number : ritorna true/false
// usato per esempio per controllare i valori inseriti nei form

let parola = "ciao";
console.log(isNaN(parola));  // true



// INTERFACCIA NUMBER

// quando recuperiamo per esempio dei numeri dai form, li abbiamo sottoforma di stringhe 

// dobbiamo quindi fare il CAST con l'interfaccia number

let mioNum = "150";
let mioNum2 = "20";

let somma = Number(mioNum) + Number(mioNum2);
console.log("somma = " + somma);

// altrimenti la somma sarebbe 15020