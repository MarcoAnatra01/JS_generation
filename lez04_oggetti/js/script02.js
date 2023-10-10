let studente = {
    nome: 'Anna',
    cognome: 'Verdi',
    matricola: 'A034',

    corsi:["Java","Html","Angular"],

    aggiungiCorso(corso){  // aggiunge un elemento all'array corsi
        this.corsi.push(corso);
    },

    presentaStudente(){
        return "Nome : " + this.nome + " " + this.cognome + " ||  matricola : " + this.matricola; 
    }
}

let cardStudente = document.getElementById("cardStudente");

function stampaInfo(){

    cardStudente.innerHTML = "<h4>" + studente.presentaStudente() + "</h4>";

    cardStudente.innerHTML += "<p>Corsi a cui lo studente è iscritto:</p>";

    studente.corsi.forEach(corso => {

        // ciclo l'array corsi e stampo ogni elemento nell'html in un <li> dentro il div cardStudente

        cardStudente.innerHTML += "<li>" + corso + "</li>";
    });
}

stampaInfo(); // STAMPO SULL'HTML

let btnCorso = document.getElementById("btnCorso");

function aggiungiCorso(){ 
     // funzione DIVERSA dalla funzione aggiungiCorso dell'oggetto studente

     // valore del campo input
     let nuovoCorso = document.getElementById("nuovoCorso").value;  

     if (nuovoCorso != "") {

        studente.aggiungiCorso(nuovoCorso);  // funzione dell'oggetto 
        
        stampaInfo();

        // dopo l'inserimento del nuovo corso viene svuotato il value del campo input
        document.getElementById("nuovoCorso").value = "";
     }
}

btnCorso.addEventListener("click", aggiungiCorso);

