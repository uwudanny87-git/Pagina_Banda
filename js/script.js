// Funcionalidad del carrusel automático de imágenes
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-img');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const intervalTime = 3000; // Cambio cada 3 segundos

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            dots[i].classList.remove('active');
        });

        images[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Iniciar cambio automático cada 3 segundos
    setInterval(nextImage, intervalTime);
});