var hector = {
    nombre: 'Hector',
    apellido: 'Marcos',
    altura: 1.77,
    cantidadDeLibros: 111,
};

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78,
};

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.87,
    cantidadDeLibros: 132,
};

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.7,
    cantidadDeLibros: 90,
};

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91,
};

var paula = {
    nombre: 'Paura',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182,
};

const esAlta = ({ altura }) => altura > 1.8;

var personas = [hector, alan, martin, dario, vicky, paula];

var personasAltas = personas.filter(esAlta);

const pasarAlturaACms = (persona) => ({
    ...persona,
    altura: persona.altura * 100,
});

var personasCms = personas.map(pasarAlturaACms);

/* var acum = 0;

for (i = 0; i < personas.length; i++) {
    acum = acum + personas[i].cantidadDeLibros;
} 

console.log(`El total de libros es ${acum}`); */

const reducer = (acum, persona) => {
    return acum + persona.cantidadDeLibros;
};

var totalDeLibros = personas.reduce(reducer, 0);

console.log(`El total de libros es ${totalDeLibros}`);
