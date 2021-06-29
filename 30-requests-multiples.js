const API_URL = 'https://pokeapi.co/api/v2/';
const POKEMON_URL = 'pokemon/:id';
const OPTS = { crossDomain: true };

function obtenerPokemon(id, callback) {
   const url = `${API_URL}${POKEMON_URL.replace(':id', id)}`;

   $.get(url, OPTS, function (pokemon) {
      console.log(`Hola soy un pokemon llamado ${pokemon.name}`);
   });

   if (callback) {
      callback();
   }
}

obtenerPokemon(1, function () {
   obtenerPokemon(2, function () {
      obtenerPokemon(3, function () {
         obtenerPokemon(4);
      });
   });
});
