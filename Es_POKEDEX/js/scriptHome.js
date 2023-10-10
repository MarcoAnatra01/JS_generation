
let btnLogin = document.querySelector("#btnLogin");

function login(){
    let username = document.querySelector("#username");

    localStorage.setItem("user", username.value);

    username.value = "";
    location.href = "./pokedex.html";
}
btnLogin.addEventListener("click", login);