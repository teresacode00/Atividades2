const inputNome = document.getElementById('inputNome');
const inputAltura = document.getElementById('inputAltura');
const inputMasculino = document.getElementById('masculino');
const inputFeminino = document.getElementById('feminino');
const btnCalcular = document.getElementById('btnCalcularPeso');
const btnLimpar = document.getElementById('btnLimpar');
const outResultadoDoPeso = document.getElementById('outResultadoDoPeso');

// Peso ideal do Homem = 22 * altura²
// Peso ideal da Mulher = 21 * altura²

function pesoIdeal() {
    let nome = inputNome.value.trim();
    let altura = Number(inputAltura.value);
    let masculino = inputMasculino.checked;
    let feminino = inputFeminino.checked;

    // checa se o campo do nome ou sexo está vazio
    if (nome === '' || (!masculino && !feminino)) {
        alert('Digite o seu nome e selecione o sexo!');
        inputNome.focus();
        return;
    }

    // checa se a altura é válida
    if (isNaN(altura) || altura <= 0) {
        alert('Digite uma altura válida!');
        inputAltura.focus();
        return;
    }

    // calcula peso ideal somente após validações
    let pesoIdeal;
    if (masculino) {
        pesoIdeal = 22 * Math.pow(altura, 2);
    } else {
        pesoIdeal = 21 * Math.pow(altura, 2);
    }

    outResultadoDoPeso.textContent = `O seu peso ideal é: ${pesoIdeal.toFixed(2)} Kgs`;
}

btnCalcular.addEventListener('click', pesoIdeal);

function limparCampos() {
    inputNome.value = '';
    inputAltura.value = '';
    inputMasculino.checked = false;
    inputFeminino.checked = false;
    outResultadoDoPeso.textContent = '';
    inputNome.focus();
}

btnLimpar.addEventListener('click', limparCampos);
