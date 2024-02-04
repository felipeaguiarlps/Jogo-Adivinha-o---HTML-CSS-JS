//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Hora do Desafio';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function verificarChute(){
    console.log('O botão foi clicado!');
}

function exibirAlerta(){
    alert('Eu amo JS');
}

function exibirPrompt(){
    let nome_da_cidade = prompt('Digite o nome de uma cidade do Brasil:');
    alert(`O nome da cidade é ${nome_da_cidade}`);
}
function soma(){
    let numero1 = parseInt(prompt('Digite o primeiro número'));
    let numero2 = parseInt(prompt('Digite o segundo número'));
    soma = numero1 + numero2;
    alert(`O resultado da soma dos numeros ${numero1} + ${numero2} é ${soma}`);
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirTextoNaTela('h1', 'Hora do Desafio');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

let listaNumerosSorteados = [];

let numeroLimite = 10;

let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1;

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        quantidadeDeElementosNaLista = [];
    }
    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio;
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}



function aleatorio(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você Descobriu depois de ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O numero secreto é menor');
    } else {
        exibirTextoNaTela('p','O numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Hora do Desafio');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

exibirMensagemInicial();