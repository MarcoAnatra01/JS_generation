let listaNomi = document.getElementById("listaColleghiNome");
let listaCognomi = document.getElementById("listaColleghiCognome");

let nomi = ["ada", "anna", "domenico", "erica", "gianmarco", "giovanni", "marco", "paolo", "piera"];

let cognomi = ["marsico", "mazzone", "mele", "landolfo", "marrandino", "mazzone", "pennino", "franzese", "scognamiglio"];

for(let i = 0; i < nomi.length; i++) {

    // lista nomi con lettera iniziale e finale MAIUSCOLA
    let primaLettera = nomi[i].charAt(0).toUpperCase();
    let ultimaLettera = nomi[i].substring(nomi[i].length - 1).toUpperCase();
    let centroNome = nomi[i].slice(1, (nomi[i].length - 1));
    let nomeFinale = primaLettera + centroNome + ultimaLettera;
    listaNomi.innerHTML += "<li>" + nomeFinale + "</li>";
    console.log(nomeFinale);
}

for(let j = 0; j < cognomi.length; j++) {

    let cognomeTrasformato = "";
    let cognome = cognomi[j];

    for(let k = 0; k < cognome.length; k++) {
        
        let lettera = cognome[k];

        // lista cognomi, LETTERE DISPARI MAIUSCOLE e lettere pari minuscole

        if (k % 2 == 0){
            cognomeTrasformato += lettera.toUpperCase();
            
        }else{
            cognomeTrasformato += lettera.toLowerCase();
            
        }
    }
    listaCognomi.innerHTML += "<li>" + cognomeTrasformato + "</li>";
}
