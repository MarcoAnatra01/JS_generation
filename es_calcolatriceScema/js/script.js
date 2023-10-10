
let risultato = document.getElementById("risultato");

let numero1 = document.getElementById("num1");

let numero2 = document.getElementById("num2");

function controllaCampi(){

    let num1 = numero1.value;
    let num2 = numero2.value;

    if(num1 == "" || num2 == "") {
        return false;
    }else{
        return true;
    }
}

function somma(){

    let num1 = numero1.value;
    let num2 = numero2.value;

    let flag = controllaCampi();  // true/false

    if(flag) {

        let somma = Number(num1) + Number(num2);
        console.log("somma = " + somma);
        risultato.innerHTML = "somma = " + somma;

    }else{
        risultato.innerHTML = "-- Error : Devi inserire 2 numeri --";
    }
}

function sottrai(){

    let num1 = numero1.value;
    let num2 = numero2.value;

    let flag = controllaCampi();  // true/false

    if(flag) {

        let sottrazione = Number(num1) - Number(num2);
        console.log("sottrazione = " + sottrazione);
        risultato.innerHTML = "sottrazione = " + sottrazione;

    }else{
        risultato.innerHTML = "-- Error : Devi inserire 2 numeri --";
    }
}

function moltiplica(){

    let num1 = numero1.value;
    let num2 = numero2.value;

    let flag = controllaCampi();  // true/false

    if(flag) {

        let moltiplicazione = num1 * num2;
        console.log("moltiplicazione = " + moltiplicazione);
        risultato.innerHTML = "moltiplicazione = " + moltiplicazione;

    }else{
        risultato.innerHTML = "-- Error : Devi inserire 2 numeri --";
    }
}

function dividi(){

    let num1 = numero1.value;
    let num2 = numero2.value;

    let flag = controllaCampi();  // true/false

    if(flag) {

        let divisione = num1 / num2;
        console.log("divisione = " + divisione);
        risultato.innerHTML = "divisione = " + divisione;

    }else{
        risultato.innerHTML = "-- Error : Devi inserire 2 numeri --";
    }
}

function calcolaTutto(){

    let num1 = numero1.value;
    let num2 = numero2.value;

    let flag = controllaCampi();  // true/false

    if(flag) {

        let somma = Number(num1) + Number(num2);
        console.log("somma = " + somma);

        let sottrazione = Number(num1) - Number(num2);
        console.log("sottrazione = " + sottrazione);

        let moltiplicazione = num1 * num2;
        console.log("moltiplicazione = " + moltiplicazione);

        let divisione = num1 / num2;
        console.log("divisione = " + divisione);

        risultato.innerHTML = "somma = " + somma + " || " +
                         "sottrazione = " + sottrazione + " || " +
                         "moltiplicazione = " + moltiplicazione + " || " +
                         "divisione = " + divisione;
    }else{
        risultato.innerHTML = "-- Error : Devi inserire 2 numeri --";
    }
}

