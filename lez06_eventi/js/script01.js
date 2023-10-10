
let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");

let demo = document.querySelector("#demo");

function saluta(){
    demo.innerHTML += "ciao ";
}

// METODO NUOVO - sintassi:
// element.addEventListener("event", function);

// function NON è seguita dalle tonde ()
// la funzione seguita dalle () viene eseguita subito, alla lettura dello script

btn.addEventListener("click", saluta);



// FUNZIONI ANONIME

// btn2 è associato ad una funzione anonima

btn2.addEventListener("click", function(){
    demo.innerHTML += "ciao dalla funzione anonima "

    // posso anche richiamare altre funzioni create da me
    // saluta();
});




// funzione anonima che necessita parametri

let risultato = document.querySelector("#risultato"); //div

let btnCalc = document.querySelector("#btnCalc");

function moltiplica(num1, num2){
    
    let prodotto = num1 * num2;

    return prodotto;
}

btnCalc.addEventListener("click", function(){

    risultato.innerHTML = "";  // div

    let num1 =Number(document.querySelector("#num1").value);
    let num2 =Number(document.querySelector("#num2").value);

    // salvo in mioRisultato il contenuto della variabile prodotto 
    let mioRisultato = moltiplica(num1, num2);

    // oppure si può non usare moltiplica()
    // let mioRisultato = num1 * num2;

    // il vantaggio di avere una funzione a parte è che può essere richiamata ovunque

    risultato.innerHTML += "risultato moltiplicazione = " + mioRisultato;

});

