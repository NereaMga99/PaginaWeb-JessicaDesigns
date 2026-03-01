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

// Cambia el idioma de la página 
function changeLanguage(lang) {
        // Cambia el texto
        const elements = document.querySelectorAll('.translate');
        elements.forEach(el => {
            el.innerHTML = el.getAttribute(`data-${lang}`);
        });

        // Cambia el idioma en la etiqueta <html> por temas de SEO
        document.documentElement.lang = lang;

        // Pone en negrita el idioma seleccionado
        document.getElementById('btn-es').style.fontWeight = lang === 'es' ? 'bold' : 'normal';
        document.getElementById('btn-en').style.fontWeight = lang === 'en' ? 'bold' : 'normal';

        // Guarda el idioma para que no se pierda al cambiar de página
        localStorage.setItem('idioma', lang);
}

    // Ejecuta esto en cuanto carga la página
window.addEventListener('DOMContentLoaded', () => {
    const idiomaGuardado = localStorage.getItem('idioma') || 'es';
    changeLanguage(idiomaGuardado);
});
