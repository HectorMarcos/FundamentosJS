class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
    }
    soyAlto() {
        return this.altura > 1.8;
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }
    saludar() {
        console.log(
            `Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`
        );
    }
}

/* var hector = new Persona('Hector', 'Marcos', 1.9);
var erika = new Persona('Erika', 'Luna', 1.75);
var arturo = new Persona('Arturo', 'Martinez', 1.81); */
