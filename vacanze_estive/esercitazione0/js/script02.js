let strumenti = ["computer", "mouse", "tablet", "tastiera", "cuffie", "webcam"];

let demo = document.querySelector("#demo");

demo.setAttribute("class", "senzaPallini");

for (let i = 0; i < strumenti.length; i++) {

    if (i == (strumenti.length - 1)) {
        demo.innerHTML += `<li>${strumenti[i]}</li>.`;
    }else{
        demo.innerHTML += `<li>${strumenti[i]}</li>,`;
    }
}

// nodelist
let elementi = document.querySelectorAll("#demo li");

[...elementi].forEach(li => {
    li.setAttribute("class", "txtBlue");
});

