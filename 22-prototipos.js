function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;

    //return this;
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
};

var hector = new Persona('Hector', 'Marcos', 1.9);

var erika = new Persona('Erika', 'Luna', 1.75);

var arturo = new Persona('Arturo', 'Martinez', 1.81);

//reto, agregar altura y agregar al prototipo de persona "soy alto"
//si mide mas de 1.8m

/* Persona.prototype.soyAlto = function () {
    if (this.altura > 1.8) {
        console.log(
            `Hola soy ${this.nombre} y soy alto porque mido ${this.altura}`
        );
    } else {
        console.log(
            `Hola soy ${this.nombre} y soy bajo porque mido ${this.altura}`
        );
    }
}; */

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8;
};
