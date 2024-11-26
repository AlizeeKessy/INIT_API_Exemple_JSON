
// necessaire pour certains types d'API (on pourrait mettre les infos d'authentification à l'interieur)
var requestOptions = {
  method: "GET",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow",
};
// /* Allons chercher un fichier JSON */
fetch("ryan-reynolds.json")
  .then((actor) => /* Une fois que le fichier est chargé */
     actor.json()) /* Convertissons le en json */
  .then((data) => {/* Une fois le fichier converti */
    console.log(data);
    createActor(data);/* Appelons notre fonction */
  });



const createActor = function (_data) {
  /* Références dans le document HTML */
  const actorName = document.getElementsByClassName("actor-name")[0];
  const actorPicture = document.getElementsByClassName("actor-picture")[0];
  const actorMovies = document.getElementsByClassName("actor-movies")[0];

  /* Populons le HTML avec le contenu du JSON */
  actorName.innerHTML = _data.firstname + " " + _data.lastname;
  actorPicture.src = _data.picture;

  let moviesList = "";
  for (var x = 0; x < _data.movies.length; x++) {
    let movie = _data.movies[x];
    moviesList += "<li>" + movie.name + " | " + movie.year + "</li>";
  }
 
  actorMovies.innerHTML = moviesList;
};
