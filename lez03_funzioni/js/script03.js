// FUNZIONI DENTRO FUNZIONI

function calcolaArea(base, altezza){
    let area = base * altezza;
    return area;
}

/*function calcolaVolume(profondita){
    
    // posso richiamare funzioni all'interno di altre funzioni

    let area = calcolaArea(4,5);

    let volume = area * profondita;

    return volume;
}

let volume = calcolaVolume(6);

console.log(volume);*/


// CALL-BACK FUNCTIONS
// funzione come parametro di un altra funzione

function calcolaVolume(area, profondita){
    
    let volume = area * profondita;
    return volume;
}

let volume = calcolaVolume(calcolaArea(4,5), 6);
console.log("volume = " + volume);

