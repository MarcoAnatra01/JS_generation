
const pokeapi = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0";

// endpoint di json server
const URL = "http://localhost:3000/myPokedexArray";

let listaPokemon = document.querySelector("#listaPokemon");

function Pokemon(nome, descrizione, img, nickname, address){
    this.nome = nome;
    this.descrizione = descrizione;
    this.img = img;
    this.nickname = nickname;
    this.address = address;
}

// let myPokedexObj = 
//                     {
//                         myPokedexArray: []
//                     };

// function addObjPokemon(obj){
//     myPokedexObj.myPokedexArray.push(obj);
// }

/**
 * 
 * @param {Array} results 
 */
function createListPokemon(results){

    results.forEach(pokemon =>{

        // let cardStructure = `
        // <div class="card col-md-6 col-lg-3">
        //     <img src="" class="card-img-top" alt="pokemon_image">
        //     <div class="card-body">
        //         <h5 class="card-title"> <strong> ${pokemon.name.toUpperCase()} </strong> </h5>
        //         <p class="card-text"></p>
        //     </div>
        // </div>`;


        let cardStructure = `
        <div class="card"><img src="" class="card-img-top" alt="pokemon_i mage"><div class="card-body"><h5 class="card-title"><strong>${pokemon.name.toUpperCase()}</strong></h5><p class="card-text"></p></div></div>`;

        let cardPokemon = document.createElement("div");
        cardPokemon.setAttribute("class", "cardPokemon col-md-4 col-lg-3");
        cardPokemon.innerHTML = cardStructure;

        let btnAddPokemon = document.createElement("button");
        btnAddPokemon.setAttribute("class", "btnAddPokemon");
        btnAddPokemon.setAttribute("class", "btn btn-outline-warning border border-dark ms-3");
        btnAddPokemon.innerHTML = "aggiungi";
        let card = cardPokemon.firstElementChild;
        let imgPokemon = card.firstElementChild;
        let cardBody = card.lastElementChild;
        cardBody.appendChild(btnAddPokemon);

        let infoCard = cardBody.querySelector(".card-text");
        
        listaPokemon.appendChild(cardPokemon);
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then(data => {
            return data.json();
        })
        .then(response => {
            infoCard.innerHTML += 
            `<li class="list-group-item"><strong>Type:</strong>${response.types[0].type.name}<br> <strong>Weight:</strong>${response.weight}</li>`;
            // <li class="list-group-item"><strong>Type:</strong> ${response.types[0].type.name}</li>

            imgPokemon.setAttribute("src", response.sprites.other["official-artwork"].front_default);
        })
        
        btnAddPokemon.addEventListener("click", function(event){

            // elemento su cui eseguo il click
            console.log(event.target);
            
            // if (localStorage.getItem("user") != null) {
                
            //     if (myPokedexObj.myPokedexArray.length == 3) {
            //         alert('Attenzione, puoi inserire al massimo 3 pokemon nel tuo Pokedex');
            //     }else{
            //         let clickedButton = event.target;
            //         let cardBodyParent = clickedButton.parentElement;
            //         let cardPokemonParent = cardBodyParent.parentElement;
                    
            //         let newPokemon = new Pokemon(cardBodyParent.firstElementChild.textContent, cardBodyParent.querySelector(".card-text").textContent
            //         , cardPokemonParent.firstElementChild.getAttribute("src"));
        
            //         addObjPokemon(newPokemon);
            //     }
            // }else{
            //     alert('Prima di creare il tuo Pokedex devi inserire il tuo username alla homepage');
            // }

            // let myPokedexJSON = JSON.stringify(myPokedexObj);
            // localStorage.setItem("myPokedex", myPokedexJSON);


            if (localStorage.getItem("user") != null) {

                // faccio una GET all'endpoint di json server e verifico se myPokedexArray è pieno (3 oggetti Pokemon)
                fetch(URL)
                .then(data => {
                    return data.json();
                })
                .then(response => {
                    if (response.length >= 3) {
                        alert('Attenzione, puoi inserire al massimo 3 pokemon nel tuo Pokedex');
                    }else{
                        let clickedButton = event.target;
                        let cardBodyParent = clickedButton.parentElement;
                        let cardPokemonParent = cardBodyParent.parentElement;
                        
                        // creo un oggetto Pokemon() assegnando come valori degli attributi le info prese dalla card contenente il btnAddPokemon su cui abbiamo cliccato
                        let newPokemon = new Pokemon(cardBodyParent.firstElementChild.textContent, cardBodyParent.querySelector(".card-text").textContent
                        , cardPokemonParent.firstElementChild.getAttribute("src"), null, null);

                        console.log("pokemon aggiunto: " + newPokemon);

                        // per evitare che la pagina venga ricaricata dopo aver aggiunto il pokemon
                        event.preventDefault();
                     
                        // faccio un POST per aggiungere l'oggetto creato
                        fetch(URL, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(newPokemon)
                        })
                        .then(data => {return data.json()})
                    }
                })
            }else{
                alert('Prima di creare il tuo Pokedex devi inserire il tuo username alla homepage');
            }
        }); // chiusura funzione anonima
    })
}

fetch(pokeapi)
.then(data => {
    return data.json();
})
.then(response => {
    
    createListPokemon(response.results);
})

