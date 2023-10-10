
function Utente2(nomeCognome2, codiceFiscale2, eta2) {
    this.nomeCognome2 = nomeCognome2;
    this.codiceFiscale2 = codiceFiscale2;
    this.eta2 = eta2;

    this.toString2 = function(){
        let presentazione2 = `<strong>Nome e Cognome:</strong> ${this.nomeCognome2} || 
        <strong>Codice Fiscale:</strong> ${this.codiceFiscale2} ||
        <strong>eta:</strong> ${this.eta2}`;
        
        return presentazione2;
    }
}    

    // FORM 2

    let demo2 = document.getElementById("demo2");
    let feed2 = document.getElementById("feed2");
    let btn2 = document.getElementById("btn2");



    // JS DOCS 
    // servono per specificare a js i tipi di dato dei parametri che stiamo utilizzando
    // questo perchè js è un linguaggio DEBOLMENTE TIPIZZATO
    /**
     * 
     * @param {String} nomeCognome2 
     * @param {String} codiceFiscale2
     * @param {Number} eta2 
     * @returns 
     */

    function controllaCampi2(nomeCognome2,codiceFiscale2, eta2){

        feed2.innerHTML = ""; 

        // converto nomeCognome in un array 
        // splitta ogni volta che trova uno spazio

        let nomeCognomeArr = nomeCognome2.split(" ");
    
        if (nomeCognomeArr.length >= 2 &&  codiceFiscale2.length == 16 && Number(eta2) >= 18) {
    
            feed2.innerHTML = "<strong>" + "Dati inviati con successo" + "</strong>";
            return true;
    
        }else{
    
            if (nomeCognomeArr.length <= 1) {
                feed2.innerHTML += "Devi inserire sia nome che cognome <br>";
            }
    
            if (codiceFiscale2.length != 16) {
                feed2.innerHTML += "Codice Fiscale non corretto: deve avere 16 caratteri! <br>";
            }

            if (codiceFiscale2 == "") {
                feed2.innerHTML += "Codice Fiscale non inserito <br>";
            }
            
            if (Number(eta2) < 18) {
                feed2.innerHTML += "Devi essere maggiorenne per registrarti <br>";
            }
            
            if(eta2 == ""){
                feed2.innerHTML += "Età non inserita correttamente";
                return false;
            }
        }
    }

    function pulisciCampi2(){
        document.getElementById("nomeCognome2").value = "";
        document.getElementById("codiceFiscale2").value = "";
        document.getElementById("eta2").value = "";
    }



    function nuovoUtente2(){

        let nomeCognome2 = document.getElementById("nomeCognome2");
        let codiceFiscale2 = document.getElementById("codiceFiscale2");
        let eta2 = document.getElementById("eta2");


        if(controllaCampi2(nomeCognome2.value, codiceFiscale2.value, eta2.value)){

            let nuovoUtente2 = new Utente2(nomeCognome2.value, codiceFiscale2.value, eta2.value);

            demo2.innerHTML += "<li>" + nuovoUtente2.toString2() +"</li>";

            // una volta stampato l'utente, pulisco i campi input
            pulisciCampi2();
        }
    }

    btn2.addEventListener("click", nuovoUtente2);



