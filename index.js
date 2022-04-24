class Alumno {
    #nombreAlumno;
    #materias;

    constructor (nombreAlumno, materias) {
        if (isNaN(nombreAlumno)) {
            this.#nombreAlumno = nombreAlumno;            
        }

        if (isNaN(materias)) {
            this.#materias = materias;
        }
    }

    set setNombreAlumnon (nombreAlumno) {
        if (isNaN(nombreAlumno)){
            this.#nombreAlumno = nombreAlumno;
        }
    }

    get getNombreAlumno () {
        return this.#nombreAlumno;
    }

    calcularPromedio () {
        var promedio = 0;

        for (var materia of this.#materias) {
            promedio += materia.getNota;
        }

        return promedio / this.#materias.length;
    }
}

class Materia {
    #nombreMateria;
    #nota;

    constructor (nombreMateria, nota) {
        if (isNaN(nombreMateria)) {
            this.#nombreMateria = nombreMateria;
        }

        if ((!isNaN(nota)) || !(nota >= 1 && noota <= 10)) {
            this.#nota = nota;
        }
    }

    set setNombreMateria (nombreMateria) {
        if (isNaN(nombreMateria)) {
            this.#nombreMateria = nombreMateria;
        }
    }

    set setNota (nota) {
        if (!isNaN(nota)) {
            this.#nota = nota;
        }
    }

    get getNota () {
        return this.#nota;
    }
}

/* ARRAY DE LAS MATERIAS */
let alumnos = [];

/* ARRAY DE LAS MATERIAS */
let materias = [];

function cargarAlumno () {
    var nombreAlumno = pedirNombre('Ingrese el nombre del alumno');
    var materias = pedirMateria();

    alumnos.push(new Alumno(nombreAlumno, materias));
}

function pedirNombre (msg) {
    var nombre;

    do {
        nombre = prompt(msg);
    } while (!isNaN(nombre));

    return nombre;
}

function pedirNota () {
    var notaMateria;

    do {
        notaMateria = parseFloat(prompt('Ingrese la nota'));
    } while (isNaN(notaMateria) || !(notaMateria >= 1 && notaMateria <= 10));

    return notaMateria;
}

function pedirMateria () {
    do {
        var nombreMateria = pedirNombre('Ingrese el nombre de la materia');
        var nota = pedirNota();

        materia = new Materia (nombreMateria, nota);

        materias.push(materia);
    } while (confirm('¿Quiere ingresar otra materia?'));

    return materias;
}

function mostrarDatos () {
    for (var alumno of alumnos) {
        alert(`El alumno ${alumno.getNombreAlumno} tiene un promedio de ${alumno.calcularPromedio()}`);
    }
}