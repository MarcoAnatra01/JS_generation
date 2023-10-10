
// notazione con funzione costruttore

// COSTRUTTORE :

function Studente(nome, cognome, matricola, voto, alias){

    // eventuali attributi opzionali vanno messi in fondo al costruttore
    // es. alias

    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
    this.voto = voto;
    this.alias = alias;

    this.mostraInfo = function() {
        let info = "Nome : " + this.nome + " " + this.cognome + "\n" + "matricola : " + this.matricola;

        if (this.alias != undefined) {
            info += " , alias : " + this.alias;
        }
        return info;
    }
}

// ISTANZE di Studente (oggetti di tipo Studente) :
/*
let studente1 = new Studente("Mario","Rossi","MR0937",30);
let studente2 = new Studente("Anna","Neri","AN0073",30);
let studente3 = new Studente("Luca","Ferrari","LF7654",25);
*/


// creo un array aula con oggetti Studente

let aula = [

    // anche se non metto l'attributo opzionale alias nell'oggetto,
    // lo script funziona cmq

    new Studente("Mario","Rossi","MR0937",30,"mariulen"),
    new Studente("Anna","Neri","AN0073",30),
    new Studente("Luca","Ferrari","LF7654",25)
];

let elencoStudenti = document.getElementById("elencoStudenti"); // tag ul

aula.forEach(studente => {
    elencoStudenti.innerHTML += "<li>" + studente.mostraInfo() + "</li>";
})

