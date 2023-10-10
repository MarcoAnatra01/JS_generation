
let dataOggi = new Date();
console.log(dataOggi);

let dataInizioCorso = new Date("Jun 13, 2023 14:00:00");
console.log("data inizio corso : " + dataInizioCorso);

let giornoInizioCorso = dataInizioCorso.getDate();    // giorno
let meseInizioCorso = dataInizioCorso.getMonth();     // mese 
let annoInizioCorso = dataInizioCorso.getFullYear();  // anno 
