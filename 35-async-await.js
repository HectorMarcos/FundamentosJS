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

async function obtenerPokemons() {
   var ids = [1, 2, 3, 4, 5, 6, 7];
   var promesas = ids.map((id) => obtenerPokemon(id));
   try {
      var personajes = await Promise.all(promesas);
      console.log(personajes);
   } catch (id) {
      onError(id);
   }
}

obtenerPokemons();
