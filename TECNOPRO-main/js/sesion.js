// Muestra "Ingresar" o el saludo con "Salir" en el menú, según haya sesión
const itemSesion = document.getElementById("nav-sesion");

function pintarSesion() {
    if (!itemSesion) return;

    const nombre = localStorage.getItem("nombreUsuario");
    itemSesion.replaceChildren();

    // Sin sesión: enlace al login
    if (!nombre) {
        const enlace = document.createElement("a");
        enlace.href = itemSesion.dataset.login;
        enlace.textContent = "Ingresar";
        itemSesion.append(enlace);
        return;
    }

    // Con sesión: saludo + botón para salir
    const saludo = document.createElement("span");
    saludo.className = "nav-sesion__saludo";
    saludo.append("Hola, ");
    const negrita = document.createElement("b");
    negrita.textContent = nombre;
    saludo.append(negrita);

    const salir = document.createElement("a");
    salir.href = "#";
    salir.textContent = "Salir";
    salir.addEventListener("click", (evento) => {
        evento.preventDefault();
        localStorage.removeItem("nombreUsuario");
        pintarSesion();
    });

    itemSesion.append(saludo, salir);
}

pintarSesion();
