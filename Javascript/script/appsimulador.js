// Arrays y recuperación desde localStorage
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let cursos = JSON.parse(localStorage.getItem("cursos")) || [];

// DOM Elements
const formRegistro = document.getElementById("formRegistro");
const formCurso = document.getElementById("formCurso");
const seccionProfesor = document.getElementById("seccionProfesor");
const seccionAlumno = document.getElementById("seccionAlumno");
const listaCursosProfesor = document.getElementById("listaCursosProfesor");
const listaCursosAlumno = document.getElementById("listaCursosAlumno");

// Usuario actual
let usuarioActual = null;

// Función para registrar usuario
function registrarUsuario(nombre, rol) {
  const usuario = { nombre, rol };
  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  usuarioActual = usuario;

  if (rol === "profesor") {
    seccionProfesor.style.display = "block";
  } else if (rol === "alumno") {
    seccionAlumno.style.display = "block";
    mostrarCursosAlumno();
  }
}

// Función para crear curso
function crearCurso(nombreCurso, creador) {
  const curso = { nombre: nombreCurso, creador: creador.nombre };
  cursos.push(curso);
  localStorage.setItem("cursos", JSON.stringify(cursos));
  mostrarCursosProfesor(creador);
}

// Mostrar cursos creados por el profesor
function mostrarCursosProfesor(profesor) {
  listaCursosProfesor.innerHTML = "";
  const cursosDelProfesor = cursos.filter(c => c.creador === profesor.nombre);

  cursosDelProfesor.forEach((curso) => {
    const li = document.createElement("li");
    li.textContent = curso.nombre;
    listaCursosProfesor.appendChild(li);
  });
}

// Mostrar todos los cursos para alumnos
function mostrarCursosAlumno() {
  listaCursosAlumno.innerHTML = "";

  if (cursos.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No hay cursos disponibles.";
    listaCursosAlumno.appendChild(li);
  } else {
    cursos.forEach((curso) => {
      const li = document.createElement("li");
      li.textContent = `${curso.nombre} (por ${curso.creador})`;
      listaCursosAlumno.appendChild(li);
    });
  }
}

// Evento: Registro de usuario
formRegistro.addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const rol = document.getElementById("rol").value;

  if (nombre !== "" && rol !== "") {
    registrarUsuario(nombre, rol);
    formRegistro.reset();
    formRegistro.style.display = "none";
  }
});

// Evento: Crear curso
formCurso.addEventListener("submit", function (e) {
  e.preventDefault();
  const nombreCurso = document.getElementById("nombreCurso").value.trim();

  if (nombreCurso !== "") {
    crearCurso(nombreCurso, usuarioActual);
    formCurso.reset();
  }
});







