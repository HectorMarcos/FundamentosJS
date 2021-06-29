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

function imprimirSiEsMayorDeEdad(persona) {
    if (persona.edad >= 18) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}

imprimirSiEsMayorDeEdad(hector);
