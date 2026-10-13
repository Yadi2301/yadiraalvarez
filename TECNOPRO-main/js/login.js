// Usuarios permitidos (cambia estos datos por las dos personas)
const USUARIOS = [
    { usuario: "USUARIO1", password: "CLAVE1", nombre: "Jhoel" },
    { usuario: "USUARIO2", password: "CLAVE2", nombre: "Yadira" },
    { usuario: "USUARIO3", password: "CLAVE3", nombre: "Juan" },
    { usuario: "USUARIO4", password: "CLAVE4", nombre: "José" },
];

// Capturamos los elementos
const formulario = document.getElementById("form-login");
const mensaje = document.getElementById("mensaje");
const inputPassword = document.getElementById("password");
const mostrarPassword = document.getElementById("mostrar-password");

// Mostrar u ocultar la contraseña
mostrarPassword.addEventListener("change", function () {
    inputPassword.type = mostrarPassword.checked ? "text" : "password";
});

// Evento cuando se presiona el botón Ingresar
formulario.addEventListener("submit", function (evento) {
    // Evita que la página se recargue
    evento.preventDefault();

    // Capturamos los datos
    const usuario = document
        .getElementById("usuario")
        .value.trim()
        .toUpperCase();
    const password = inputPassword.value;

    // Buscamos si los datos son correctos
    const encontrado = USUARIOS.find(
        (u) => u.usuario === usuario && u.password === password,
    );

    if (encontrado) {
        // Guardamos el nombre del usuario
        localStorage.setItem("nombreUsuario", encontrado.nombre);

        // Vamos a la página principal
        window.location.href = "../index.html";
    } else {
        // Mostramos mensaje de error
        mensaje.textContent =
            "Usuario o contraseña incorrectos. Revisa tus datos e inténtalo de nuevo.";
        mensaje.hidden = false;
        inputPassword.value = "";
        inputPassword.focus();
    }
});
