// Dados dos imóveis
const imoveis = [
    {
        id: 1,
        imagem: 'images/imovel-a-15.webp',
        categoria: 'Flat',
        endereco: 'Rua A, 123',
        bairro: 'Elvamar',
        cidade: 'Governador Valadares',
        cep: '01000-000',
        area: 35,
        quartos: 1,
        banheiros: 1,
        vagas: 1,
        descricao: 'Flat exclusivo e moderno em Governador Valadares, com 35m², vista para a mata e o rio, Wi-Fi fibra ótica, ar-condicionado, varanda e completa infraestrutura.',
        tipo: 'Aluguel',
        preco: '3.500/mês',
        caracteristicas: ['Ar-condicionado', 'Iluminação natural', 'Varanda']
    },
    // Adicione mais imóveis aqui, se necessário
];

// Função para mostrar/ocultar filtros avançados
document.getElementById('toggleFilters').onclick = function () {
    const advancedFilters = document.getElementById('advancedFilters');
    const isVisible = advancedFilters.style.display !== 'none';
    advancedFilters.style.display = isVisible ? 'none' : 'block';
    this.textContent = isVisible ? '+ Filtros' : '- Filtros';
};

// Função para obter os parâmetros da URL (para pesquisa inicial)
const urlParams = new URLSearchParams(window.location.search);
const tipoPesquisa = urlParams.get('tipo');
const termoPesquisa = urlParams.get('termo');

// Função para carregar imóveis com base nos filtros
function carregarImoveis(filtroTipo, filtroTermo, filtrosAvancados = {}) {
    const lista = document.getElementById('resultadosImoveis');
    lista.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

    // Filtrando imóveis
    const resultados = imoveis.filter(imovel => {
        const matchesTipo = filtroTipo ? imovel.tipo.toLowerCase() === filtroTipo.toLowerCase() : true;
        const matchesTermo = filtroTermo ? imovel.endereco.toLowerCase().includes(filtroTermo.toLowerCase()) ||
            imovel.bairro.toLowerCase().includes(filtroTermo.toLowerCase()) ||
            imovel.cidade.toLowerCase().includes(filtroTermo.toLowerCase()) : true;

        // Filtros avançados
        const matchesCidade = filtrosAvancados.cidade ? imovel.cidade.toLowerCase() === filtrosAvancados.cidade.toLowerCase() : true;
        const matchesCategoria = filtrosAvancados.categoria ? imovel.categoria.toLowerCase() === filtrosAvancados.categoria.toLowerCase() : true;
        const matchesPrecoMin = filtrosAvancados.precoMin ? parseFloat(imovel.preco.replace('R$', '').replace('/mês', '').replace(',', '.')) >= filtrosAvancados.precoMin : true;
        const matchesPrecoMax = filtrosAvancados.precoMax ? parseFloat(imovel.preco.replace('R$', '').replace('/mês', '').replace(',', '.')) <= filtrosAvancados.precoMax : true;

        return matchesTipo && matchesTermo && matchesCidade && matchesCategoria && matchesPrecoMin && matchesPrecoMax;
    });

    // Exibir resultados
    resultados.forEach(imovel => {
        const item = document.createElement('div');
        item.classList.add('row', 'd-flex');
        item.innerHTML = `
    <div class="col-lg-6">
        <img src="${imovel.imagem}" alt="Imagem do imóvel" class="img-fluid"/>
    </div>
    <div class="col-lg-6 align-self-center">
        <p class="card-text small my-1">${imovel.categoria}</p>
        <h5 class="card-title">${imovel.bairro} - ${imovel.cidade}</h5>
        <p class="card-text small my-2">
            ${imovel.area}m² • ${imovel.quartos} Quarto(s) • ${imovel.banheiros} Banheiro(s) • ${imovel.vagas} Vaga(s)
        </p>
        <p class="card-text">${imovel.descricao}</p>
        <p class="card-text small fw-semibold m-0">${imovel.tipo.charAt(0).toUpperCase() + imovel.tipo.slice(1)}</p>
        <h5 class="card-title">R$ ${imovel.preco}</h5>
    </div>
        `;
        lista.appendChild(item);
    });
}

// Função para obter os filtros avançados
function obterFiltrosAvancados() {
    return {
        cidade: document.getElementById('cidade').value,
        categoria: document.getElementById('categoria').value,
        precoMin: parseFloat(document.getElementById('precoMin').value),
        precoMax: parseFloat(document.getElementById('precoMax').value)
    };
}

// Evento para o botão de pesquisa
document.getElementById('searchButton').addEventListener('click', function (event) {
    event.preventDefault();  // Evitar o envio do formulário

    // Coleta os filtros da URL e dos filtros avançados
    const filtrosAvancados = obterFiltrosAvancados();
    carregarImoveis(tipoPesquisa, termoPesquisa, filtrosAvancados);
});

// Carregar imóveis ao carregar a página com os filtros de URL e filtros avançados
carregarImoveis(tipoPesquisa, termoPesquisa);