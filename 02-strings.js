var nombre = 'Héctor',
    apellido = 'Marcos';

var nombreEnMayusculas = nombre.toUpperCase(); //string a mayusculas

var apellidoEnMinusculas = apellido.toLowerCase(); //string a minusculas

var primeraLetraDelNombre = nombre.charAt(0); //caracter en posicion

var cantidadDeLetasDelNombre = nombre.length; //medir string

var nombreCompleto = nombre + ' ' + apellido; //concatenar strings

var nombreCompletoInterpolado = `${nombre} ${apellido}`; //interpolacion de texto

var str = nombre.substr(1, 3); //retorna partes de un string, dandole donde se inicia y cuantos caracteres queremos

//Desafio, mostrar la última letra de nombre

var ultimaLetra = nombre.charAt(nombre.length - 1);
