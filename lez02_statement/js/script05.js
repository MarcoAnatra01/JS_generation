
// metodo Math.random()
// numero random tra 0 e 1
// let numeroCasuale = Math.random();  

// METODI ARROTONDAMENTO
// Math.ceil() , arrotonda all'INTERO SUPERIORE
// Math.floor() , arrotonda all'INTERO INFERIORE

//console.log(Math.ceil(numeroCasuale));  


// GIOCO DEL LOTTO - ESTRAZIONE DI 5 NUMERI SU UN SET DI 90 NUMERI (1-90)

// SOLUZIONE CON FOR

let estratti = [];

nGiri = 0;

/*for(let i = 0; i < 5; i++) {

    let numeroCasuale = Math.ceil(Math.random() * 90);

    if(estratti.includes(numeroCasuale)) {
        // rifai estrazione
        i--;
    }else{

        estratti.push(numeroCasuale);
    }
    nGiri++;
}
console.log(estratti);
console.log("cicli necessari per l'estrazione : " + nGiri);*/





// SOLUZIONE CON WHILE

let i = 0;
while (estratti.length < 5) {
    
    let numeroCasuale = Math.ceil(Math.random() * 90);

    if (! estratti.includes(numeroCasuale)) {
         
        // se non l'array NON (!) include il numero casuale estratto
        // allora aggiungi il numero casuale (push)

        estratti.push(numeroCasuale);
    }
    nGiri++;
}
console.log(estratti);
console.log("cicli necessari per l'estrazione : " + nGiri);







