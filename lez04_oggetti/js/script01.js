
// NOTAZIONE LETTERALE :
// pemette di creare un solo oggetto alla volta

let user = {
    name: 'Pippo',
    lastname: 'Baudo',
    age: 90,

    conduciSanremo: function(){
        return "Sto conducendo il festival di Sanremo";
    },

    presentazione(){
       return `Sono ${user.name} e ho condotto Sanremo`;
    }
}

// Accedo alle proprietà dell'oggetto 

console.log("nome dello user : " + user.name + " " + user.lastname);

console.log(user.presentazione());

let admin = {
    username: 'megatron65',
    password: 'psw',
    role: 'admin',

    gestisciAccount(){
        this.role = 'basic';
    },

    modificaPassword(){
        this.password = 'newpsw';
    }
}
admin.gestisciAccount();
console.log("role aggiornato : " + admin.role);

admin.modificaPassword();
console.log("password aggiornata : " + admin.password);

