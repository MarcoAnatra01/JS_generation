
function Utente(nomeCognome, codiceFiscale, eta) {
    this.nomeCognome = nomeCognome;
    this.codiceFiscale = codiceFiscale;
    this.eta = eta;

    this.toString = function(){
        let presentazione = `<strong>Nome e Cognome:</strong> ${this.nomeCognome} || 
        <strong>Codice Fiscale:</strong> ${this.codiceFiscale} ||
        <strong>eta:</strong> ${this.eta}`;
        
        return presentazione;
    }
}    

    // FORM 1

    let demo1 = document.getElementById("demo1");
    let feed1 = document.getElementById("feed1");
    let btn1 = document.getElementById("btn1");

    // recupero i campi come variabili globali (recupero i tag input)
    let nomeCognome = document.getElementById("nomeCognome");
    let codiceFiscale = document.getElementById("codiceFiscale");
    let eta = document.getElementById("eta");



    function controllaCampi(nomeCognome,codiceFiscale, eta){

        feed1.innerHTML = ""; 

        // converto nomeCognome in un array 
        // splitta ogni volta che trova uno spazio

        let nomeCognomeArr = nomeCognome.split(" ");
    
        if (nomeCognomeArr.length >= 2 &&  codiceFiscale.length == 16 && Number(eta) >= 18) {
    
            feed1.innerHTML = "<strong>" + "Dati inviati con successo" + "</strong>";
            return true;
    
        }else{
    
            if (nomeCognomeArr.length <= 1) {
                feed1.innerHTML += "Devi inserire sia nome che cognome <br>";
            }
    
            if (codiceFiscale.length != 16) {
                feed1.innerHTML += "Codice Fiscale non corretto: deve avere 16 caratteri! <br>";
            }

            if (codiceFiscale == "") {
                feed1.innerHTML += "Codice Fiscale non inserito <br>";
            }
            
            if (Number(eta) < 18) {
                feed1.innerHTML += "Devi essere maggiorenne per registrarti <br>";
            }
            
            if(eta == ""){
                feed1.innerHTML += "Età non inserita correttamente";
                return false;
            }
        }
    }

    function pulisciCampi(){
        nomeCognome.value = "";
        codiceFiscale.value = "";
        eta.value = "";
    }



    function nuovoUtente(){
        if(controllaCampi(nomeCognome.value, codiceFiscale.value, eta.value)){

            let nuovoUtente = new Utente(nomeCognome.value, codiceFiscale.value, eta.value);

            demo1.innerHTML += "<li>" + nuovoUtente.toString() +"</li>";

            // una volta stampato l'utente, pulisco i campi input
            pulisciCampi();
        }
    }

    btn1.addEventListener("click", nuovoUtente);



