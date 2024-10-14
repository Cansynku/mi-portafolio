class Portfolio {
    constructor() {
      this.init();
    }
  
    init() {
      document.addEventListener("DOMContentLoaded", () => {
        this.iniciarSecciones();
        this.iniciarModoOscuro();
        this.iniciarScrollSuave();
        this.iniciarNavegacion();
        this.iniciarIrArriba();
      });
    }
  
    iniciarSecciones() {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        if (section.id !== "about") {
          section.classList.add("d-none");
        }
      });
    }
  
    iniciarModoOscuro() {
      const darkModeToggle = document.getElementById("dark-mode-toggle");
      const body = document.body;
      if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
          body.classList.toggle("dark-mode");
        });
      }
    }
  
    iniciarNavegacion() {
      const navLinks = document.querySelectorAll("nav a.nav-link");
  
      navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const sectionId = link.getAttribute("href").substring(1);
          this.cambiarSeccion(sectionId);
          navLinks.forEach((navLink) => navLink.classList.remove("active"));
          link.classList.add("active");
        });
      });
    }
  
    cambiarSeccion(sectionId) {
      const currentSection = document.querySelector("section:not(.d-none)");
      const targetSection = document.getElementById(sectionId);
    
      if (currentSection) {
        currentSection.classList.add("fade-out"); // Añadir clase de salida suave
        setTimeout(() => {
          currentSection.classList.add("d-none");
          currentSection.classList.remove("fade-out");
          if (targetSection) {
            targetSection.classList.remove("d-none");
            targetSection.classList.add("fade-in"); // Añadir clase de entrada suave
            setTimeout(() => {
              targetSection.classList.remove("fade-in");
              targetSection.scrollIntoView({ behavior: "smooth" }); // Realizar scroll después de la animación de entrada
            }, 1); // Duración de la animación de entrada
          }
        }, 1); // Duración de la animación de salida
      }
    }
  
    iniciarScrollSuave() {
      const navLinks = document.querySelectorAll("nav a.nav-link");
      navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const sectionId = link.getAttribute("href").substring(1);
          const targetSection = document.getElementById(sectionId);
          if (targetSection) {
            this.aplicarAnimacion(targetSection);
          }
        });
      });
    }
  
    aplicarAnimacion(targetSection) {
      targetSection.classList.add("scroll-animation");
      setTimeout(() => {
        targetSection.classList.remove("scroll-animation");
      }, 2000);
    }
  
    iniciarIrArriba() {
      const irArriba = document.querySelector(".ir-arriba");
      if (irArriba) {
        irArriba.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
  
        window.addEventListener("scroll", () => {
          irArriba.style.display = window.scrollY > 0 ? "block" : "none";
        });
      }
    }
  }
  
  new Portfolio();
  