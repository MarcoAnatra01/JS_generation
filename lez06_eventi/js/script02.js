
let strobo = document.querySelector("#strobo");

let demo = document.querySelector("#demo");



// soluzione più immediata

/*
strobo.addEventListener("mouseover", function(){

    this.classList.add("sfondo");

    // this fa riferimento a strobo, dato che è l'oggetto su cui applichiamo addEventListener
});

strobo.addEventListener("mouseout", function(){

    this.classList.remove("sfondo");
});
*/




// soluzione con FUNZIONI DENOMINATE - soluzione da non adottare
// queste funzioni si possono usare per un solo elemento

/*
function mettiSfondo(){

    strobo.classList.add("sfondo");
}

function togliSfondo(){

    strobo.classList.remove("sfondo");
}

strobo.addEventListener("mouseover", mettiSfondo);

strobo.addEventListener("mouseout", togliSfondo);
*/





// soluzione con FUNZIONI GENERICHE - SOLUZIONE MIGLIORE
// le funzioni così si possono riutilizzare per altri elementi della pagina

function mettiSfondo(elemento){
    elemento.classList.add("sfondo");
}

function togliSfondo(elemento){
    elemento.classList.remove("sfondo");
}


// evento mouseover, mouse che va sopra l'elemento

// evento mouseout, mouse che si sposta fuori dall'elemento

strobo.addEventListener("mouseover", function(){
    mettiSfondo(this);
});


strobo.addEventListener("mouseout", function(){
    togliSfondo(this);
});