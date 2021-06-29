var persona = {
    nombre: 'Héctor',
    apellido: 'Marcos',
    edad: 32,
    peso: 65,
};

console.log(
    `Al inicio del año ${persona.nombre} pesa ${persona.peso.toFixed(1)} kg`
);

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_ANNIO = 365;

/* const aumentarDePeso = (persona) => {
    persona.peso += INCREMENTO_PESO;
};
const adelgazar = (persona) => {
    persona.peso -= INCREMENTO_PESO;
}; */

const aumentarDePeso = (persona) => (persona.peso += INCREMENTO_PESO);
const adelgazar = (persona) => (persona.peso -= INCREMENTO_PESO);
const comeMucho = () => Math.random() < 0.3;
const haceDeporte = () => Math.random() < 0.4;

const META = persona.peso - 3;

var dias = 0;

while (persona.peso > META) {
    //debugger;
    if (comeMucho()) {
        //aumentar de peso
        aumentarDePeso(persona);
    }
    if (haceDeporte()) {
        //adelgaza
        adelgazar(persona);
    }
    dias += 1;
}

console.log(`Pasaron ${dias} días hasta alcanzar el peso objetivo`);
