let listaEmpresas = []; // Inicializa uma lista vazia para armazenar as empresas

let cadastrarClick = document.querySelector(`#cadastrar`).addEventListener('click',cadastrarEmpresa )

// Event listener para o botão de cadastrar
function cadastrarEmpresa() {

    // Pega os valores dos campos de nome e CNPJ
    let nome = document.querySelector('#nome').value;
    let cnpj = document.querySelector('#cnpj').value;

    // Verifica se algum campo está vazio
    if (nome.trim() == '' || cnpj.trim() == '') {
        window.alert('Preencha os campos corretamente');
        return;
    }

    // Cria um objeto representando a empresa
    let empresa = {
        nome: nome,
        cnpj: cnpj
    };

    // Verifica se listaEmpresas não é um array e o inicializa se necessário
    if (!Array.isArray(listaEmpresas)) {
        listaEmpresas = [];
    }

    // Adiciona a nova empresa à lista
    listaEmpresas.push(empresa);

    // Limpa os campos de nome e CNPJ após cadastrar
    document.querySelector('#nome').value = '';
    document.querySelector('#cnpj').value = '';

    // Chama a função para mostrar o cadastro na tela
    mostrarEmpresas();
}

// Função para mostrar o cadastro na tela
function mostrarEmpresas() {
    let infoCad = document.querySelector('.info-cad'); // Seleciona a div onde serão mostradas as empresas cadastradas
    infoCad.innerHTML = ''; // Limpa o conteúdo atual

    if (Array.isArray(listaEmpresas)) {
        // Itera sobre a lista de empresas e cria divs para cada uma delas
        listaEmpresas.forEach((empresa, posicao) => {
            let novaDivEmpresa = document.createElement('div');
            novaDivEmpresa.classList.add('empresas');

            // Cria o conteúdo da div com nome, CNPJ e botões de ação (deletar e editar)
            let conteudoDiv = `<p>${empresa.nome}</p><p>${empresa.cnpj}</p>
            <div class="imgs">
                <img src="img/icons8-lixo-30.png" onclick="deletarEmpresa(${posicao})">
                <img src="img/icons8-editar-30.png" onclick="editarEmpresa(${posicao})">
            </div>`;

            // Insere o conteúdo na div e adiciona à div principal
            novaDivEmpresa.innerHTML = conteudoDiv;
            infoCad.appendChild(novaDivEmpresa);
        });

        // Salva as empresas no Local Storage
        localStorage.setItem('cadastroSalvo', JSON.stringify(listaEmpresas));
    }
}

// Função para recarregar as empresas do Local Storage
function recarregarEmpresas() {
    const empresaDoLocalStorage = localStorage.getItem('cadastroSalvo');
    listaEmpresas = JSON.parse(empresaDoLocalStorage); // Converte os dados de volta para objeto
    mostrarEmpresas();
}

recarregarEmpresas(); // Carrega as empresas salvas ao recarregar a página

// Função para deletar uma empresa
function deletarEmpresa(posicao) {
    listaEmpresas.splice(posicao, 1); // Remove a empresa na posição especificada
    mostrarEmpresas();
}

// Função para editar uma empresa
function editarEmpresa(posicao) {
    // Preenche os campos de edição com os valores da empresa selecionada
    document.getElementById('editarNome').value = listaEmpresas[posicao].nome;
    document.getElementById('editarCnpj').value = listaEmpresas[posicao].cnpj;

    // Exibe a tela de edição e o filtro para escurecer o fundo
    document.getElementById('telaEdicao').style.display = 'block';
    filtro.classList.toggle('escondido');

    // Adiciona um evento de clique para confirmar a edição
    document.getElementById('confirmarEdicao').onclick = function () {
        confirmarEdicao(posicao);
    };
}

// Função para confirmar a edição de uma empresa
function confirmarEdicao(posicao) {
    listaEmpresas[posicao].nome = document.getElementById('editarNome').value;
    listaEmpresas[posicao].cnpj = document.getElementById('editarCnpj').value;

    // Esconde a tela de edição e o filtro
    filtro.classList.toggle('escondido');
    document.getElementById('telaEdicao').style.display = 'none';

    mostrarEmpresas(); // Atualiza a exibição das empresas
}

// Event listener para esconder a tela de edição ao clicar no filtro
filtro.addEventListener('click', function () {
    filtro.classList.toggle('escondido');
    document.getElementById('telaEdicao').style.display = 'none';
});

// Função para cancelar a edição de uma empresa
function cancelarEdicao() {
    document.getElementById('telaEdicao').style.display = 'none';
    filtro.classList.toggle('escondido');
}

// Função para realizar o backup dos dados em formato JSON
function realizarBackup() {

    try {
        let dados = JSON.stringify(listaEmpresas, null, 2); // Converte para JSON com formatação com 2 espaços
        let fazerDownload = document.createElement('a');
        fazerDownload.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(dados);
        fazerDownload.download = 'backup_Dados.json';
        fazerDownload.click();
    } catch (error) {
        alert('Erro ao realizar o backup', error)
    }
}
