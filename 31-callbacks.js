const API_URL = 'https://pokeapi.co/api/v2/';
const POKEMON_URL = 'pokemon/:id';
const OPTS = { crossDomain: true };

function obtenerPokemon(id, callback) {
   const url = `${API_URL}${POKEMON_URL.replace(':id', id)}`;

   $.get(url, OPTS, callback).fail(function () {
      console.log(`Sucedió un error. No se pudo obtener el pokemon ${id}`);
   });
}

obtenerPokemon(1, function (pokemon) {
   console.log(`Hola soy un pokemon llamado ${pokemon.name}`);

   obtenerPokemon(2, function (pokemon) {
      console.log(`Hola soy un pokemon llamado ${pokemon.name}`);

      obtenerPokemon(3, function (pokemon) {
         console.log(`Hola soy un pokemon llamado ${pokemon.name}`);

         obtenerPokemon(4, function (pokemon) {
            console.log(`Hola soy un pokemon llamado ${pokemon.name}`);
         });
      });
   });
});
