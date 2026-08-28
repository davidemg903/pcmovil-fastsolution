document.addEventListener('DOMContentLoaded', () => {
    
    // El código del menú móvil se mantiene exactamente igual
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

    // 📩 CÓDIGO NUEVO Y CORREGIDO PARA EL ENVÍO REAL DE CORREOS
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitamos que la página se recargue bruscamente
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        
        // Creamos un contenedor con los datos del formulario para mandarlos a internet
        const formData = new FormData(this);

        // Enviamos los datos directamente a Formspree usando Fetch
        fetch(this.action, {
            method: this.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // Si el correo se envió con éxito, se muestra la alerta al cliente
                alert(`¡Excelente decisión, ${name}!\n\nTu solicitud ha sido recibida con éxito en Pc-Movil Fast Solution.\nMe pondré en contacto contigo al correo: ${email} a la brevedad.`);
                contactForm.reset(); // Limpiamos los campos
            } else {
                alert('Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo o comunícate por WhatsApp.');
            }
        }).catch(error => {
            alert('Error de conexión. Por favor, verifica tu internet o escríbenos directamente a WhatsApp.');
        });
    });
});
