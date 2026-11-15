// ==========================================================
// Interacciones del sitio: menú para celular y carrusel
// ==========================================================

// Menú hamburguesa: muestra u oculta el menú en celular
const botonMenu = document.querySelector('.menu-boton');
const menu = document.getElementById('menu-principal');

botonMenu.addEventListener('click', function () {
    const abierto = menu.classList.toggle('abierto');
    botonMenu.setAttribute('aria-expanded', abierto);
    botonMenu.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
});

// Carrusel de proyectos: las flechas desplazan una tarjeta
const pista = document.querySelector('.carrusel-pista');

if (pista) {
    const avance = function () {
        return pista.querySelector('.tarjeta-proyecto').offsetWidth + 16;
    };
    document.querySelector('.anterior').addEventListener('click', function () {
        pista.scrollBy({ left: -avance(), behavior: 'smooth' });
    });
    document.querySelector('.siguiente').addEventListener('click', function () {
        pista.scrollBy({ left: avance(), behavior: 'smooth' });
    });
}
