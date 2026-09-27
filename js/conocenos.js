document.addEventListener('DOMContentLoaded', () => {
    // 1. Animación de revelado suave al hacer scroll (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animación solo una vez
            }
        });
    }, observerOptions);

    // Seleccionar elementos a animar
    const animatedElements = document.querySelectorAll('.instrument-card, .curioso-box, .maestro-card, .invite-card');
    animatedElements.forEach(el => {
        el.classList.add('fade-in-element');
        revealOnScroll.observe(el);
    });

    // 2. Interacción dinámica al hacer click en las tarjetas de instrumentos
    const instrumentCards = document.querySelectorAll('.instrument-card');
    instrumentCards.forEach(card => {
        card.addEventListener('click', () => {
            // Efecto sutil de pulso al presionar
            card.style.transform = 'scale(0.97)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
        });
    });
});