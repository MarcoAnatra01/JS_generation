// CICLI FOR

let nomi = ["Dario", "Lucia", "Mario", "Paolo", "Pippo"];


// FOR OF 
// si usa per gli ARRAY
for (const nome of nomi) {  // stampa il singolo elemento dell'array nomi

    console.log(nome);
}



// FOR IN 
// si usa per gli OGGETTI
for (const index in nomi) {
    
    console.log(nomi[index]);
}


// FOR EACH
// si usa esclusivamente per gli ARRAY
// nomeArray.forEach(elemento => { corpo del for } );
nomi.forEach(nome => {

    console.log(nome);
});








