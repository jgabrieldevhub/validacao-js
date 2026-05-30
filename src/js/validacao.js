function fnNomeTitulo(){
    const campoTituloFilme = document.getElementById('tituloFilme');

    if(campoTituloFilme.value.trim() == ""){
        return console.log("Preencha o campo Titulo");
    }

    if(campoTituloFilme.value.length > 200){
        console.log("Numero máximo atingido");
    }

    console.log(campoTituloFilme.value);
}

function fnTituloOriginal(){
    const campoTituloOriginal = document.getElementById('tituloOriginal');

    if(campoTituloOriginal.value.trim() == ""){
        return console.log("Preencha o campo titulo");
    }

    if(campoTituloOriginal.value.length > 200){
        console.log("Numero máximo atingido");
    }

    console.log(campoTituloOriginal.value);
}