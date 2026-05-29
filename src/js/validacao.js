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