// DISCLAIMER !! JS No soporta la herencia como tal, existe la herencia
// prototipal

function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () {};
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn();
    prototipoHijo.prototype.constructor = prototipoHijo;
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
};

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8;
};

function Desarrollador(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
    console.log(
        `Hola me llamo ${this.nobmre} ${this.apellido} y soy desarrollador`
    );
};

/* var hector = new Persona('Hector', 'Marcos', 1.9);
var erika = new Persona('Erika', 'Luna', 1.75);
var arturo = new Persona('Arturo', 'Martinez', 1.81); */
