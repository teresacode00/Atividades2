const inputCarro = document.getElementById('inputCarro');
const inputPreco = document.getElementById('inputPreco');
const btnCalcularPreco = document.getElementById('btnCalcularPreco');
const outNomeDoCarro = document.getElementById('outNomeDoCarro');
const outValorDaEntrada = document.getElementById('outValorDaEntrada');
const outValorDasParcelas = document.getElementById('outValorDasParcelas');

function calcularPreco() {
    const nomeDoCarro = inputCarro.value;
    const precoDoCarro = Number(inputPreco.value);

    if (nomeDoCarro === '' || isNaN(precoDoCarro) || precoDoCarro <= 0) {
        alert('Preencha corretamente o nome do carro e o preço!');
        inputCarro.focus();
        return;
    }

    const valorDaEntrada = (precoDoCarro * 0.3).toFixed(2);
    const valorDasParcelas = ((precoDoCarro - valorDaEntrada) / 12).toFixed(2);

    outNomeDoCarro.textContent = nomeDoCarro;
    outValorDaEntrada.textContent = `Entrada: R$ ${valorDaEntrada}`;
    outValorDasParcelas.textContent = `12 parcelas de R$ ${valorDasParcelas}`;
}

btnCalcularPreco.addEventListener('click', calcularPreco);
