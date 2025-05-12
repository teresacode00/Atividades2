const inputNumero = document.getElementById('inputNumero');
const btnEstrelas = document.getElementById('btnEstrelas');
const outEstrelas = document.getElementById('outEstrelas');

let estrelas = '';

function mostrarEstrelas() {
    
    let numeroDeEstrelas = Number(inputNumero.value);

    if (numeroDeEstrelas == 0 || isNaN(numeroDeEstrelas)) {
        alert('Digite um número');
        inputNumero.value = '';
        inputNumero.focus();
        return;
    }

    for (let index = 0; index < numeroDeEstrelas; index++) {
        
        
      estrelas += '*';

    }

    outEstrelas.textContent = estrelas;
}

btnEstrelas.addEventListener('click', mostrarEstrelas);