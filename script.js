window.addEventListener('DOMContentLoaded', (event) => {
    const divsFilhas = document.querySelectorAll('.container-main > div');
    const containerEsquerdo = document.querySelector('.container-esquerdo');

    let alturaMaxima = 0;
    divsFilhas.forEach(div => {
        const altura = div.clientHeight;
        if (altura > alturaMaxima) {
            alturaMaxima = altura;
        }
    });

    containerEsquerdo.style.height = `${alturaMaxima}px`;
});
