let abrirMenu = document.getElementById('abrirMenu');
let menu = document.getElementById('menuMobile');
let overlay = document.getElementById('overlayMenu');

function abrir() {
    menu.style.width = '70%';
    overlay.classList.add('show');
    abrirMenu.style.display = 'none';
}

function fechar() {
    menu.style.width = '0%';
    overlay.classList.remove('show');
    abrirMenu.style.display = 'block';
}

// Carrossel
document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.getElementById('carousel-prev');
    const nextButton = document.getElementById('carousel-next');
    const carousel = document.querySelector('.carousel');
    const projectWidth = document.querySelector('.project').clientWidth;
    let index = 0;
    
    function showSlide(slideIndex) {
        const totalSlides = document.querySelectorAll('.project').length;
        if (slideIndex >= totalSlides) {
            index = 0;
        } else if (slideIndex < 0) {
            index = totalSlides -1;
        } else {
            index = slideIndex;
        }
        carousel.style.transform = `translateX(-${index * projectWidth}px)`;
    }
    
    prevButton.addEventListener('click', () => {
        showSlide(index - 1);
    });
    
    nextButton.addEventListener('click', () => {
        showSlide(index + 1);
    });

    // Inicia o carrossel mostrando o primeiro slide
    showSlide(index);

    // Adiciona suporte ao carrossel para dispositivos móveis
    window.addEventListener('resize', () => {
        // Atualiza o width do projeto ao redimensionar a janela
        const projectWidth = document.querySelector('.project').clientWidth;
        carousel.style.transform = `translateX(-${index * projectWidth}px)`;
    });
});
