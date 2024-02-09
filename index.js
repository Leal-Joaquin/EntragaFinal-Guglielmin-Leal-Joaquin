/*barra de menu---barra de menu---barra de menu*/
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");


navToggle.addEventListener("click", function () {
  console.log("Click event");
  links.classList.toggle("show-links");
});



/*carrito de compras*/
let PRODUCTOS = [
  { id: 10001, nombre: "Ibrik", precio: 5000, imagen: "./images/productos/1.jpeg" },
  { id: 10002, nombre: "Aero Press", precio: 10000, imagen: "./images/productos/2.jpg" },
  { id: 90001, nombre: "Sifon-Japones", precio: 10000, imagen: "./images/productos/3.jpg" },
  { id: 90001, nombre: "Prensa Francesa", precio: 10000, imagen: "./images/productos/4.jpg" },
  { id: 90003, nombre: "Chemex", precio: 15000, imagen: "./images/productos/5.jpg" },
  { id: 90004, nombre: "Cafetera Italiana", precio: 10000, imagen: "./images/productos/6.jpeg" },
  { id: 90005, nombre: "Filtros de café", precio: 10000, imagen: "./images/productos/7.jpeg " },
  { id: 90006, nombre: "Molino", precio: 10000, imagen: "./images/productos/8.jpg" },
];

const CARRITO = [];

function agregarAlCarrito(idProducto) {
  const productosSeleccionado = PRODUCTOS.find(producto => producto.id === idProducto);

  if (productosSeleccionado) {
    CARRITO.push(productosSeleccionado);
    actualizarCarrito();
  }
}

function irAPaginaCarrito() {
  const datosCarrito = encodeURIComponent(JSON.stringify(CARRITO));
  window.location.href = `./pages/shopping-car.html?datosCarrito=${datosCarrito}`;
}

function actualizarCarrito() {
  const carritoElement = document.getElementById("total");
  carritoElement.innerHTML = " ";

  CARRITO.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" width="100%">
      <h2 class="nombre-producto">${producto.nombre}</h2>
      <p class="boton-compra">precio: ${producto.precio}</p>
    `;
    carritoElement.appendChild(card);
  });

  sumarTotal();

  guardarCarritoEnLocalStorage();
}

function sumarTotal() {
  const totalElement = document.getElementById("final");
  const total = CARRITO.reduce((acc, producto) => acc + producto.precio, 0);
  totalElement.innerHTML = `<p class="totalCarro"> total: $${total}</p>`;
}

function cargarCarritoDesdeLocalStorage() {
  const carritoGuardado = localStorage.getItem('carrito');
  if (carritoGuardado) {
    CARRITO.length = 0; // Clear existing cart
    CARRITO.push(...JSON.parse(carritoGuardado));
  }
}

function crearCards() {
  const carritoElement = document.getElementById('carrito');
  carritoElement.innerHTML = '';

  PRODUCTOS.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div id="carrito"></div>
      <img src="${producto.imagen}" alt="${producto.nombre}" width="100%">
      <h2 class="nombre-producto">${producto.nombre}</h2>
      <p class="precio">precio: ${producto.precio}</p>
      <button class="boton-compra" onclick="agregarAlCarrito(${producto.id}); irAPaginaCarrito()">Agregar al carrito</button>
    `;
    carritoElement.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname;

  cargarCarritoDesdeLocalStorage();

  if (currentPage.includes('./pages/shopping-car.html')) {
    crearCarrito();
  } else {
    crearCards();
  }
});



function crearBotonCompra () {
      const finalCompra = document.createElement("button");
      finalCompra.innerHTML = "";
      
}