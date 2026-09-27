document.addEventListener('DOMContentLoaded', () => {
    const eventDay = document.querySelector('.event-day');

    if (eventDay) {
        eventDay.addEventListener('click', () => {
            alert('🎵 Evento: RETRETA\n📅 Fecha: Viernes, 25 de Septiembre\n⏰ Hora: 4:45 PM\n📍 Lugar: Parque Principal Simón Bolívar');
        });
    }
});