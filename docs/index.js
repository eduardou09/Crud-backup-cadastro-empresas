const titulo = document.querySelector('#titulo-box');
const conheca = document.querySelector('#conheca');
const boxColor = document.querySelector('.box-laranja');
const mudarCor = document.getElementsByClassName('color');
const corTituloPadrao = window.getComputedStyle(titulo).color;
const corConheca = getComputedStyle(conheca).color;
const funci = document.querySelector('#funci');
const ideia = document.querySelector('#ideia');
const devs = document.querySelector('#devs');
const mix = document.querySelector('#mix');
const infoDiv = document.querySelector('.info');
const pfunci = document.querySelector('#funci p')
const pIdeia = document.querySelector('#ideia p')
const pDevs = document.querySelector('#devs p')
const pMix = document.querySelector('#mix p')



let primeiroP = document.querySelector('#primeiro-parag');
let segundoP = document.querySelector('#segundo-paraf');

// Nav-bar
document.querySelector('.Tmenu').addEventListener('click', () => {
    document.querySelector('.menu ').classList.toggle('active');
});

function corInicialBtn() {
    document.querySelector('#funci').style.background = '#fb1b1b';
    document.querySelector('#ideia').style.background = '#fb1b1b';
    document.querySelector('#devs').style.background = '#fb1b1b';
    document.querySelector('#mix').style.background = '#fb1b1b';
}

function corAmareloBtn() {
    funci.style.background = '#8CB90E';
    ideia.style.background = '#8CB90E';
    devs.style.background = '#8CB90E';
    mix.style.background = '#8CB90E';
}

function corAzulBtn() {
    funci.style.background = '#499DFF';
    ideia.style.background = '#499DFF';
    devs.style.background = '#499DFF';
    mix.style.background = '#499DFF';
}

function corCinzaBtn() {
    funci.style.background = '#D9D9D9';
    ideia.style.background = '#D9D9D9';
    devs.style.background = '#D9D9D9';
    mix.style.background = '#D9D9D9';
   
    
}

function corInicialInfo() {
    titulo.style.color = corTituloPadrao;
    primeiroP.style.color = corConheca;
    segundoP.style.color = corConheca;
    conheca.style.color = corConheca;
}



function laranja() {
    resetarEstado();
    corInicialInfo();
    corInicialBtn();
    resetarCores() 
    document.querySelector('#funci').style.background = '#FF9A3D';
    for (let i = 0; i < mudarCor.length; i++) {
        mudarCor[i].style.color = '#ff5A00';
    }

 
    
    titulo.innerHTML = 'Propósito do Software';
    primeiroP.style.display = 'block';
    segundoP.style.display = 'block';
    primeiroP.innerHTML = '<p>O propósito do nosso software é <span>supervisionar o processo de compra com fornecedor,</span> desde a sua solicitação até o seu registro no estoque da empresa, salvando automaticamente os documentos de cada etapa</p>';
    segundoP.innerHTML = '<p>A funcionalidade de Métricas Estáticas de Fornecedores é uma parte integrante do sistema que oferece à empresa <span> uma visão detalhada e analítica do desempenho dos fornecedores. </span> Esta funcionalidade permite que a empresa monitore e avalie o tempo decorrido desde o pedido até a entrega no estoque,<span> também oferece o tempo dedicado a cada etapa do processo de fornecimento.</p>';
    boxColor.style.backgroundImage = 'linear-gradient(to right, #ff5900 50%, #cd500b 60%, #723b1d 96%)';
}

laranja()

function chamarLaranja(){
    laranja()
}

function amarelo() {
    resetarEstado();
    corInicialInfo();
    corAmareloBtn();
    resetarCores() 
    document.querySelector('#ideia').style.background = '#FF9A3D';
    for (let i = 0; i < mudarCor.length; i++) {
        mudarCor[i].style.color = '#FFD600';
    }
    
    conheca.style.color = '#000000';
    titulo.innerHTML = 'Como surgiu a ideia';
    primeiroP.style.display = 'block';
    segundoP.style.display = 'block';
    primeiroP.innerHTML = 'A ideia surgiu em uma conversa com um amigo. Estávamos discutindo o que poderíamos desenvolver para auxiliar a empresa dele, a Mix Utilidades.';
    segundoP.innerHTML = 'Ele expressou a necessidade de uma ferramenta que o ajudasse a visualizar o processo de compra com os fornecedores, apresentando um passo a passo que indica em qual etapa a mercadoria se encontra e, simultaneamente, permitisse o armazenamento dos documentos relacionados a cada fase.';
    titulo.style.color = '#4A4747';
    primeiroP.style.color = '#4A4747';
    segundoP.style.color = '#4A4747';
    boxColor.style.backgroundImage = 'linear-gradient(to right, #FFD600 20%, #A4583F 95%)';
}

function azul() {
    resetarEstado();
    corInicialBtn();
    corAzulBtn();
    resetarCores() 
   
    boxColor.style.backgroundImage = 'linear-gradient(to right, #499DFF 50%,  #E9D1CA 96%)'
    document.querySelector('#devs').style.background = '#FF9A3D';
    for (let i = 0; i < mudarCor.length; i++) {
        mudarCor[i].style.color = '#499DFF';
    }
    titulo.innerHTML = 'Desenvolvedores';
    titulo.style.color = '#ffffff'
    const desenvolvedores = document.createElement('div');
    desenvolvedores.classList.add('desenvolvedores');
    desenvolvedores.innerHTML = `
    <div class="Eduardo">
    <h3>Eduardo Ulysséa</h3>
    <div class="foto-efeito"></div>
    <h4>Desenvolvedor Front-end</h4>
    <p id="tech">Tecnologias:</p>
    <p>React, Node e JavaScript</p>
    <p id="contato">Contato: </p>
    <div class="buttons-Contato">
        <a href="eduardo-ulyss%C3%A9a-188621269/"><button>Linkedin</button></a>
        <a href="https://github.com/eduardou09"><button>Github</button></a>
        <a href="eduardoulyssea.me"><button>Portfólio</button></a>
        <a href="https://www.instagram.com/ulyssea_03/?igshid=MjEwN2IyYWYwYw%3D%3D"><button>Instagram</button></a>
    </div>
</div>
<div class="peron">
    <h3>Leonardo P krause</h3>
    <div class="foto-efeito-peron"></div>
    <h4>Desenvolvedor Back-end</h4>
    <p id="tech">Tecnologias:</p>
    <p>Python, SQL</p>
    <p id="contato">Contato: </p>
    <div class="buttons-Contato">
        <a href="https://www.linkedin.com/in/leonardo-peron-krause/"><button>Linkedin</button></a>
        <a href="https://github.com/LeonardoPeronKrause"><button>Github</button></a>
    </div>
</div>
    `;

    const desenvolvedoresDiv = document.querySelector('.desenvolvedores');
    if (desenvolvedoresDiv) {
        desenvolvedoresDiv.style.display = 'flex';
    } else {
        infoDiv.appendChild(desenvolvedores);
    }
}

function cinza() {
    resetarEstado();
    corInicialBtn();
    // Supondo que você tenha uma função chamada corCinzaBtn que define a cor dos botões para cinza
    corCinzaBtn(); // Adapte isso para ajustar as cores dos botões

    document.querySelector('#mix').style.background = '#FF9A3D';
    for (let i = 0; i < mudarCor.length; i++) {
        mudarCor[i].style.color = '#D9D9D9';
    }
    pfunci.style.color = '#000000';
    pIdeia.style.color = '#000000';
    pDevs.style.color = '#000000';
    conheca.style.color = '#000000';
    primeiroP.style.color = '#000000'
    boxColor.style.backgroundImage = 'linear-gradient(to right, #D9D9D9 50%,  #FF5A00 96%)';

   titulo.innerHTML = ' <span id="pretoMIX" >Mix</span> <span id = "tituloMix">UTILIDADES</span>'

   

    primeiroP.style.display = 'block';
    segundoP.style.display = 'none';
    primeiroP.innerHTML = 'Desde 2012, a Mix Utilidades se destaca como referência em utensílios domésticos, oferecendo produtos variados e inovadores para a casa. Com atenção à qualidade e design, a loja se tornou um ponto de encontro para entusiastas da culinária. Sua equipe atenciosa se dedica a orientar os clientes, garantindo uma experiência de compra satisfatória. Ao celebrar mais um ano, a Mix reafirma seu compromisso em ser o destino ideal para quem busca excelência em utensílios para casa.';
    
}


function resetarEstado() {
    primeiroP.style.display = 'none';
    segundoP.style.display = 'none';
    const desenvolvedoresDiv = document.querySelector('.desenvolvedores');

    if (desenvolvedoresDiv) {
        desenvolvedoresDiv.style.display = 'none';
    }
}

function resetarCores(){
    pfunci.style.color= ""
    pDevs.style.color= ""
    pIdeia.style.color= ""
}