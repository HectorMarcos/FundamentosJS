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

var ids = [1, 2, 3, 4, 5, 6, 7];

/* var promesas = ids.map(function (id){
   return obtenerPokemon(id)
}) */

var promesas = ids.map((id) => obtenerPokemon(id));

Promise.all(promesas)
   .then((personajes) => console.log(personajes))
   .catch(onError);

/* obtenerPokemon(1)
   .then((pokemon) => {
      console.log(`Hola soy un pokemon llamado ${pokemon.name}`);
      return obtenerPokemon(2);
   })
   .then((pokemon) => {
      console.log(`Hola soy un pokemon llamado ${pokemon.name}`);
      return obtenerPokemon(3);
   })
   .then((pokemon) => {
      console.log(`Hola soy un pokemon llamado ${pokemon.name}`);
      return obtenerPokemon(4);
   })
   .then((pokemon) => {
      console.log(`Hola soy un pokemon llamado ${pokemon.name}`);
      return obtenerPokemon(5);
   })
   .then((pokemon) => {
      console.log(`Hola soy un pokemon llamado ${pokemon.name}`);
      return obtenerPokemon(6);
   })
   .then((pokemon) => {
      console.log(`Hola soy un pokemon llamado ${pokemon.name}`);
      //return obtenerPokemon(2);
   })
   .catch(onError);
 */
