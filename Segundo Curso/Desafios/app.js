let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarConsole(){
    console.log('O botão foi clicado');
}

function verificarAlert(){
    alert('Eu amo JS');
}

function verificarPrompt(){
    let cidade = prompt('Informe o nome de uma cidade');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function verificarSoma(){
    let numero1 = parseInt(prompt('Informe um numero:'));
    let numero2 = parseInt(prompt('Informe outro numero'));
    let resultado = numero1 + numero2;
    alert (`O numero ${numero1} + ${numero2} = ${resultado}`);
}

