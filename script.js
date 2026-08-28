document.addEventListener('DOMContentLoaded', () => {
    
    // Control de la animación del menú móvil responsive
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

    // 📩 CAPTURA, ENVÍO REAL A FORMSPREE Y LIMPIEZA AUTOMÁTICA
    const contactForm = document.getElementById('contactFormNative');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Detiene la recarga brusca de la página
            
            const name = document.getElementById('name').value.trim();
            const formData = new FormData(this);

            // Realiza el envío seguro a los servidores de Formspree por detrás
            fetch(this.action, {
                method: this.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    // 🧼 ¡MÁGIA! Aquí se borran todos los campos del formulario al instante
                    contactForm.reset(); 
                    
                    // Ventana emergente de confirmación profesional para tu cliente
                    alert(`${name}!\n\nTu solicitud ha sido recibida con éxito en Pc-Movil Fast Solution.\nMe pondré en contacto contigo a la brevedad.`);
                } else {
                    alert('Hubo un problema temporal en el servidor. Por favor, intenta de nuevo o escríbenos a WhatsApp.');
                }
            }).catch(error => {
                alert('Error de red. Por favor, verifica tu conexión a internet o escríbenos directamente a WhatsApp.');
            });
        });
    }
});


