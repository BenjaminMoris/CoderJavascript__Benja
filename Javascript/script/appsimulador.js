// Variables globales
const usuarios = [];
const cursos = [];

// Función para registrar usuario con rol
function registrarUsuario() {
  
  //variables condicionales locales

  let nombre = prompt("Ingresá tu nombre:");
  let rol = prompt("¿Sos 'profesor' o 'alumno'?").toLowerCase();

  // Push a variable global

  if( nombre !== "" && nombre !== null && (rol === "profesor" || rol === "alumno") )  
    { let usuario = 
      
      {nombre: nombre,
        rol: rol
      };
    
        usuarios.push(usuario);
    
        alert("--Registro exitoso--\n-Nombre: " + nombre + "\n-Rol: " + rol);
    
        return usuario;
    } 
    
    else {
    alert(" Datos inválidos. Intentá nuevamente.");
    return null;
    }
}

//  Función para crear un curso (solo profesor)

function crearCurso(creador) {
  let nombreCurso = prompt("Ingresá el nombre del curso que querés crear:");

  if (nombreCurso !== "" && nombreCurso !== null) 
    
    {cursos.push ({ nombre: nombreCurso, creador: creador.nombre });
    
      alert("-Curso creado: " + nombreCurso + "\n-Por: " + creador.nombre);
    } 
    
  else {
    alert(" Nombre de curso inválido.");
  }
}

//  Función para mostrar todos los cursos disponibles
function mostrarCursos() {
  
  if (cursos.length === 0) {
    alert("No hay cursos disponibles.");
    } 
    
    else { let lista = "-Cursos disponibles:\n";
    
    for (let i = 0; i < cursos.length; i++) 
      { lista += (i + 1) + ". " + cursos[i].nombre + " (Creado por " + cursos[i].creador + ")\n";}
    
      alert(lista);
    
    }
}

//  Simulador principal
function simulador() {
  alert("-Bienvenido/a al simulador para gestionar cursos-");

  let usuarioActual = registrarUsuario();

  if (usuarioActual !== null) 
    {let continuar = true;

    // Bucle del menu Profesor y alumno
    
    while (continuar) {
      if (usuarioActual.rol === "profesor") {
        let opcion = prompt("¿Qué querés hacer?\n1. Crear un curso\n2. Ver cursos\n3. Salir");

        if (opcion === "1") {
          crearCurso(usuarioActual);
        } else if (opcion === "2") {
          mostrarCursos();
        } else if (opcion === "3") {
          continuar = false;
          alert(" Gracias por usar el simulador");
        } else {
          alert(" Opción inválida.");
        }


      } else if (usuarioActual.rol === "alumno") {
        let opcionAlumno = prompt("¿Qué querés hacer?\n1. Ver cursos\n2. Salir");

        if (opcionAlumno === "1") {
          mostrarCursos();
        } else if (opcionAlumno === "2") {
          continuar = false;
          alert(" Gracias por usar el simulador");
        } else {
          alert(" Opción inválida.");
        }
      }
    }
  }
}

// Inicio del simulador
simulador();









