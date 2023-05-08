const obj = {
    get prop() {
        return this.__prop__;
    },
    set prop(value) {
      this.__prop__ = value * 2;
    },
};

obj.prop = 12;

  console.log(obj.prop); //24

/////
const obj = {};

Object.defineProperty(obj, //objeto target
  'prop', //nombre propiedad
{
    enumerable: true,
    configurable: true,
    get prop() { //getter
        return this.__prop__;
    },
    set prop(value) { //setter
      this.__prop__ = value * 2;
    },
});
obj.prop = 12;

var atr = Object.getOwnPropertyDescriptor(obj, 'prop')
console.log(atr);

//otro ejercicio Get y set

export class Course {
  constructor({
    name,
    classes = [],
  }) {
    this._name = name;
    this.classes = classes;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
      if (typeof nuevoNombrecito === "string") {
      const newName = nuevoNombrecito
      const palabras = newName.split(" ");

      const word = palabras.map((palabra) => {
        return palabra[0].toUpperCase() + palabra.substring(1);
      }).join(" ")
      // console.log(palabras);
      console.log(word);
      this._name = word;
    } else {
      console.error("no se puede cambiar el nombre")
    }
  }
}

const courseName = "curso de programación básica";
const nombreMaysuculas = new Course({
  name: courseName,
})
nombreMaysuculas.name = courseName;
