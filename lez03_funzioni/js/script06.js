const demo = document.getElementById("demo");

const btn = document.getElementById("btn");

const btnColor = document.getElementById("btnColor");

function inviaTweet(){
    let messaggio = document.getElementById("messaggio").value;

    if (messaggio == "") {
        demo.innerHTML = "Non hai scritto niente !"
    }else{
        demo.innerHTML = "<p>" + messaggio + "</p>";
    }

    // cancello ciò che scrivo nella textarea :
    document.getElementById("messaggio").value = "";
}

// le funzioni degli EventListener non hanno le parentesi tonde

// elementoHTML.addEventListener("evento", funzione);

btn.addEventListener("click", inviaTweet);


function cambiaColore(){

    if (demo.hasAttribute("class")) {

        // se demo ha già l'attributo class, rimuovilo
        demo.removeAttribute("class")
    }else{
        // altrimenti setta l'attributo class con il valore txtBlue
        // setAttribute() setta un attributo html
         
        demo.setAttribute("class", "txtBlue");
    }
}
btnColor.addEventListener("click", cambiaColore);