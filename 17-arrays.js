var hector = {
    nombre: 'Hector',
    apellido: 'Marcos',
    altura: 1.77,
};

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
};

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.87,
};

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.7,
};

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
};

var paula = {
    nombre: 'Paura',
    apellido: 'Barros',
    altura: 1.76,
};

var personas = [hector, alan, martin, dario, vicky, paula];

// personas[0].altura <--- Nos retorna la altura del primer objeto del array
// persona[0]['altura'] <- Nos retorna la altura del primer objeto del array

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura} metros`);
}
