const botonMenu = document.getElementById("menu-toggle");
const listaMenu = document.getElementById("menu-lista");

botonMenu.addEventListener("click", function () {
    listaMenu.classList.toggle("activo");
    botonMenu.classList.toggle("activo");

    const expandido = botonMenu.getAttribute("aria-expanded") === "true";
    botonMenu.setAttribute("aria-expanded", !expandido);
});
