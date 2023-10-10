let colori = ["verde", "blu", "giallo", "rosso"];


// stampo i singoli elementi dell'array con un for

for(let i = 0; i < colori.length; i++) {

    console.log(colori[i]);
}



// METODI PRINCIPALI DEGLI ARRAY

// - aggiungo un elemento all'array

colori.push("viola");   // elemento aggiunto a fine array
console.log(colori);

// - metto in ordine alfabetico gli elementi dell'array
colori.sort();
console.log(colori);

// - inverto l'ordine dell'array
colori.reverse();
console.log(colori);

// elimino l'ultimo elemento dell'array
colori.pop();
console.log(colori);

// ricerca di un elemento array
colori.indexOf("rosso");  // restituisce l'indice associato all'elemento "rosso"

colori.includes("marrone");  // guarda se l'elemento è incluso e restituisce true/false


// elimina 1 o più elementi di un array
// splice(indicePartenza , indiceFine)

// per eliminare un determinato elemento :
// splice(indiceElementoDaEliminare, 1)