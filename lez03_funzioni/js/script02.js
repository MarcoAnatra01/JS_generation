
// FUNZIONI CON PARAMETRI

function calcolaArea(altezza, base){

    let area = base * altezza;

    console.log("area = " + area);
}

// DEVO FORNIRE IL VALORE DEI PARAMETRI
calcolaArea(4,6);



// funzione con RETURN

function calcolaVolume(base, altezza, profondita){

    let volume = base * altezza * profondita;

    return volume;
}

// POSSO DICHIARARE UNA VARIABILE volume PERCHE' la var volume DELLA FUNZIONE E' LOCALE 

// nella var volume globale viene salvato il valore che ritorna la funzione 

let volume = calcolaVolume(4,5,6);  
console.log(volume);