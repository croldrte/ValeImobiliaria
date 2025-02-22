// Dados dos imóveis
const imoveis = [
    {
        id: 'FL01',
        imagem: 'images/imovel-fl01-1.webp',
        tipo: 'Flat',
        endereco: 'Rua A, 123',
        bairro: 'Elvamar',
        cidade: 'Governador Valadares',
        cep: '01000-000',
        area: 35,
        quartos: 1,
        banheiros: 1,
        vagas: 1,
        descricao: 'Flat exclusivo e moderno em Governador Valadares, com 35m², vista para a mata e o rio, Wi-Fi fibra ótica, ar-condicionado, varanda e completa infraestrutura.',
        pretensao: 'Aluguel',
        preco: 3500,
        caracteristicas: ['ar-condicionado', 'iluminacao-natural', 'varanda']
    }
];

function getQueryParams() {
    const params = new URLSearchParams(window.location.search);

    const caracteristicas = [
        'academia', 'ar-condicionado', 'area-verde', 'automacao-residencial',
        'brinquedoteca', 'cameras-seguranca', 'churrasqueira', 'elevador',
        'energia-solar', 'espaco-gourmet', 'fechaduras-eletronicas', 'iluminacao-natural',
        'isolamento-acustico', 'jardim', 'pet-place', 'piscina', 'playground',
        'portaria-24h', 'quadra-esportiva', 'quintal', 'salao-festas', 'salao-jogos',
        'sauna', 'sistema-alarme', 'varanda'
    ];

    return {
        pretensao: params.get('pretensao'),
        termo: params.get('termo'),
        cidade: params.get('cidade'),
        bairro: params.get('bairro'),
        tipo: params.get('categoria'),
        precoMin: params.get('precoMin'),
        precoMax: params.get('precoMax'),
        quartos: params.get('quartos'),
        banheiros: params.get('banheiros'),
        vagas: params.get('vagas'),
        areaMin: params.get('areaMin'),
        areaMax: params.get('areaMax'),
        caracteristicas: caracteristicas.filter(caracteristica =>
            params.has(caracteristica)
        )
    };
}

function buscarImoveis() {
    const params = getQueryParams();

    const resultados = imoveis.filter(imovel => {
        const pretensaoCorrespondente = params.pretensao ? imovel.pretensao && imovel.pretensao.toLowerCase() === params.pretensao.toLowerCase() : true;
        const termoCorrespondente = params.termo ? imovel.endereco.toLowerCase().includes(params.termo.toLowerCase()) ||
            imovel.bairro.toLowerCase().includes(params.termo.toLowerCase()) ||
            imovel.cidade.toLowerCase().includes(params.termo.toLowerCase()) ||
            imovel.cep.includes(params.termo) : true;
        const cidadeCorrespondente = params.cidade ? imovel.cidade === params.cidade : true;
        const bairroCorrespondente = params.bairro ? imovel.bairro === params.bairro : true;
        const categoriaCorrespondente = params.categoria ? imovel.categoria === params.categoria : true;
        const precoMinCorrespondente = imovel.preco >= (params.precoMin || 0);
        const precoMaxCorrespondente = imovel.preco <= (params.precoMax || Infinity);
        const quartosCorrespondente = params.quartos ? imovel.quartos >= params.quartos : true;
        const banheirosCorrespondente = params.banheiros ? imovel.banheiros >= params.banheiros : true;
        const vagasCorrespondente = params.vagas ? imovel.vagas >= params.vagas : true;
        const areaMinCorrespondente = imovel.area >= (params.areaMin || 0);
        const areaMaxCorrespondente = imovel.area <= (params.areaMax || Infinity);
        const caracteristicasCorrespondentes = params.caracteristicas.length > 0 ?
            params.caracteristicas.every(caracteristica =>
                imovel.caracteristicas.includes(caracteristica)
            ) : true;

        return pretensaoCorrespondente && termoCorrespondente && cidadeCorrespondente && bairroCorrespondente && categoriaCorrespondente && precoMinCorrespondente && precoMaxCorrespondente && quartosCorrespondente && banheirosCorrespondente && vagasCorrespondente && areaMinCorrespondente && areaMaxCorrespondente && caracteristicasCorrespondentes;
    });

    carregarImoveis(resultados);
}

window.onload = buscarImoveis;

function carregarImoveis(resultados) {
    const lista = document.getElementById('resultados');
    lista.innerHTML = '';

    if (resultados.length > 0) {
        resultados.forEach(imovel => {
            const item = document.createElement('div');
            item.classList.add('row', 'd-flex');
            item.innerHTML = `
            <div class="col-lg-6">
                <img src="${imovel.imagem}" alt="Imagem do imóvel" class="img-fluid"/>
            </div>
            <div class="col-lg-6 align-self-center">
                <p class="card-text small my-1">${imovel.tipo}</p>
                <h5 class="card-title">${imovel.bairro} - ${imovel.cidade}</h5>
                <p class="card-text small my-2">
                    ${imovel.area}m² • ${imovel.quartos} Quarto(s) • ${imovel.banheiros} Banheiro(s) • ${imovel.vagas} Vaga(s)
                </p>
                <p class="card-text">${imovel.descricao}</p>
                <p class="card-text small fw-semibold m-0">${imovel.pretensao}</p>
                <h5 class="card-title">${imovel.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}</h5>
            </div>
            `;
            lista.appendChild(item);
        });
    } else {
        lista.innerHTML = '<p>Nenhum imóvel encontrado.</p>';
    }
}

// Mostrar/ocultar filtros avançados em busca.html
document.getElementById('toggleFilters').addEventListener('click', function (e) {
    e.preventDefault();
    var filters = document.getElementById('advancedFilters');
    filters.classList.toggle('d-none');
    this.textContent = filters.classList.contains('d-none') ? '+ Filtros' : '- Filtros';
});