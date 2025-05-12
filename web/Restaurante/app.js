const inputPrecoPorQuilo = document.getElementById('inputPrecoPorQuilo');
const inputPeso = document.getElementById('inputPeso');
const btnPreco = document.getElementById('btnPreco');
const outTotalAPagar = document.getElementById('outTotalAPagar');

function CalcularPreco() {
    const preco = Number(inputPrecoPorQuilo.value);
    const peso = Number(inputPeso.value);

    if (isNaN(preco) || preco <= 0 || isNaN(peso) || peso <= 0) {
        alert('Preencha os campos corretamente com valores válidos!');
        inputPrecoPorQuilo.focus();
        return;
    }

    const pesoQuilo = peso / 1000;
    const precoTotal = (preco * pesoQuilo).toFixed(2);

    outTotalAPagar.textContent = `Preço total: R$ ${precoTotal}`;
}

btnPreco.addEventListener('click', CalcularPreco);
