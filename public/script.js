// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB98IHoPrws6QP5CAoZvL_HwDrJVqWKcnc",
  authDomain: "tienda-cnc.firebaseapp.com",
  projectId: "tienda-cnc",
  storageBucket: "tienda-cnc.appspot.com",
  messagingSenderId: "28644465446",
  appId: "1:28644465446:web:311d978cf7f198fe853fe7",
  measurementId: "G-18S30B7TD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




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
