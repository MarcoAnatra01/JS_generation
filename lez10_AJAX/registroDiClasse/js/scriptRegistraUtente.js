

// POST

let btnInserisci = document.querySelector("#btnInserisci");

function Studente(nome,cognome){
    this.nome = nome;
    this.cognome = cognome;
}

function Docente(nome, cognome, materia, status){
    this.nome = nome;
    this.cognome = cognome;
    this.materia = materia;
    this.status = status;
}

function registraUtente(){
    
    let nome = document.querySelector("#nome").value;
    let cognome = document.querySelector("#cognome").value;
    let ruolo = document.querySelector("#ruolo").value;  // valore dell'attributo value della select

    let divMateria = document.querySelector("#divMateria");

    if (nome.trim() != "" && cognome.trim() != "") {
        
        if (ruolo == "studente") {
            
            let newStudente = new Studente(nome,cognome);
        
            fetch("http://localhost:3000/studenti", {
        
            method: "POST",
                
            headers: {
                "Content-Type": "application/json"
            },
            
            body: JSON.stringify(newStudente)
            })
            .then(data => {return data.json()})

        }else if (ruolo == "docente") {

            divMateria.removeAttribute("class", "d-none");
            
            let newDocente = new Docente(nome,cognome,ruolo);
        
            fetch("http://localhost:3000/docenti", {
        
            method: "POST",
                
            headers: {
                "Content-Type": "application/json"
            },
            
            body: JSON.stringify(newDocente)
            })
            .then(data => {return data.json()})
        
        }else if (ruolo == "-1"){
            alert("Devi selezionare un ruolo !");
        }
    }
}
btnInserisci.addEventListener("click", registraUtente);