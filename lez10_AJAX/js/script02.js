
let demo = document.querySelector("#demo");

//------------------------------------------------------------
// COME API QUI USO - https://dummyjson.com/docs/products
//------------------------------------------------------------

fetch("https://dummyjson.com/users")
.then(data =>{
    return data.json();
})

.then(response => {
    console.log(response);

    // la proprietà users è sempre un array di oggetti
    stampaCard(response.users);
})


/**
 * 
 * @param {Array} utenti 
 */
function stampaCard(utenti){   

    utenti.forEach(utente =>{
        demo.innerHTML += 
        `<strong> <li> ${utente.firstName} ${utente.lastName} </li> 
        </strong> <br>
        <img src='${utente.image}' class='imgDim'> <br>
        Indirizzo: <p> ${utente.address.address} - ${utente.address.city} - ${utente.address.state} </p>
        <hr>`;
    })
}