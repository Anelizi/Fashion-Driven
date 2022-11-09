let input = null;

let modeloTitulo, golaTitulo, tecidoTitulo;

//const nomeUsuario = prompt("qual seu nome?");


//pegar a camisa que foi clicada e trazer para o javaScript
function selecionadoModelo(camisaClicada, modelo){
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

//verificando se é uma URL
function checkUrl(str){
    //Se o que o usuario mandou for diferente de null e de string vazio
    if(str != null && str != ''){
        let url_ok = /(https(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
        return url_ok.test(str);
    }else{
        return false;
    }
}

//função para pega o valor do input 
const pegarUrl = document.querySelector('[data-button]');

const buttonUrl = (evento) =>{
    evento.preventDefault();
     
    input = document.querySelector('[data-form-input]').value;
    // verificando se o que o usuario mandou é uma url
    let checkInput = checkUrl(input);
    //Colocar um if aqui
    console.log(input);
    input.value = '';
}

pegarUrl.addEventListener('click', buttonUrl);

const ativarBotaoFecharPedido = () =>{
    //se camisa estiver selecionada
  
}