
let mainHeader = document.querySelector(".mainHeader");

mainHeader.setAttribute("class", "mb-5");

let navbar = `
<nav class="navbar navbar-expand-lg bg-light">
            <div class="container">

              <a class="navbar-brand" href="#"><img src="img/pokemon.svg" style=" height: 3rem; width: auto; margin: 0.5rem;"></a>

              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-0 mb-2 mb-lg-0">

                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="./home.html">Home</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="./pokedex.html">Pokédex</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="./MyPokedex.html">My Pokédex</a>
                  </li>


                  <li class="nav-item">

                    <!-- Button trigger modal -->
                    <button type="button" id="logout_icon" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#logoutModal">
                      <img src="img/logout_icon.svg" style=" height: 2rem; width: auto">
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="logoutModal" tabindex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5 text-danger" id="logoutModalLabel">Logout</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                          <strong>Sei sicuro di voler uscire?</strong>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
                            <button type="button" id="btnEsciModal" class="btn btn-danger">Esci</button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </li>

                </ul>
              </div>
            </div>
          </nav>
`;

mainHeader.innerHTML = navbar;

function logout(){
  // cancello tutta la local storage, sia username che pokemon salvati
  localStorage.clear();

  fetch("http://localhost:3000/myPokedexArray/1", {
    method: "DELETE",
    headers:{
        "Content-Type": "application/json"
    }
  });
  fetch("http://localhost:3000/myPokedexArray/2", {
    method: "DELETE",
    headers:{
        "Content-Type": "application/json"
    }
  });
  fetch("http://localhost:3000/myPokedexArray/3", {
    method: "DELETE",
    headers:{
        "Content-Type": "application/json"
    }
  });

  // fetch("http://localhost:3000/myPokedexArray")
  // .then(data => {return data.json()})
  // .then(response => {
    // response.forEach(pokemon => {
    //   let urlDelete = "http://localhost:3000/myPokedexArray/" + pokemon.id;
      
    //   fetch(urlDelete, {
    //     method: "DELETE",
    //     headers:{"Content-Type": "application/json"}
    //   })
    //   .then(data =>{return data.json()})
    // });
  // })

  location.href = './home.html'; 
}

let navbarElement = mainHeader.firstElementChild;
let liArray = navbarElement.querySelectorAll("li.nav-item");

// recupero l'ultimo button del footer del modal 
let btnEsciModal = liArray[liArray.length - 1].querySelector("#btnEsciModal");

btnEsciModal.addEventListener("click", logout);

