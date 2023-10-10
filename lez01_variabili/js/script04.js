let txt = "Benvenuti al corso Jaita93";

// - le stringhe sono 0-based come gli array
// - anche lo spazio è un carattere

let lunghezzaTxt = txt.length;

let carattere0 = txt.charAt(0);  // carattere alla posizione 0 , primo carattere

let carattereUlt = txt.charAt(txt.length - 1); // carattere all'ultima posizione


// METODI DI RICERCA

let search1 = txt.indexOf("corso");  // indice del primo carattere della porzione di stringa
console.log(search1);

let search2 = txt.indexOf("e");  // indice della prima lettera "e"
console.log(search2);

let search3 = txt.lastIndexOf("e");  // indice dell'ultima lettera "e"
console.log(search3);



// METODI PER IL TAGLIO , slice() e substring()

let stringa = "Questo corso terminerà con un Projectwork";

let taglio1 = stringa.slice(0,13);  // taglia la stringa dall'indice 0 all'indice 13
console.log(taglio1);


// METODI PER SOSTITUZIONE , replace()

let stringa2 = "Edge è il miglior browser al mondo !";
let rep = stringa2.replace("Edge", "Chrome");
console.log(rep);



// METODI DI CONVERSIONE

// split() , CONVERSIONE STRINGA - ARRAY
// join() , CONVERSIONE ARRAY - STRINGA

let parola = "Marco";
let parolaArr = parola.split(""); // splitta ogni volta che NON trova uno spazio
console.log(parolaArr);          // si ottiene l'array : ['M', 'a', 'r', 'c', 'o']


let nomeFile = "carta di identità.pdf";
let nomeFileArr = nomeFile.split(" ");   // converte in array, splitta ogni volta che trova uno spazio
let nomeFileOK = nomeFileArr.join("_");  // unisce gli elementi dell'array con "_" e li mette nella stringa nomeFileOK
console.log(nomeFileOK);

// CONCATENAZIONE DI METODI
// posso fare anche : 
// nomeFileOK = nomeFile.split(" ").join("_");




// ESERCIZI STRINGHE :



// ESERCIZIO :
// data la stringa : frase = "oggi sono a lezione"
// trasformala in : "Oggi Sono A Lezione"
let frase = "oggi sono a lezione";
let fraseArray = frase.split(" ");  // array di stringhe : ["oggi", "sono", "a", "lezione"]
let nuovaFrase = "";
let nuovaFrase2 = "";

for(let i = 0; i < fraseArray.length; i++) {

    let inizialeMaiuscola = fraseArray[i][0].toUpperCase();  // prendo il carattere all'indice 0 dell'elemento dell'array all'indice i
    let restoParola = fraseArray[i].substring(1);  // substring, metodo per ottenere la parte di stringa rimanente (in questo caso dall'indice 1 in poi)

    nuovaFrase += (inizialeMaiuscola + restoParola) + " ";

    nuovaFrase2 += (fraseArray[i].replace(fraseArray[i][0], fraseArray[i][0].toUpperCase())) + " ";
    
}
console.log(nuovaFrase);
console.log(nuovaFrase2);




// ES.1 : dalla stringa "immagine.jpg" estraggo l'estensione "jpg"

// es.1
let immagine = "immagine.jpg";
let searchDot = immagine.indexOf(".");
let estensione = immagine.slice((searchDot + 1), immagine.length);
console.log("L'estensione del file è : " + estensione);

// es.1 - soluzione 2
let estensione2 = immagine.split(".").pop();
// 1. conversione in array , splitta quando trova il punto
// 2. metodo pop(), ELIMINA L'ULTIMO ELEMENTO DELL'ARRAY
// 3. l'elemento dell'array che è stato eliminato viene salvato nella variabile estensione2
console.log("estensione : " + estensione2);  // estensione : jpg



// ES.2 : dalla stringa "sfondo.PNG" estraggo il nome del file "sfondo"

let immagine2 = "sfondo.PNG";
let nameFile = immagine2.split(".").shift();  
// 1. conversione in array , splitta quando trova il punto
// 2. metodo shift(), ELIMINA IL PRIMO ELEMENTO DELL'ARRAY
// 3. l'elemento dell'array che è stato eliminato viene salvato nella variabile nameFile
console.log("nome del file : " + nameFile);  // nome del file : sfondo




