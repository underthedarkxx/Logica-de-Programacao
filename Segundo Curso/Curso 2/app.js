//Case sensitive= Diferencie maiusculas e minusculas.


//let titulo = document.querySelector/*Case sensitive*/('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let numeroSecreto = gerarNumeroAleatorio();

//funções com retorno e parametro.
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

//função sem retorno e parametro
function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

//função com retorno
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}