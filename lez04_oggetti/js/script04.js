function Docente(nome, cognome, corsoAssegnato, materia){
    this.nome = nome;
    this.cognome = cognome,
    this.corsoAssegnato = corsoAssegnato;
    this.materia = materia;

    this.insegnaMateria = function(){

        return "Sta insegnando " + this.mateiria;
    }

    this.info = function(){
        let presentazione = "docente: " + this.nome + " " + this.cognome + "\n" + "corso: " + this.corsoAssegnato + " , " + this.insegnaMateria;

        return presentazione;
    }

    this.rimuoviCorso = function(){

        this.corsoAssegnato = "";
        console.log("corso rimosso");
    }

}


let docentiCorso = [

    new Docente("Dario", "Mennillo", "jaita93", "javascript"),
    new Docente("Davide", "Ghione", "jaita93", "HTML"),
    new Docente("Mauro", "Bogliaccino", "jaita93", "java"),
    new Docente("Oscar", "Vecchione", "jaita93", "database"),
];

let elencoDoc = document.getElementById("elencoDoc");

docentiCorso.forEach(docente => {

    // elencoDoc.innerHTML += docente.info() + "<br>";

    elencoDoc.innerHTML += `<div class="dimDiv">
    <p> Nome docente: ${docente.nome} ${docente.cognome} </p>
    <p> materia: ${docente.materia} </p>
    <p> corso: ${docente.corsoAssegnato} </p>
    </div>`

});
 

