var hector = {
    nombre: 'Héctor',
    apellido: 'Marcos',
    edad: 32,
};

var dario = {
    nombre: 'Dario',
    apellido: 'Baena',
    edad: 23,
};

/* function imprimirNombreEnMayusculas(persona) {
    var nombre = persona.nombre.toUpperCase();
    console.log(nombre);
} */

/* function imprimirNombreEnMayusculas(persona) {
    console.log(persona.nombre.toUpperCase());
} */

function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(hector);
imprimirNombreEnMayusculas(dario);
// imprimirNombreEnMayusculas({ nombre: 'Pepito' });
// imprimirNombreEnMayusculas({ apellido: 'Gomez' });
