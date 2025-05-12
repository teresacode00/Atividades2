const inputProduto = document.getElementById('inputProduto');
const inputPrecoDoProduto = document.getElementById('inputPrecoDoProduto');
const btnPreco = document.getElementById('btnPreco');
const outPromocao = document.getElementById('outPromocao');
const outPrecoDoProduto3 = document.getElementById('outPrecoDoProduto3');

function calcularPreco() {
    const nomeDoProduto = inputProduto.value;
    const precoDoProduto = Number(inputPrecoDoProduto.value);

    if (nomeDoProduto === '' || isNaN(precoDoProduto) || precoDoProduto <= 0) {
        alert('Preencha corretamente o nome e o preço do produto!');
        inputProduto.focus();
        return;
    }

    const precoDaPromocao = ((precoDoProduto * 2) + (precoDoProduto * 0.5)).toFixed(2);
    const precoDoProduto3 = (precoDoProduto * 0.5).toFixed(2);

    outPromocao.textContent = `${nomeDoProduto} - Promoção: Leve 3 por R$ ${precoDaPromocao}`;
    outPrecoDoProduto3.textContent = `O 3º produto sai por: R$ ${precoDoProduto3}`;
}

btnPreco.addEventListener('click', calcularPreco);
// Limpar os campos depois d cálculo