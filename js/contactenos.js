document.addEventListener('DOMContentLoaded', () => {
    // Interacción suave o registro opcional para el botón de WhatsApp
    const whatsappBtn = document.querySelector('.btn-whatsapp');

    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            console.log('El usuario inició contacto vía WhatsApp con el maestro.');
        });
    }
});