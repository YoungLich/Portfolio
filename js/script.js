// Atualiza o relógio
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
}, 1000); // Adicione o intervalo de tempo para atualizar o relógio a cada segundo

// Voltar ao topo
const btn = document.querySelector("#back-to-top");
btn.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

// Efeito de máquina de escrever
function typeWritter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 150 * i);
    });
}
const titulo = document.querySelector(".title_texto_nome");
if (titulo) {
    typeWritter(titulo);
}

// Lógica para alterar tema do portfólio
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('dark-icon');
    const lightIcon = document.getElementById('light-icon');
    const themeStylesheet = document.getElementById('theme-stylesheet');

    // Verifica o tema salvo no localStorage e define o tema e ícones apropriados
    const savedTheme = localStorage.getItem('theme') || 'css/style.css';
    themeStylesheet.setAttribute('href', savedTheme);

    // Atualiza os ícones com base no tema atual
    if (savedTheme.includes('themewhite.css')) {
        darkIcon.style.display = 'none';
        lightIcon.style.display = 'block';
    } else {
        darkIcon.style.display = 'block';
        lightIcon.style.display = 'none';
    }

    // Configura o botão para alternar temas e ícones
    themeToggle.addEventListener('click', () => {
        const currentTheme = themeStylesheet.getAttribute('href');
        let newTheme;

        if (currentTheme.includes('style.css')) {
            newTheme = 'css/themewhite.css';
            darkIcon.style.display = 'none';
            lightIcon.style.display = 'block';
        } else {
            newTheme = 'css/style.css';
            darkIcon.style.display = 'block';
            lightIcon.style.display = 'none';
        }

        themeStylesheet.setAttribute('href', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
