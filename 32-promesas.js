const API_URL = 'https://pokeapi.co/api/v2/';
const POKEMON_URL = 'pokemon/:id';
const OPTS = { crossDomain: true };

function obtenerPokemon(id) {
   return new Promise((resolve, reject) => {
      const url = `${API_URL}${POKEMON_URL.replace(':id', id)}`;

      $.get(url, OPTS, function (data) {
         resolve(data);
      }).fail(() => reject(id));
   });
}

function onError(id) {
   console.log(`Sucedio un error al obtener el pokemo ${id}`);
}

obtenerPokemon(1)
   .then(function (pokemon) {
      console.log(`Hola soy un pokemon llamado ${pokemon.name}`);
   })
   .catch(onError);
