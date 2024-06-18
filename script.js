// Función para la interpolación con efecto easing (suavizado)
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a.nav-link');

    // Ocultar todas las secciones excepto la primera al cargar la página
    sections.forEach(section => {
        if (section.id !== 'about') {
            section.classList.add('d-none');
        }
    });

    // Función para cambiar de sección al hacer clic en los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obtener el ID de la sección correspondiente al enlace
            const sectionId = this.getAttribute('href').substring(1);

            // Ocultar la sección actualmente visible
            const currentSection = document.querySelector('section:not(.d-none)');
            if (currentSection) {
                currentSection.classList.add('d-none');
            }

            // Mostrar la sección correspondiente al enlace clicado
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.remove('d-none');
            }

            // Opcional: Cambiar la clase activa en el menú de navegación
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const sectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(sectionId);

            if (targetSection) {
                // Oculta todas las secciones
                document.querySelectorAll('section').forEach(section => {
                    section.classList.add('d-none');
                });

                // Muestra la sección deseada
                targetSection.classList.remove('d-none');

                // Aplica animación durante el desplazamiento
                targetSection.classList.add('scroll-animation');

                // Desplazamiento suave hacia la sección
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

                // Cambiar la clase activa en el menú de navegación
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');

                // Elimina la clase de animación después de un tiempo para evitar repeticiones
                setTimeout(() => {
                    targetSection.classList.remove('scroll-animation');
                }, 1000); // ajusta el tiempo según la duración de tu animación CSS
            }
        });
    });
});
