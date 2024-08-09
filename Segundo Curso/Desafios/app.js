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
//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
/*
function calcIMC(alturaMetros, peso){
    let imc = peso / (alturaMetros * alturaMetros);
    console.log(`${imc}`);
}
  let reciveNum = calcIMC(1.80, 105);
*/
/*
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  // Exemplo de uso
  let numero = 5;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);
  */
/*
  function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 5.53;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
  }
  
  // Exemplo de uso
  let valorEmDolar = 50;
  let valorEmReais = converterDolarParaReal(valorEmDolar);
  console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);
 */
/*
function calcularAreaPerimetroSalaRetangular(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);
  
  console.log(`Área da sala: ${area} metros quadrados`);
  console.log(`Perímetro da sala: ${perimetro} metros`);
}

let altura = 3; // em metros
let largura = 5; // em metros
calcularAreaPerimetroSalaRetangular(altura, largura);
*/
/*
function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  
  // Exemplo de uso
  let raio = 4; // em metros
  calcularAreaPerimetroSalaCircular(raio);
*/
/*
function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  // Exemplo de uso
  let numero = 7;
  mostrarTabuada(numero);
*/
