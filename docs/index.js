let listaEmpresas = [];

document.querySelector(`#cadastrar`).addEventListener(`click`, function () {
    let nome = document.querySelector('#nome').value
    let cnpj = document.querySelector('#cnpj').value


    if (nome.trim() == '' || cnpj.trim() == '') { // trim serve para verificar antes se tem ou n espaço em branco antes, antes de ver se estão vazias
        window.alert('preencha os campos corretamente')
        return
    }

    let empresa = {
        nome: nome,
        cnpj: cnpj
    }

    if (!Array.isArray(listaEmpresas)) { // para ser ver se veerificar se é uma array, se ñ for inicializa como array
        listaEmpresas = [];
    }
    
    listaEmpresas.push(empresa)

    document.querySelector('#nome').value = ''
    document.querySelector('#cnpj').value = ''

    mostrarCadastro();

    

})

console.log(listaEmpresas)

function mostrarCadastro() {
    let infoCad = document.querySelector('.info-cad'); // cria uma variavel com o class da div info-cad
    infoCad.innerHTML = ''; // deixa sem valor 

    if (Array.isArray(listaEmpresas)) {
        listaEmpresas.forEach((empresa, posicao) => {
            let novaDivEmpresa = document.createElement('div');
            novaDivEmpresa.classList.add('empresas');

            let conteudoDiv = `<p>${empresa.nome}</p><p>${empresa.cnpj}</p>
            <div class="imgs">
                <img src="img/icons8-lixo-30.png" onclick="deletarEmpresa(${posicao})">
                <img src="img/icons8-editar-30.png" onclick="editarEmpresa(${posicao})">
            </div>`;

            novaDivEmpresa.innerHTML = conteudoDiv;
            infoCad.appendChild(novaDivEmpresa);
        });

        localStorage.setItem('cadastroSalvo', JSON.stringify(listaEmpresas) )    //LocalStorage so aceita sting, por isso usar 
}
}

function recarregarEmpresas(){
    const empresaDoLocalStorage = localStorage.getItem('cadastroSalvo')

    listaEmpresas = JSON.parse(empresaDoLocalStorage) // transforma de volta a objeto
    mostrarCadastro()
}

recarregarEmpresas()

function deletarEmpresa(posicao){
    listaEmpresas.splice(posicao, 1) // seleciona quem quer deletar o 1 é quantos intens apartir de dele é pra deletetar ent é 1, pq é só ele
     
    mostrarCadastro()
}

const filtro = document.querySelector('.filtro')
function editarEmpresa(posicao) {
    // preenche os campos do input com os valores que foram cadastrados
    document.getElementById('editarNome').value = listaEmpresas[posicao].nome;
    document.getElementById('editarCnpj').value = listaEmpresas[posicao].cnpj;

    document.getElementById('telaEdicao').style.display = 'block';
    filtro.classList.toggle('escondido')

    document.getElementById('confirmarEdicao').onclick = function () {
        confirmarEdicao(posicao);
    };
}



function confirmarEdicao(posicao) {
    listaEmpresas[posicao].nome = document.getElementById('editarNome').value;
    listaEmpresas[posicao].cnpj = document.getElementById('editarCnpj').value;
    filtro.classList.toggle('escondido')
    document.getElementById('telaEdicao').style.display = 'none';

    mostrarCadastro();
}


filtro.addEventListener('click', function(){
    filtro.classList.toggle('escondido')
    document.getElementById('telaEdicao').style.display = 'none';
})

function cancelarEdicao() {
    document.getElementById('telaEdicao').style.display = 'none';
    filtro.classList.toggle('escondido')
}




function realizarBackup(){
    let dados = JSON.stringify(listaEmpresas)

    let fazerDownload = document.createElement('a')
    fazerDownload.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(dados);
    fazerDownload.download = 'backup_Dados.json'
    fazerDownload.click()
}
