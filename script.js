document.addEventListener("DOMContentLoaded", () => {
    const botonesFiltro = document.querySelectorAll('.btn-filtro');
    const productos = document.querySelectorAll('.card-producto');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', (e) => {
            e.preventDefault(); 

            botonesFiltro.forEach(b => b.style.color = 'var(--color-text)');
            boton.style.color = 'var(--color-primary)';
            boton.style.fontWeight = 'bold';

            const filtroSeleccionado = boton.getAttribute('data-filtro');

            productos.forEach(producto => {
                const categoriaProducto = producto.getAttribute('data-categoria');

                if (filtroSeleccionado === 'todas' || filtroSeleccionado === categoriaProducto) {
                    producto.style.display = 'block'; 
                } else {
                    producto.style.display = 'none';
                }
            });
        });
    });
});

// Seleccionamos el botón y el menú
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Le decimos que al hacer clic en el botón, añada o quite la clase "activo"
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("activo");
});

document.addEventListener('DOMContentLoaded', () => {
    // Buscamos el aviso y el botón de cerrar
    const avisoEnvio = document.getElementById('aviso-envio');
    const btnCerrarAviso = document.querySelector('.cerrar-aviso');

    // Si ambos existen en esta página, activamos el clic
    if (btnCerrarAviso && avisoEnvio) {
        btnCerrarAviso.addEventListener('click', () => {
            avisoEnvio.style.opacity = '0'; // Efecto de desvanecimiento
            
            // Esperamos 0.3 segundos y lo ocultamos del todo
            setTimeout(() => {
                avisoEnvio.style.display = 'none';
            }, 300);
        });
    }
});
