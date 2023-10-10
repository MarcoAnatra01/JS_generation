
let formReg = document.querySelector("#formReg");

let nome = document.querySelector("#nome");
let eta = document.querySelector("#eta");

let demo = document.querySelector("#demo");

// con il tag input type submit si usa l'evento submit
// non si usa più l'evento click come per i tag button

// l'evento submit è legato a TUTTI GLI ELEMENTI DEL FORM 
// l'evento click è legato solo all'elemento button

// formReg.nome.value
// formReg.eta.value
// nome ed eta si riferiscono all'attributo name dei tag input

// in alternativa si può recuperare con querySelector ogni campo come negli esempi precedenti


function mostraDati(event){

    // controlla i valori dei campi 
    // scrive nel demo i dati inseriti nel form

    if (formReg.nome.value == "") {
        demo.innerHTML = "Nome non inserito !";

        event.preventDefault();
        // previene l'invio del form se il nome non è inserito
    }

    if (formReg.eta.value == "") {
        demo.innerHTML = "Età non inserita !"

        event.preventDefault();
        // previene l'invio del form se l'età non è inserita
    }

    if (formReg.nome.value == "" && formReg.eta.value == "") {
        demo.innerHTML = "Form vuoto, compila i campi";

        event.preventDefault();
        // previene l'invio del form se è vuoto
    }

    if (formReg.nome.value != "" && formReg.eta.value != "") {
        
        demo.innerHTML = `<strong>Ecco i dati che hai inserito:</strong> <br>Nome: ${formReg.nome.value} - età: ${formReg.eta.value}`;

        // il form è stato compilato e deve essere inviato
        // NON ci va il preventDefault
    }

    console.log(event);  // event in questo caso è submit

    event.preventDefault(); 
    // questo preventDefault serve per evitare che venga ricaricata la pagina o che venga inseguita l'url della action
    // previene il default dell'event submit
    // ci permette così di vedere ciò che viene scritto nel div demo
}



formReg.addEventListener("submit", mostraDati);