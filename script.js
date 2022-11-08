

//pegar a camisa que foi clicada e trazer para o javaScript
function selecionadoModelo(camisaClicada){
    // pegar o elemento que foi selecionado anteriormete
    const pratoSelicionado = document.querySelector('.caixa1 .selecionado');
    // ve se a camisa selecionada não é null
    if(pratoSelicionado !== null){
        // remever a classe selecionado
        pratoSelicionado.classList.remove('selecionado');
    }
    //adicionar a classe selecionado no elemendo que foi clicado
    camisaClicada.classList.add('selecionado');
}


//pegar a camisa que foi clicada e trazer para o javaScript
function selecionadoGola(camisaClicada){
    // pegar o elemento que foi selecionado anteriormete
    const pratoSelicionado = document.querySelector('.caixa2 .selecionado');
    // ve se a camisa selecionada não é null
    if(pratoSelicionado !== null){
        // remever a classe selecionado
        pratoSelicionado.classList.remove('selecionado');
    }
    //adicionar a classe selecionado no elemendo que foi clicado
    camisaClicada.classList.add('selecionado');
}


//pegar a camisa que foi clicada e trazer para o javaScript
function selecionadoTecido(camisaClicada){
    // pegar o elemento que foi selecionado anteriormete
    const pratoSelicionado = document.querySelector('.caixa3 .selecionado');
    // ve se a camisa selecionada não é null
    if(pratoSelicionado !== null){
        // remever a classe selecionado
        pratoSelicionado.classList.remove('selecionado');
    }
    //adicionar a classe selecionado no elemendo que foi clicado
    camisaClicada.classList.add('selecionado');
}