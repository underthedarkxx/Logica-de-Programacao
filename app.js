alert('Boa vindas ao jogo do número secreto');

let numeroSecreto = 4;
//O programa já vai mostrar o numero secreto porem somente no console.
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 30')

// Se o chute for igual ao numero secreto
if (chute == numeroSecreto){
    alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto}`);
}else {
    alert('Você errou :(');
}
/*
Outra forma de fazer o if do numero secreto.
if (chute == numeroSecreto) {
    alert('Acertou')
} else {
    alert('O número secreto era ' + numeroSecreto)
}*/
