
let boxPokedex = document.querySelector("#boxPokedex");


let myPokedexObjJS = JSON.parse(localStorage.getItem("myPokedex"));
let arrayPokemon = myPokedexObjJS.myPokedexArray;

// myPokedexObjJS.myPokedexArray.forEach(pokemonObj => {
    
    // });



for (let i = 0; i <= 3; i++) {
    let cardStructure = `<div class="card"><img src="" class="card-img-top" alt="pokemon_i mage"><div class="card-body"><h5 class="card-title"><strong>${arrayPokemon[i].nome}</strong></h5><p class="card-text"></p></div></div>`;

    let cardPokemon = document.createElement("div");
    cardPokemon.setAttribute("class", "cardPokemon col-md-6 col-lg-3");
    cardPokemon.innerHTML = cardStructure;

    // let btnModifica = document.createElement("button");
    // btnModifica.setAttribute("class", "btnModifica");
    // btnModifica.setAttribute("class", "btn btn-warning border border-dark ms-3");
    // btnModifica.setAttribute("type", "button");
    // btnModifica.setAttribute("data-bs-toggle", "modal");
    // btnModifica.setAttribute("data-bs-target", "#updateModal");
    // btnModifica.innerHTML = "Modifica";


    // `<button type="button" class="btn btn-warning border border-dark ms-3 mb-2" data-bs-toggle="modal" data-bs-target="#updateModal">
    //     Modifica
    // </button>
    // <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
    //     <div class="modal-dialog">
    //     <div class="modal-content">
    //         <div class="modal-header">
    //             <h1 class="modal-title fs-4 text-warning" id="updateModalLabel">Update info</h1>
    //             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //         </div>
    //         <div class="modal-body p-4">
    //         <h1 class="fs-5 text-dark mb-4">Modifica info pokemon</h1>

    //         <form>
    //             <!-- nickname -->
    //             <div class="form-outline mb-4">
    //                 <label class="form-label" for="nickname">nickname</label>
    //                 <input type="text" id="nickname" class="form-control" />
    //             </div>

    //             <!-- address -->
    //             <div class="form-outline mb-4">
    //                 <label class="form-label" for="address">address</label>
    //                 <input type="text" id="address" class="form-control" />
    //             </div>

    //             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annulla</button>

    //             <!-- Submit button -->
    //             <button type="submit" id="btnUpdateInfo" class="btn btn-outline-warning">Conferma</button>
    //         </form>
    //         </div>
    //     </div>
    //     </div>
    // </div>`;


    let modalStructure = 
    `<button type="button" class="btn btn-warning border border-dark ms-3 mb-2" data-bs-toggle="modal" data-bs-target="#updateModal">Modifica</button><div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h1 class="modal-title fs-4 text-warning" id="updateModalLabel">Update info</h1><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body p-4"><h1 class="fs-5 text-dark mb-4">Modifica info pokemon</h1><form><!-- nickname --><div class="form-outline mb-4"><label class="form-label" for="nickname">nickname</label><input type="text" id="nickname" class="form-control" /></div><!-- address --><div class="form-outline mb-4"><label class="form-label" for="address">address</label><input type="text" id="address" class="form-control" /></div><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annulla</button><!-- Submit button --><button type="submit" id="btnUpdateInfo" class="btn btn-outline-warning">Conferma</button></form></div></div></div></div>`;

    let updateModal = document.createElement("div");
    updateModal.innerHTML = modalStructure;
    // updateModal.prepend(btnModifica);

    let btnUpdateInfo = updateModal.querySelector("#btnUpdateInfo");
    btnUpdateInfo.addEventListener("click", function(){
        console.log(btnUpdateInfo);
    })

    let btnLocalizza = document.createElement("button");
    btnLocalizza.setAttribute("class", "btnLocalizza");
    btnLocalizza.setAttribute("class", "btn btn-outline-primary border border-dark ms-3");
    btnLocalizza.innerHTML = "Localizza";

    let btnRemovePokemon = document.createElement("button");
    btnRemovePokemon.setAttribute("class", "btnRemovePokemon");
    btnRemovePokemon.setAttribute("class", "btn btn-danger border border-dark ms-3");
    btnRemovePokemon.innerHTML = "rimuovi";

    let card = cardPokemon.firstElementChild;
    let imgPokemon = card.firstElementChild;
    imgPokemon.setAttribute("src", arrayPokemon[i].img);

    let cardBody = card.lastElementChild;
    // cardBody.appendChild(btnModifica);
    cardBody.appendChild(updateModal);
    cardBody.appendChild(btnLocalizza);
    cardBody.appendChild(btnRemovePokemon);

    let infoCard = cardBody.querySelector(".card-text");
    infoCard.innerHTML = arrayPokemon[i].descrizione;
        
    boxPokedex.appendChild(cardPokemon);

    btnLocalizza.addEventListener("click", function(){
        location.href = "./map.html";
    });
}
