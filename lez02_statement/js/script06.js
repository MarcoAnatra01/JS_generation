// ESERCITAZIONE PARTE 1

// es 1
/*let numeri = [10, 67, 89, 90, 22];
let nMax = 0;
let i = 0;
let prosegui;
while (i < numeri.length) {
    if (numeri[0] > numeri[1] && prosegui) {
        nMax = numeri[0];
        prosegui = false;
    }else if(prosegui){
        nMax = numeri[1];
        prosegui = false;
    }

    if (nMax < numeri[i]) {
        nMax = numeri[i];
    }
    i++;
}

console.log("numero max dell'array " + "[" + numeri + "]" + " : " + nMax);
alert("numero max dell'array : " + nMax);*/




// es 2
/*let nPari = 0;
let nDispari = 0;
for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log("il numero " + i + " è pari");
        nPari++;
    }else{
        console.log("il numero " + i + " è dispari");
        nDispari++;
    }
}
console.log("numero di elementi PARI : " + nPari);
console.log("numero di elementi DISPARI : " + nDispari);*/




// es 3
/*for (let i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i + " è multiplo di 3 e di 5 : ZOOM BOOM");
    }else if(i % 5 == 0){
        console.log(i + " è multiplo di 5 : BOOM");
    }else if(i % 3 == 0){
        console.log(i + " è multiplo di 3 :ZOOM");
    } 
}*/





// es 4
/*for (let i = 0; i < 5; i++) {  // regola le righe 
    let disegno = "" ;

    for (let j = 0; j <= i; j++) {  // regola il numero di asterischi per riga
        disegno += "*";

    }
    console.log(disegno);
}*/




//es 5
/*let somma = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        somma += i;
    }
}
console.log(somma);*/






// es 6

// PATTERN :
/*
1

12

123

1234

12345
*/

// il numero di righe da stampare viene chiesto all'utente 
// prompt(), per ricevere un input dall'utente

/*let numRighe = prompt("inserisci il numero di righe da stampare :");

for (let i = 1; i <= numRighe; i++) {  // regola le righe 

    let riga = "" ;
    // la riga si svuota ogni volta che si torna al primo for

    for (let j = 1; j <= i; j++) {  // regola gli elementi di ogni singola riga  

        // il for interno cicla per un numero di volte pari al numero della riga
        
        riga += j + " ";
    }
    console.log(riga);
}*/






// es 7

// PATTERN :
/*
1

2 3

4 5 6

7 8 9 10
*/

/*let counter = 1;
for (let i = 1; i <= 4; i++) {
    
    let riga = "";

    for (let j = 1; j <= i; j++) {

        riga += counter + " ";
        counter++;
    }
    console.log(riga);
}*/




// es 8

// PATTERN :
/*
@

@@

@@@

@@@@

@@@@@

@@@@@@
*/

