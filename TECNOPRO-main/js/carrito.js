const listProducts = JSON.parse(localStorage.getItem("listProducts")) || {};

document.querySelectorAll(".boton-comprar").forEach((boton) => {
    const tarjeta = boton.closest("[data-codigo]");
    const codigo = tarjeta.dataset.codigo;
    const nombre = tarjeta.dataset.nombre;
    const precio = Number(tarjeta.dataset.precio);

    /* if (listProducts[codigo]) {
        boton.classList.add("boton-comprar--activo");
        boton.textContent = "Quitar del carrito";
    } */

    boton.addEventListener("click", () => {
        const agregado = boton.classList.toggle("boton-comprar--activo");

        if (agregado) {
            listProducts[codigo] = { nombre, precio, cantidad: 1 };
            boton.textContent = "Quitar del carrito";
            alert(`Producto agregado al carrito: ${nombre}`);
        } else {
            delete listProducts[codigo];
            boton.textContent = "Añadir al carrito";
            alert(`Producto eliminado del carrito: ${nombre}`);
        }

        localStorage.setItem("listProducts", JSON.stringify(listProducts));
    });
});
