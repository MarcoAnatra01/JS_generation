
// IF STATEMENT , OPERATORI AND e OR , SWITCH STATEMENT

let punteggio = 30;
let skill = 12;

// GIOCO
// HARD MODE : 
// per superare il livello, il punteggio deve superare 25 e le skill devono essere superiori a 10

// OPERATORE AND &&

if (punteggio >= 25 && skill >= 10) {
    console.log("Complimenti, hai superato il livello");

}else if(punteggio < 25 && skill >= 10) {
    console.log("Mi spiace, il tuo punteggio non è sufficiente");

}else if(punteggio >= 25 && skill < 10) {
    console.log("Mi spiace, le tue skill non sono sufficienti");

}else {
    console.log("Mi spiace, sia le tue skill che il tuo punteggio sono troppo bassi");
    // sia punteggio sia skill sono sotto soglia
}


// EASY MODE : 
// per superare il livello basta che uno dei due superi la soglia

// OPERATORE OR ||

if (punteggio >= 25 || skill >= 10) {
    console.log("Complimenti, hai superato il livello");

}else{
    console.log("Mi spiace, non ti è concesso avanzare di livello");
}



// OPERATORE TERNARIO 
// VARIANTE IF SU 1 RIGA

let oraEsatta = 20;

let saluto = oraEsatta <= 18 ? "Buongiorno" : "Buonasera";
console.log(saluto);



// SWITCH
// USATO PER LE CASISTICHE



