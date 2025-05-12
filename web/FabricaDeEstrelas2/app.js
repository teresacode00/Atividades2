const inputNumero = document.getElementById('inputNumero');
const btnEstrelas = document.getElementById('btnEstrelas');
const outEstrelas = document.getElementById('outEstrelas');

function mostrarEstrelas() {
    
    let numeroDeEstrelas = Number(inputNumero.value);
    let estrelas = '';

    if (numeroDeEstrelas == 0 || numeroDeEstrelas == '' || isNaN(numeroDeEstrelas)) {
        alert('Preencha o campo corretamente !');
        inputNumero.value = '';
        inputNumero.focus();
        return;
    }

    for (let index = 0; index < numeroDeEstrelas; index++) {
        estrelas += '*';

        estrelas += '\n';
    }
    outEstrelas.textContent = estrelas;
}

btnEstrelas.addEventListener('click', mostrarEstrelas);