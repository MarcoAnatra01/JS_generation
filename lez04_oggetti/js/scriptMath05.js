
// abs , absolute , valore assoluto
let a = -5;
let aAbs = Math.abs(a);  // 5
console.log(aAbs);


// sqrt , radice
let b = 64;
console.log(Math.sqrt(b));


// pow, potenza
let c = 5;
console.log(Math.pow(c,4));




// ceil, floor, round - ARROTONDAMENTI

let d = 5.36;

// ceil() arrotonda all'intero maggiore più vicino
console.log(Math.ceil(d));   // 6

// floor() arrotonda all'intero minore più vicino
console.log(Math.floor(d));  // 5


// round() arrotonda all'intero maggiore o minore
console.log(Math.round(d));  // 5




// trunc() tronca le cifre dopo la virgola senza arrotondamenti
console.log(Math.trunc(13.37));  // 13
console.log(Math.trunc(42.84));  // 42




// NUMERI CASUALI

// random(), numero casuale tra 0 e 1 con 1 escluso

function getRandomInt(max) {

    // max, numero massimo che limita il range da cui pescare
    
    return Math.floor(Math.random() * max);

    // in questo caso non verrà mai generato un numero pari a max,
    // questo perchè si usa floor() che arrotonda all'intero inferiore
}

console.log(getRandomInt(3));

// Expected output: 0, 1 or 2
// es. viene pescato 0.999 --> 0.999 * 3 = 2.997 --> arrotondato a 2