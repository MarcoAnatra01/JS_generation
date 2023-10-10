
let filmJSON = '{"Title":"Barbie","Year":"2023","Rated":"PG-13","Released":"21 Jul 2023","Runtime":"114 min","Genre":"Adventure, Comedy, Fantasy","Director":"Greta Gerwig","Writer":"Greta Gerwig, Noah Baumbach","Actors":"Margot Robbie, Ryan Gosling, Issa Rae","Plot":"Barbie suffers a crisis that leads her to question her world and her existence.","Language":"English, Spanish","Country":"United States, United Kingdom","Awards":"2 wins & 1 nomination","Poster":"https://m.media-amazon.com/images/M/MV5BOWIwZGY0OTYtZjUzYy00NzRmLTg5YzgtYWMzNWQ0MmZiY2MwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.4/10"},{"Source":"Rotten Tomatoes","Value":"88%"},{"Source":"Metacritic","Value":"80/100"}],"Metascore":"80","imdbRating":"7.4","imdbVotes":"238,040","imdbID":"tt1517268","Type":"movie","DVD":"N/A","BoxOffice":"$541,907,382","Production":"N/A","Website":"N/A","Response":"True"}';

// trasforma questo JSON in un OBJ e inserisci nello html le varie informazioni nella posizione corretta

let film = JSON.parse(filmJSON);  // oggetto js

console.log(film);

function FilmOBJ(Actors, Director, Title, Poster, Ratings){
    this.Actors = Actors;
    this.Director = Director;
    this.Title = Title;
    this.Poster = Poster;
    this.Ratings = Ratings;
}


let barbieFilm = new FilmOBJ(film.Actors, film.Director, film.Title, film.Poster, film.Ratings);

// l'attributo film.Ratings è un array di 3 oggetti (ogni oggetto ha 2 proprietà: Source e Value)

let titolo = document.querySelector("#titolo");
let locandina = document.querySelector("#locandina");
let attori = document.querySelector("#attori");
let regista = document.querySelector("#regista");
let valutazioni = document.querySelector("#valutazioni");

titolo.innerHTML = barbieFilm.Title;
locandina.setAttribute("src", barbieFilm.Poster);
attori.innerHTML = "<strong>Attori:</strong> " + barbieFilm.Actors;
regista.innerHTML = "<strong>Regista:</strong> " + barbieFilm.Director;

barbieFilm.Ratings.forEach(rating => {

    // ciclo
    valutazioni.innerHTML += `<li> Source: ${rating.Source} - Value: ${rating.Value} </li>`;
});