const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const lista = document.querySelector('#lista-carrito tbody');

cargarEventListeners();
function cargarEventListeners() {
    elementos1.addEventListener('click', agregarArticulo);
    carrito.addEventListener('click', eliminarArticulo);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function agregarArticulo(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const articulo = e.target.parentElement.parentElement;
        leerDatosElemento(articulo);
    }
}

function leerDatosElemento(articulo) {
    const infoElemento = {
        imagen: articulo.querySelector('img').src,
        titulo: articulo.querySelector('h3').textContent,
        precio: articulo.querySelector('.precio').textContent,
        id: articulo.querySelector('a').getAttribute('data-id')
    };
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${elemento.imagen}" width="100"></td>
        <td>${elemento.titulo}</td>
        <td>${elemento.precio}</td>
        <td><a href="#" class="borrar" data-id="${elemento.id}">X</a></td>
    `;
    lista.appendChild(row);
}

function eliminarArticulo(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
    }
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}
