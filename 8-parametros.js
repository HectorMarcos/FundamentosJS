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

function imprimirNombreEnMayusculas(persona) {
    //var nombre = persona.nombre
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(hector);
imprimirNombreEnMayusculas(dario);
// imprimirNombreEnMayusculas({ nombre: 'Pepito' });
// imprimirNombreEnMayusculas({ apellido: 'Gomez' });

//Reto imprimir nombre y edad en un string Hola, me llamo Hector y tengo 32 años

function imprimirNombreYEdad(persona) {
    var { nombre, edad } = persona;
    /* var nombre = persona.nombre;
    var edad = persona.edad; */
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreYEdad(hector);
imprimirNombreYEdad(dario);

function cumpleaños(persona) {
    /* persona.edad = persona.edad +1 */
    return {
        ...persona, //para evitar modificar el objeto original
        edad: persona.edad + 1,
    };
    persona.edad += 1;
}
