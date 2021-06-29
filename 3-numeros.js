var edad = 32;

//edad = edad + 1;

edad += 1;

var peso = 75;

//peso = peso - 2;

peso -= 2;

var sandwich = 1;

//peso = peso + sandwich;

peso += sandwich;

var deporte = 3;

//peso = peso - deporte;

peso -= deporte;

var precioDeVino = 200.3;

var total = precioDeVino * 3; //los decimales no son precisos

var totalPreciso = (precioDeVino * 100 * 3) / 100;

var totalPrecisoMath = Math.round(precioDeVino * 100 * 3) / 100;

var totalStr = totalPrecisoMath.toFixed(2); //para tener dos decimales

var totalStrToNumber = parseFloat(totalStr);

var pizza = 8;

var persona = 2;

var cantidadDePorcionesPorPersona = pizza / persona;
