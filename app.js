let listaDeNumerosSorteados = [];
let limiteDeNumerosSorteados = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha 1 número entre 1 e 10';
function exibirTextoNaTela(tag, textoFala){
    let campo = document.querySelector(tag);
    campo.innerHTML = textoFala;
    responsiveVoice.speak(textoFala, 'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial (){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto' );
    exibirTextoNaTela('p', `Escolha 1 número entre 1 e ${limiteDeNumerosSorteados}`);
}
exibirMensagemInicial();
function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensasemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensasemTentativas);
        document.getElementById("reiniciar").removeAttribute('disabled');
    } else { 
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela ('p', 'O numero secreto é maior');
        }
        //tentativas = tentativas + 1;
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * limiteDeNumerosSorteados + 1);
    let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosDaLista == limiteDeNumerosSorteados){
        console.log(listaDeNumerosSorteados);
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo(){
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativas = 1;
   exibirMensagemInicial()
   document.getElementById("reiniciar").setAttribute('disabled', true);
}