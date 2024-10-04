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
