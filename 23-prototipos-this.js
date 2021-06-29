function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;

    //return this;
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
};

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8;
};

//this en el espacio global es window

var hector = new Persona('Hector', 'Marcos', 1.9);

var erika = new Persona('Erika', 'Luna', 1.75);

var arturo = new Persona('Arturo', 'Martinez', 1.81);
