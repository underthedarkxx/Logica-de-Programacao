/*
//Desafios Modulo 1

alert('Boas vindas ao nosso site!')

//let nome = lua;
//let idade = 25;
let nomeroDeVendas = 50;
let saldoDisponivel = 1000;

alert('Erro! Preencha todos os campos')

let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);

let nome = prompt('Informe seu nome:');

let idade = prompt('Informe a sua idade:');

if(idade >= 18){
    alert('Pode tirar a habilitação!');
}
*/
/*
//Desafios Modulo 2
//Exercicio 1
let Date_atual = prompt('Informe o dia da Semana:');



if(Date_atual == 'Sabado'){
    alert('Bom fim de semana!');
}else if(Date_atual == 'Domingo'){
    alert('Bom fim de semana!');
}else{
    alert('Boa semana!');
}
*/
/*
//Desafios Modulo 2
//Exercício 2

let num = prompt('Informe um numero negativo ou positivo');

if(num > 0){
    alert('Esse numero é positivo');
}
else if(num < 0){
    alert('Esse numero é negativo');
}
else{
    alert('Esse numero é o 0');
}
*/
/*
//Desafios Modulo 2
//Exercício 3
let Num = 100;
let userNum = prompt('Informe um numero');

if(userNum >= 100){
    alert('Parabéns!Você venceu!');
}
else{
    alert('Tente novamente para ganhar.');
}
*/
/*
//Desafios Modulo 2
//Exercício 4

let saldo = 2000;

let resposta = prompt('Deseja saber qual é o seu saldo atual?');

if(resposta == 'Sim' || 'S'|| 'sim' || 's'){
    
    alert(`O seu saldo atua eh:${saldo} reais`);
    
}
*/
/*
//Desafios Modulo 2
//Exercício 5

let nome = prompt('Informe seu nome:');

alert(`Seja bem vindo, ${nome}.`);
*/
/*
//Desafios Modulo 3
//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let num = 1;

while(num <= 10){
    console.log(num);
    num++;
}
*/
/*
//Desafio Modulo 3
//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let num = 10;

while(num >= 0){
    console.log(num);
    num--;
}
*/
/*
//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let num = prompt('Informe um numero');

while(num >= 0){
    console.log(num);
    num--;
}
*/
/*
//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let num_MAX = prompt('Informe um numero');
let contador = 0

while(contador <= num_MAX){
    console.log(contador);
    contador++;
}
*/
/*
//Modulo 4
//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas
let boasVindas = console.log('Boas Vindas.');
*/
/*
//Modulo 4
//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = 'Roberto';

console.log(`Olá, ${nome}`);
*/
/*
//Modulo 4
//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!"

let nome = 'Roberto';

alert(`Olá, ${nome}`);
*/
/*
//Modulo 4
//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let linguagem = [];

linguagem = prompt('Qual é a sua linguagem de programação favorita?');

console.log(`A linguagem favorita é: ${linguagem}`);
*/
/*
//Modulo 4
//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = 1;
let valor2 = 2;
let resultado = 0;

resultado = valor1 + valor2;

console.log(`A soma de ${valor1} + ${valor2} é igual a ${resultado}`);
*/
/*
//Modulo 4
//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = 1;
let valor2 = 2;
let resultado = 0;

resultado = valor1 - valor2;

console.log(`A diferença de ${valor1} e ${valor2} é igual a ${resultado}`);
*/
/*
//Modulo 4
//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let user_age = prompt('Informe a sua idade:');

if(user_age > 18){
    console.log(`Voce é maior de idade.`);
}
else{
    console.log(`Voce é menor de idade`);
}
*/
/*
//Modulo 4
//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero;

numero=prompt('Informe um numero');

if(numero > 0){
    console.log('Esse numero é positivo.');
}
else if(numero < 0){
    console.log('Esse numero é negativo');
}
else{
    console.log('Esse numero é zero ou nulo');
}
    */
/*
//Modulo 4
//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = 7;

if(nota>= 7){
    console.log('Aprovado.');
}
else{
    console.log('Reprovado');
}
*/
/*
//Modulo 4
//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

let numeroAleatório = parseInt(Math.random() *100 +1);
console.log(numeroAleatório);
*/
/*
//Modulo 4
//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let numeroAleatório = parseInt(Math.random() *10 +1);
console.log(numeroAleatório);
*/
/*
//Módulo 4
//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

let numeroAleatório = parseInt(Math.random() *1000 +1);
console.log(numeroAleatório);
*/
