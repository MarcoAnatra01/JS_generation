
const URL = "http://localhost:3000/posts";

let btnPost = document.querySelector("#btnPost");

let nuovoPost = {
    title: "java",
    author: "Mauro"
}


function caricaNuovoPost(){

    fetch(URL, {

        // se voglio usare GET non devo specificare queste cose
        method: "POST",
        
        // l'intestazione comunica al server la struttura del dato che gli passo
        headers: {
            "Content-Type": "application/json"
        },
        
        body: JSON.stringify(nuovoPost) 
    })
    .then(data =>{
        return data.json();
    })

    .then(response =>{
        
        console.log(response, "registrato");
    })
}

btnPost.addEventListener("click", caricaNuovoPost);