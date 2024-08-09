/*
Desafio modulo 1
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


//Desafio modulo 2
//Criar uma função que exibe "Olá, mundo!" no console.
//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
//Criar uma função que recebe três números como parâmetros e retorna a média deles.
//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
/*Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.*/
/*
function verificarConsole (){
    console.log('Olá, mundo!');
}
*/
/*
function verificarConsole(nome){
    console.log(`Olá, ${nome}!`);
}
verificarConsole('Roberto');
*/
/*
function dobronum(num){
    return num*2;
}

let exibirNum = dobronum(2);
console.log(exibirNum);
*/
/*
function mediaNum(num1, num2, num3) {
    return (num1+num2+num3)/3;
}
let calcMed = mediaNum(3,3,3);
console.log(calcMed);
*/
/*
function maiorNum(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else if(num2 > num1){
        return num2;
    }
    else{
        return ('Os dois numeros são iguais');
    }
}

let recebendoNum = maiorNum(3, 2);
console.log(recebendoNum);
*/
/*
function potNum(num){
    return num*num;
}

let reciveNum = potNum(10);
console.log(reciveNum);
*/
