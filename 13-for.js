var persona = {
    nombre: 'Héctor',
    apellido: 'Marcos',
    edad: 32,
    peso: 65,
};

console.log(
    `Al inicio del año ${persona.nombre} pesa ${persona.peso.toFixed(1)} kg`
);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANNIO = 365;

const aumentarDePeso = (persona) => {
    persona.peso += INCREMENTO_PESO;
};
const adelgazar = (persona) => {
    persona.peso -= INCREMENTO_PESO;
};

for (var i = 1; i <= DIAS_DEL_ANNIO; i++) {
    var random = Math.random();
    if (random < 0.25) {
        //aumenta de peso
        aumentarDePeso(persona);
    } else if (random < 0.5) {
        //adelgazar
        adelgazar(persona);
    }
}

console.log(
    `Al final del año ${persona.nombre} pesa ${persona.peso.toFixed(1)} kg`
);
