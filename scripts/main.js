// main.js
document.addEventListener("DOMContentLoaded", function () {
    const toggleIcon = document.querySelector('.toggle-icon');
    const subMenu = document.querySelector('.sub-menu');
    const header = document.querySelector('header');

    toggleIcon.addEventListener('click', function () {
        subMenu.classList.toggle('show');
        header.classList.toggle('pushed'); // Adiciona ou remove a classe 'pushed'
    });
});

function toggleMenu() {
    const navContainer = document.getElementById('nav-container');
    const menu = document.querySelector('.sub-menu');

    // Alterna a classe 'pushed' no navContainer
    navContainer.classList.toggle('pushed');

    // Lógica para exibir ou ocultar o menu
    if (menu) {
        menu.classList.toggle('show');
    }
}


$(document).ready(function () {
    $('#toggle-menu').click(function () {
        $('body').toggleClass('menu-open'); // Alterna a classe "menu-open" no body
        $(this).toggleClass('active'); // Adiciona uma classe 'active' para o toggle
        $('.sub-menu').toggleClass('show'); // Adiciona a classe 'show' ao menu
    });

    // Efeito de máquina de escrever
    const nameElement = document.getElementById("name");
    const name = "Gabriel Proença";
    let index = 0;

    function typeName() {
        if (index < name.length) {
            nameElement.textContent += name.charAt(index);
            index++;
            setTimeout(typeName, 100); // Tempo entre cada letra
        }
    }

    typeName();
});

// Função para o botão de voltar ao topo
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    // Mostrar o botão quando rolar para baixo
    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // Ao clicar, rolar suavemente para o topo
    backToTopButton.onclick = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});

function startDigitalClock() {
    const clock = document.getElementById('digitalClock');
    setInterval(() => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        clock.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
}

// Iniciar o relógio assim que a página carregar
window.onload = startDigitalClock;
