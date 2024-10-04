// main.js
$(document).ready(function () {
    $('#toggle-menu').click(function () {
        $('#menu').toggleClass('active'); // Adiciona ou remove a classe "active"
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
