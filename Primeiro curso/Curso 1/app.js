alert('Boa vindas ao jogo do número secreto');
let numeroTotal = 3;
//serve para gerar um numero aleatório que não sabemos. 
let numeroSecreto = parseInt(Math.random() * numeroTotal + 1);
//O programa já vai mostrar o numero secreto porem somente no console.
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual o numero secreto
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroTotal}`);
        // Se o chute for igual ao numero secreto
        if (chute == numeroSecreto){
            //Para
            break;
        } else {

            if(chute > numeroSecreto){
                alert(`O número secreto é menor que ${chute}.`);
            }
            else{
                alert(`O número secreto é maior que ${chute}`);
            }
            //tentativas = tentativas + 1;
            tentativas++;
        }
        /*
        //Outra forma de fazer o if do numero secreto.
        if (chute == numeroSecreto) {
            alert('Acertou')
        } else {
            alert('O número secreto era ' + numeroSecreto)
        }*/
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

/*
if(tentativas > 1){
    alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else{
    alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

