/* const API_URL = "https://swapi.dev/api/";
const PEOPE_URL = "people/:id";

const LUKE_URL = `${API_URL}${PEOPE_URL.replace(":id", 1)}`;
const OPTS = { crossDomain: true };

$.get(LUKE_URL, OPTS, function () {
   console.log(arguments);
}); */

const API_URL = 'https://pokeapi.co/api/v2/';
const POKEMON_URL = 'pokemon/:id';

const OPTS = { crossDomain: true };

const onResponse = function (pokemon) {
   console.log(`Hola soy un pokemon llamado ${pokemon.name}`);
};

function obtenerPokemon(id) {
   const url = `${API_URL}${POKEMON_URL.replace(':id', id)}`;
   $.get(url, OPTS, onResponse);
}

obtenerPokemon(1);
obtenerPokemon(2);
obtenerPokemon(3);

//podemos hacer varias requests al mismo tiempo, pero no podemos saber
//en que orden nos llegaran las respuestas, eso depende del servidor

/* for (i = 1; i < 100; i++) {
   obtenerPokemon(i);
} */
