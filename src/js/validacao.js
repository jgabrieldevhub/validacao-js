function fnNomeTitulo(){
    const campoTituloFilme = document.getElementById('tituloFilme');

    if(campoTituloFilme.value.trim() == ""){
        return console.log("Preencha o campo Titulo")
    }

    if(campoTituloFilme.value.length > 200){
        console.log("Numero máximo atingido")
    }

    console.log(campoTituloFilme.value);
}

function fnTituloOriginal(){
    const campoTituloOriginal = document.getElementById('tituloOriginal');

    if(campoTituloOriginal.value.trim() == ""){
        return console.log("Preencha o campo titulo")
    }

    if(campoTituloOriginal.value.length > 200){
        console.log("Numero máximo atingido")
    }

    console.log(campoTituloOriginal.value);
}

function fnAnoProducao(){
    const campoAnoProducao = document.getElementById('anoProducao')
    var anoAtual = 2026

    if(campoAnoProducao.value < 1888 || campoAnoProducao.value > anoAtual + 5){
        console.log("n vai rolar")
    }

    console.log(campoAnoProducao.value);
}

function fnAnoLancamento(){
    const campoAnoLancamento = document.getElementById('anoProducao')

    if(campoAnoLancamento.value ){
        
    }

    console.log(campoAnoLancamento.value);
}