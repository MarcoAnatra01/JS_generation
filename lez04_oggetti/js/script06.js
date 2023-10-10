
// orologio digitale

setInterval(()=>{

    // ora completa con scritte che non ci interessano
    let oraEsatta = new Date(); 

    // vado a prendere dall'ora completa solo ore, minuti e secondi 
    let ora = oraEsatta.getHours();
    let min = oraEsatta.getMinutes();
    let sec = oraEsatta.getSeconds();
    
    // creo l'ora attuale con ore, minuti, secondi
    let oraAttuale = ora + ":" + min + ":" + sec;
    
    let orologio = document.getElementById("orologio");
    orologio.innerHTML = oraAttuale;

}, 1000);
 
// 1000 sono i millisecondi che devono passare tra un lancio della funzione e l'altro

// senza la setInterval si ottiene un orologio statico

// setInterval permette di lanciare una funzione ogni tot di millisecondi stabiliti




