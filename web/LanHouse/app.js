const inputPrecoPorMin = document.getElementById('inputPrecoPorMin');
const inputTempoDeUso = document.getElementById('inputTempoDeUso');
const btnCalcular = document.getElementById('btnCalcular');
const outResultado = document.getElementById('outResultado');

function calcularPreco() {
    
    let precoPorMin = Number(inputPrecoPorMin.value);
    let tempoDeUso = Number(inputTempoDeUso.value * 60); // Convertendo horas p minutos
    let tempoTotalDeUso = Number(tempoDeUso / 15);

    let precoTotal = Number(precoPorMin * tempoTotalDeUso);
    outResultado.textContent = `Valor a Pagar: R$ ${precoTotal}`;
}

btnCalcular.addEventListener('click', calcularPreco);