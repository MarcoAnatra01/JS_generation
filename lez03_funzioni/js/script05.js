
let demo = document.getElementById("demo");

function recuperaUsername(){

    let username = document.getElementById("username").value;

    return username;  // ritorna il valore del campo
}

function controlla(){

    let username = recuperaUsername();

    if(username == "") {
        return false;
    }else{
        return true;
    }
}

function stampa(username){

    demo.innerHTML = "Benvenuto " + username;
}

function eseguiTutto(){

    let flag = controlla();  // flag = true/false;

    if(flag) {
        stampa(recuperaUsername());
    }else{
        demo.innerHTML = " -- Error : username non fornito -- ";
    }
}
