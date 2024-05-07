// Función para mostrar el pop-up al cargar la página
window.onload = function() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    
    var startButton = document.getElementById('startButton');
    startButton.onclick = function() {
        popup.style.display = 'none';
        var video = document.getElementById('myVideo');
        video.style.display = 'block';
        video.play();
    }
     // Capturando el evento 'ended' del video
     var video = document.getElementById('myVideo');
     video.addEventListener('ended', function() {
         video.style.display = 'none';
     });

     window.onload = function() {
        // Configuración del carrusel
        var carousel = document.querySelector('.carousel');
        var images = document.querySelectorAll('.carousel img');
        var imageWidth = images[0].clientWidth;
        var currentIndex = 0;
    
        // Función para cambiar las imágenes automáticamente cada 5 segundos
        setInterval(function() {
            currentIndex = (currentIndex + 1) % images.length;
            carousel.style.transform = 'translateX(' + (-imageWidth * currentIndex) + 'px)';
        }, 5000);
    }
    
}
