// main.js
$(document).ready(function () {
    $(".toggle-icon").click(function () {
        $('#nav-container').toggleClass("pushed");
        $('.sub-menu').toggleClass("show"); // Adiciona/remover a classe 'show' da lista
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
