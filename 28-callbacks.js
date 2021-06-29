/* const API_URL = "https://swapi.dev/api/";
const PEOPE_URL = "people/:id";

const LUKE_URL = `${API_URL}${PEOPE_URL.replace(":id", 1)}`;
const OPTS = { crossDomain: true };

$.get(LUKE_URL, OPTS, function () {
   console.log(arguments);
}); */

const API_URL = 'https://pokeapi.co/api/v2/';
const POKEMON_URL = 'pokemon/:id';

const LUKE_URL = `${API_URL}${POKEMON_URL.replace(':id', 'ditto')}`;
const OPTS = { crossDomain: true };

const onResponse = function (pokemon) {
   console.log(`Hola soy un pokemon llamado ${pokemon.name}`);
};

$.get(LUKE_URL, OPTS, onResponse);
