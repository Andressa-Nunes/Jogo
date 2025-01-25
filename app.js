let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let elemento = document.querySelector(tag, texto);
    elemento.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}


function exibirMensagemInicial () {
    exibirTextoNaTela ('h1', 'Jogo do numero secreto');
    exibirTextoNaTela ('p', 'Escolha um numero de 1 a 10');
}
    exibirMensagemInicial();


// valeu é para ele selecionar só o valor do input
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Acertou!');
        let palavraTentaviva = tentativas > 1? 'tentativas' : 'tentativa'
        let mensagemTentativas = (`Você descobriu o número secreto com um total de ${tentativas} ${palavraTentaviva}!`);
        exibirTextoNaTela ('p', mensagemTentativas);
        // nesse caso estamos removendo o atributo de desabilitado do botão de reiniciar(novo jogo) 
        document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
        if (chute > numeroSecreto) 
        exibirTextoNaTela ('p','O número secreto é menor');
    else {
        exibirTextoNaTela ('p', 'O número secreto é maior');
    }
    tentativas++
    limparCampo();
} 
}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();

    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}



function limparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}











//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

