// Funcionalidad para pausar otros videos si uno empieza a reproducirse
document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('video');

    videos.forEach(video => {
        video.addEventListener('play', () => {
            videos.forEach(otherVideo => {
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });
        });
    });
});