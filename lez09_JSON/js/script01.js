
// oggetto js con notazione letterale

let studente = {
    nome: "Marco",
    cognome: "Anatra",
    mail: "anatra.marco@gmail.com",
    eta: 21,
    id: 1
}


// converto l'oggetto js in un JSON

let studenteJSON = JSON.stringify(studente);

console.log(studenteJSON);





// la conversione stringify() funziona anche con oggetti creati tramite funzione costruttore

function Docente(id, nome, cognome, materia){
    this.id = id;
    this.nome = nome;
    this.cognome = cognome;
    this.materia = materia;
}

let docente = new Docente(1, "Paolo", "Rossi", [  // array di oggetti
    {
        idMateria: 0,
        nomeMateria: "html",
        ore: 54
    },
    {
        idMateria: 1,
        nomeMateria: "css",
        ore: 53
    }
]);

let docenteJSON = JSON.stringify(docente);

console.log(docenteJSON);







function User(id, nickname, role, info, data){
    this.id = id;
    this.nickname = nickname;
    this.role = role;
    this.info = info;
    this.data = data;
}

let user = new User(2, "pippo765", "admin", [  // info: array di oggetti
    {
        nome: "mario", 
        cognome: "rossi", 
        accountAssociati: 5,
        coloriPreferiti: ["azzurro", "giallo", "rosso"]
    },
    {
        nomeAlternativo: "luca", 
        cognomeAlternativo: "bianchi", 
        accountAssociati: 1,
        coloriPreferiti: ["nero", "rosa"]
    } ] // chiusura proprietà info
    , "29/08/23");  // ultima proprietà


let userJSON = JSON.stringify(user);    

console.log(userJSON);




// CONVERSIONE JSON - object js

// la composizione di un JSON a mano non si fa di solito
// al massimo può capitare di modificarli ma non scriverli da zero
// qua lo faccio solo per fare l'esempio di conversione


// oggetto JSON

let adminJSON = '{"nome": "Anna", "role": "admin", "id": 0, "attivo": true}';  

console.log(adminJSON);


// ricevo la stringa JSON e la trasformo in un oggetto js

let admin = JSON.parse(adminJSON);

console.log(admin);  // oggetto js completo

console.log(admin.nome);
console.log(admin.role);


// "mappo" l'oggetto js admin per avere dei suggerimenti quando scrivo 

function AdminOBJ(nome, role, id, attivo){
    this.nome = nome;
    this.role = role;
    this.id = id;
    this.attivo = attivo;
}

let mioAdminObj = new AdminOBJ(admin.nome, admin.role, admin.id, admin.attivo);

console.log(mioAdminObj.nome);
