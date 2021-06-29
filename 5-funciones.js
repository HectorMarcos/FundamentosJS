var nombre = 'Héctor'; //variable global

function imprimirNombreEnMayusculas(n) {
    //n seria una variable local
    n = n.toUpperCase();
    console.log(n);
}

imprimirNombreEnMayusculas(nombre);
