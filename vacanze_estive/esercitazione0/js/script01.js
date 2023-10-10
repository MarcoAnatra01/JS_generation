let nome = "Marco";
let eta = 21;
let isOnline = true;

console.log(`nome: ${nome}
eta: ${eta}
isOnline: ${isOnline}`);

let demo = document.querySelector("#demo");

demo.innerHTML += `<ul><li>nome: ${nome}</li>
                   <li>eta: ${eta}</li> 
                   <li>stato isOnline: ${isOnline}</li></ul>`