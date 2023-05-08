//ejercicio 1

class Banda {
    constructor({
    nombre,
    generos = [],
}) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
    if (this.integrantes.every(i => i.instrumento !== 'Bateria')) {
        this.integrantes.push(integranteNuevo);
    } else {
        console.log("Nel Prro");
    }
}
}

//Crear clase Integrante

class Integrante {
constructor(
    {
        nombre,
        instrumento
    }
) {
    this.nombre = nombre;
    this.instrumento = instrumento;
}


}

export {
    Banda,
    Integrante,
}

//ejercicio 2

class Banda {
    constructor({
        nombre,
        generos = [],
}) {
        this.nombre = nombre;
        this.generos = generos;
        this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
        if(this.integrantes.some(obj=>obj.instrumento==='Bateria')){
            console.log('ya hay un baterista')
        }else{
            this.integrantes.push(integranteNuevo)
        }
    }
}

class Integrante {
    constructor({
        nombre,
        instrumento,
    }){
        this.nombre=nombre;
        this.instrumento=instrumento;
    }
}

export {
    Banda,
    Integrante,
}

//ejercicio 3

class Course { //cuando hay cursos repetidos "abstracción"
    constructor({
        name,
        classes = [],
    }) {
        this.name = name;
        this.classes = classes;
    }
}

const AsyncJS = new Course ({ // se crea suponiendo que se va a repetir en otras instancias la clase Async course
    name: "AsyncJS course"
}):

class learningPath {
    constructor({
        name,
        courses =  []
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const webSchool = new learningPath({
    name: "JS school"
    courses: [
        "Arrays classes",
        "AsyncJS course",
    ],
});

const dataSchool = new learningPath({
    name: "Data science"
    courses: [
        "Data class 1",
        "Data class 2",
    ],
});

const vgsSchool = new  learningPath({
    name: "Vgs school"
    courses: [
        "Gaming classes",
        "Unreal engine",
    ],
});

class student {
    constructor()
}

Student {
    constructor({
        name,
        email,
        username,
        twitter=undefined,
        instagram=undefined,
        facebook=undefined,
        approvedCourses=[],
        learningPaths=[],
    })

    {this.name=name;
    this.email=email;
    this.username=username;
    this.socialMedia={twitter,instagram,facebook,};
    this.approvedCourses=approvedCourses;
    this.learningPaths=learningPaths;
}}

const juan2 =new Student({
    name:"JuanDC",
    username:"juandc",
    email:"juanito@juanito.com",
    twitter:"fjuandc",
    learningPaths:[webSchool ,vgsSchool,],
});

const miguelito2=new Student({
    name:"Miguelito",
    username:"migelitofeliz",
    email:"miguelito@juanito.com",
    instagram:"migelito_feliz",
    learningPaths:[webSchool, vgsSchool,],
});