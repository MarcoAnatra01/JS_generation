
// EVENTI FOCUS & BLUR

// eventi usati sui campi form da compilare

// focus:
// si verifica quando clicco in un campo input

// blur:
// opposto di focus

// appena metto a fuoco il campo input mi viene suggerito qualcosa

let elNome = document.querySelector("#nome"); // input#nome

let feed = document.querySelector("#feed");

let btn = document.querySelector("#btn");

elNome.addEventListener("focus", function(){

    console.log("il campo è stato messo a fuoco");

    feed.innerHTML = "Il nome deve contenere almeno 5 caratteri";
});

elNome.addEventListener("blur", function(){
    
    console.log("campo non più a fuoco");

    if (elNome.value.length < 5) {
        feed.textContent = "Il nome ha meno di 5 caratteri !";

    }else if(elNome.value.length == 0){
        feed.textContent = "Non hai inserito il nome !"

    }else{
        feed.innerHTML = `<span>&#9989;</span>`;
    }
});
