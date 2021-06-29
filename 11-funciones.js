var hector = {
    nombre: 'Héctor',
    apellido: 'Marcos',
    edad: 32,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    coder: false,
};

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13,
};

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`);
    if (persona.ingeniero === true) {
        console.log('Ingeniero');
    } else {
        console.log('No es ingeniero');
    }
    if (persona.cocinero) {
        console.log('Ingeniero');
    }
    if (persona.cantante) {
        console.log('Cantante');
    }
    if (persona.dj) {
        console.log('DJ');
    }
    if (persona.guitarrista) {
        console.log('Guitarrista');
    }
    if (persona.coder) {
        console.log('Coder');
    }
}

// imprimirProfesiones(hector);

//reto Imprimir si es mayor de edad

const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}

imprimirSiEsMayorDeEdad(juan);
