const menuToggle = document.querySelector('.menu-toggle');
const menuMobileItems = document.querySelector('.menu-mobile-items');

// Alterna a exibição do menu mobile
menuToggle.addEventListener('click', () => {
    menuMobileItems.classList.toggle('active');
});

// Oculta o menu mobile ao clicar em um item do menu
menuMobileItems.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', () => {
        menuMobileItems.classList.remove('active');
    });
});
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function scrollToClass(className) {
    const element = document.querySelector(`.${className}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os links dentro da navegação com a classe "menu-desktop"
    document.querySelectorAll(".menu-desktop a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault(); // Previne o comportamento padrão do link

            // Obtém a classe do elemento alvo a partir do href
            const className = this.getAttribute("href").substring(1);
            const targetElement = document.querySelector(`.${className}`);

            // Se o elemento alvo existir, rola suavemente até ele
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os links dentro da navegação com a classe "menu-desktop"
    document.querySelectorAll(".menu-mobile a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault(); // Previne o comportamento padrão do link

            // Obtém a classe do elemento alvo a partir do href
            const className = this.getAttribute("href").substring(1);
            const targetElement = document.querySelector(`.${className}`);

            // Se o elemento alvo existir, rola suavemente até ele
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});