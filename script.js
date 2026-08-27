document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value.trim();

        if(name && email && service && message) {
            alert(`¡Excelente decisión, ${name}!\n\nTu solicitud para el servicio de "${service}" ha sido registrada.\nMe pondré en contacto contigo al correo electrónico: ${email} a la brevedad.`);
            this.reset();
        } else {
            alert('Por favor, asegúrate de completar correctamente todos los campos del formulario.');
        }
    });

});
