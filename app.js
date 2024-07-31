alert('Boa vindas ao jogo do número secreto');

let numeroSecreto = 3;
//O programa já vai mostrar o numero secreto porem somente no console.
console.log(numeroSecreto);
let chute 

//enquanto chute não for igual o numero secreto
while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');
        // Se o chute for igual ao numero secreto
        if (chute == numeroSecreto){
            alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto}`);
        } else {
            if(chute > numeroSecreto){
                alert(`O número secreto é menor que ${chute}.`);
            }
            else{
                alert(`O número secreto é maior que ${chute}`);
            }
    }
        /*
        //Outra forma de fazer o if do numero secreto.
        if (chute == numeroSecreto) {
            alert('Acertou')
        } else {
            alert('O número secreto era ' + numeroSecreto)
        }*/
}
