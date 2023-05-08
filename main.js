const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    },
};

//para crear un prototipo se usa function, los parametros en paréntesis serán futuras instancias
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCursito) {
    //   this.cursosAprobados.push(nuevoCursito);
    // } -
}
//aquí creo un método, para actualizar los datos del objeto Natalia
Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

//Aquí creo una instancia del prototipo student
const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Introducción a la Producción de Videojuegos",
        "Curso de Creación de Personajes",
    ],
);

// Prototipos con la sintaxis de clases
class Student2 {
    constructor({
        name,
        cursosAprobados = [],
        age,
        email,
    }) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}

    const miguelito =    Student2({
        name: "Miguel",
        age: 28,
        email: "miguelito@platzi.com",
});