const inputFilme = document.getElementById('inputFilme');
const inputTempo = document.getElementById('inputTempo');
const btnConverter = document.getElementById('btnConverter');
const outFilme = document.getElementById('outFilme');
const outTempo = document.getElementById('outTempo');

function converterTempo() {
    
    let nomeDoFilme = inputFilme.value;
    let tempo = Number(inputTempo.value);

    let horasDeDuracao = Math.floor(tempo / 60); // retorna a quantidade de horas
    let minutosDeDuracao = tempo % 60; // resto da divisão

    outFilme.textContent = nomeDoFilme;
    outTempo.textContent = `${horasDeDuracao} hora(s) e ${minutosDeDuracao} minuto(s)`;
}

btnConverter.addEventListener('click', converterTempo);