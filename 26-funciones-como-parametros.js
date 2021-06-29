class Persona {
   constructor(nombre, apellido, altura) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.altura = altura;
   }

   saludar(fn) {
      console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
      if (fn) {
         fn(this.nombre, this.apellido);
      }
   }
   soyAlto() {
      return this.altura > 1.8;
   }
}

class Desarrollador extends Persona {
   constructor(nombre, apellido, altura) {
      super(nombre, apellido, altura);
   }
   saludar(fn) {
      console.log(
         `Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`
      );
      if (fn) {
         fn(this.nombre, this.apellido, true);
      }
   }
}

var hector = new Persona("Hector", "Marcos", 1.9);
var erika = new Persona("Erika", "Luna", 1.75);
var arturo = new Persona("Arturo", "Martinez", 1.81);

function responderSaludo(nombre, apellido, esDev) {
   console.log(`Buen día ${nombre} ${apellido}`);
   if (esDev) {
      console.log(`Ah, no sabia que eras Dev`);
   }
}

var hector = new Persona("Hector", "Marcos", 1.9);
var erika = new Persona("Erika", "Luna", 1.75);
var arturo = new Desarrollador("Arturo", "Martinez", 1.81);

hector.saludar();
erika.saludar(responderSaludo);
arturo.saludar(responderSaludo);
