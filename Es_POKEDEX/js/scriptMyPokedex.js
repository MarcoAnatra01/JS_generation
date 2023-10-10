
let boxPokedex = document.querySelector("#boxPokedex");

// endpoint di json server
const URL = "http://localhost:3000/myPokedexArray";


// let myPokedexObjJS = JSON.parse(localStorage.getItem("myPokedex"));
// let arrayPokemon = myPokedexObjJS.myPokedexArray;

fetch(URL)
.then(data => {
    return data.json();
})
.then(response => {
    response.forEach(pokemon => {
        
        let cardStructure = `<div class="card"><img src="" class="card-img-top" alt="pokemon_i mage"><div class="card-body"><h5 class="card-title"><strong>${pokemon.nome}</strong></h5><p class="card-text"></p></div></div>`;
        
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
        
        // MODAL STRUCTURE
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
        //                 <input type="text" id="nickname" name="nickname" class="form-control" />
        //             </div>
        
        //             <!-- address -->
        //             <div class="form-outline mb-4">
        //                 <label class="form-label" for="address">address</label>
        //                 <input type="text" id="address" name="address" class="form-control" />
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
        `<button type="button" class="btn btn-warning border border-dark ms-3 mb-2" data-bs-toggle="modal" data-bs-target="#updateModal">
            Modifica
        </button>
        <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-4 text-warning" id="updateModalLabel">Update info</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                <h1 class="fs-5 text-dark mb-4">Modifica info pokemon</h1>
        
                <form>
                    <!-- nickname -->
                    <div class="form-outline mb-4">
                        <label class="form-label" for="nickname">nickname</label>
                        <input type="text" id="nickname" name="nickname" class="form-control" />
                    </div>
        
                    <!-- address -->
                    <div class="form-outline mb-4">
                        <label class="form-label" for="address">address</label>
                        <input type="text" id="address" name="address" class="form-control" />
                    </div>
        
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
        
                    <!-- Submit button -->
                    <button type="submit" id="btnUpdateInfo" class="btn btn-outline-warning">Conferma</button>
                </form>
                </div>
            </div>
            </div>
        </div>`;
        
        let updateModal = document.createElement("div");
        updateModal.innerHTML = modalStructure;
        // updateModal.prepend(btnModifica);
        
        // let btnUpdateInfo = updateModal.querySelector("#btnUpdateInfo");
        // btnUpdateInfo.addEventListener("click", function(){
        //     console.log(btnUpdateInfo);
        // })

        let formModal = updateModal.querySelector("form");
        formModal.addEventListener("submit", function(event){
            event.preventDefault();
            console.log(formModal);

            if (formModal.nickname.value.trim() != "" && formModal.address.value.trim() != "") {
                fetch(`${URL}/${pokemon.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "nickname": formModal.nickname.value,
                        "address": formModal.address.value
                    })
                })
                .then(data => {return data.json()})
            }
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
        imgPokemon.setAttribute("src", pokemon.img);
        
        let cardBody = card.lastElementChild;
        // cardBody.appendChild(btnModifica);
        cardBody.appendChild(updateModal);
        cardBody.appendChild(btnLocalizza);
        cardBody.appendChild(btnRemovePokemon);
        
        let infoCard = cardBody.querySelector(".card-text");

        let description = pokemon.descrizione;
        let descriptionArray = description.split(" ");
        let type = descriptionArray[0];
        let weight = descriptionArray[1];
        
        let weightArray = weight.split(":");
        let typeArray = type.split(":");
        console.log(typeArray);
        console.log(weightArray);

        infoCard.innerHTML = `<li class="list-group-item"><strong>${typeArray[0]}:</strong> ${typeArray[1]}<br> <strong>${weightArray[0]}:</strong> ${weightArray[1]}</li>`;

        if (pokemon.nickname != null) {
            infoCard.innerHTML += `<li class="list-group-item"><strong>nickname:</strong> ${pokemon.nickname}</li>`;
        }
        if (pokemon.address != null) {
            infoCard.innerHTML += `<li class="list-group-item"><strong>indirizzo:</strong> ${pokemon.address}</li>`;
        }
             
        boxPokedex.appendChild(cardPokemon);
        
        btnLocalizza.addEventListener("click", function(){
            location.href = "./map.html";
        });
    
    });  // chiusura foreach    
});  // chiusura secondo .then()    
