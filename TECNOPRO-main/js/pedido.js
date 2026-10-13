const listProducts = JSON.parse(localStorage.getItem("listProducts")) || {};

const listaCarrito = document.getElementById("lista-carrito");
const montoTotal = document.getElementById("monto-total");
/* const mensajeVacio = document.getElementById("mensaje-vacio"); */

let filas = "";
let total = 0;

for (const codigo in listProducts) {
    const producto = listProducts[codigo];
    total += producto.precio * producto.cantidad;
    filas += `
        <tr>
            <td>${codigo}</td>
            <td>${producto.nombre}</td>
            <td>${producto.cantidad}</td>
            <td>S/. ${producto.precio.toFixed(2)}</td>
        </tr>`;
}

listaCarrito.innerHTML = filas;
montoTotal.textContent = `S/. ${total.toFixed(2)}`;
/* mensajeVacio.hidden = Object.keys(listProducts).length > 0; */
