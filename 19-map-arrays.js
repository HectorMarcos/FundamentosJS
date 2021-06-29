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

const esAlta = (persona) => {
    return persona.altura >= 1.8;
};

// const esAlta = persona => persona.altura >= 1.8

/* var personasAltas = personas.filter(function (persona) {
    return persona.altura >= 1.8;
}); */

var personasAltas = personas.filter(esAlta);

//console.log(personasAltas);

// reto filtrar personas bajas < 1.8

const esBaja = ({ altura }) => altura < 1.8;

var personasBajas = personas.filter(esBaja);

//console.log(personasBajas);

const pasarAlturaaCms = (persona) => {
    //persona.altura = persona.altura * 100
    //persona.altura *= 100;
    return {
        ...persona,
        altura: persona.altura * 100,
    };
};

var personasCms = personas.map(pasarAlturaaCms);

console.log(personasCms);
