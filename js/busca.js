// Dados dos imóveis
const imoveis = [
    {
        id: 'FL01',
        imagem: 'images/imovel-fl01-1.jpg',
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
    },
    {
        id: 'AP01',
        imagem: 'images/imovel-ap01-1.jpg',
        tipo: 'Apartamento',
        endereco: 'Rua B, 456',
        bairro: 'Veneza',
        cidade: 'Ipatinga',
        cep: '01001-000',
        area: 80,
        quartos: 2,
        banheiros: 2,
        vagas: 1,
        descricao: 'Apartamento novo no centro de Ipatinga, com 80m², 2 quartos, 2 banheiros, 1 vaga de garagem, acabamento de alto padrão e infraestrutura completa.',
        pretensao: 'Venda',
        preco: 450000,
        caracteristicas: ['ar-condicionado', 'elevador', 'varanda', 'iluminacao-natural']
    },
    {
        id: 'CA01',
        imagem: 'images/imovel-ca01-1.jpg',
        tipo: 'Casa',
        endereco: 'Rua C, 789',
        bairro: 'Alto Primavera',
        cidade: 'Timóteo',
        cep: '01002-000',
        area: 120,
        quartos: 3,
        banheiros: 2,
        vagas: 2,
        descricao: 'Casa nova em Timóteo, com 120m², 3 quartos, 2 banheiros, 2 vagas de garagem, quintal amplo e área verde.',
        pretensao: 'Venda',
        preco: 600000,
        caracteristicas: ['churrasqueira', 'jardim', 'quintal', 'area-verde']
    },
    {
        id: 'CH01',
        imagem: 'images/imovel-ch01-1.jpg',
        tipo: 'Chácara',
        endereco: 'Rua D, 101',
        bairro: 'Serra dos Cocais',
        cidade: 'Coronel Fabriciano',
        cep: '01003-000',
        area: 500,
        quartos: 4,
        banheiros: 3,
        vagas: 4,
        descricao: 'Chácara espaçosa em Coronel Fabriciano, com 500m², 4 quartos, 3 banheiros, 4 vagas de garagem, piscina e área verde.',
        pretensao: 'Venda',
        preco: 1200000,
        caracteristicas: ['piscina', 'area-verde', 'churrasqueira', 'quintal']
    },
    {
        id: 'SO01',
        imagem: 'images/imovel-so01-1.jpg',
        tipo: 'Sobrado',
        endereco: 'Rua E, 202',
        bairro: 'Cariru',
        cidade: 'Ipatinga',
        cep: '01004-000',
        area: 150,
        quartos: 4,
        banheiros: 3,
        vagas: 2,
        descricao: 'Sobrado em Ipatinga, com 150m², 4 quartos, 3 banheiros, 2 vagas de garagem, salão de festas e área gourmet.',
        pretensao: 'Aluguel',
        preco: 5000,
        caracteristicas: ['salao-festas', 'espaco-gourmet', 'varanda', 'iluminacao-natural']
    },
    {
        id: 'FA01',
        imagem: 'images/imovel-fa01-1.jpg',
        tipo: 'Fazenda',
        endereco: 'Rua F, 303',
        bairro: 'Centro',
        cidade: 'Santana do Paraíso',
        cep: '01005-000',
        area: 1000,
        quartos: 5,
        banheiros: 4,
        vagas: 5,
        descricao: 'Fazenda ampla em Santana do Paraíso, com 1000m², 5 quartos, 4 banheiros, 5 vagas de garagem, piscina e área verde.',
        pretensao: 'Venda',
        preco: 2500000,
        caracteristicas: ['piscina', 'area-verde', 'churrasqueira', 'quintal']
    },
    {
        id: 'CO01',
        imagem: 'images/imovel-co01-1.jpg',
        tipo: 'Cobertura',
        endereco: 'Rua G, 404',
        bairro: 'Centro',
        cidade: 'Governador Valadares',
        cep: '01006-000',
        area: 200,
        quartos: 3,
        banheiros: 3,
        vagas: 2,
        descricao: 'Cobertura luxuosa em Governador Valadares, com 200m², 3 quartos, 3 banheiros, 2 vagas de garagem, vista panorâmica e acabamento de alto padrão.',
        pretensao: 'Venda',
        preco: 1800000,
        caracteristicas: ['varanda', 'iluminacao-natural', 'espaco-gourmet', 'ar-condicionado']
    },
    {
        id: 'AP02',
        imagem: 'images/imovel-ap02-1.jpg',
        tipo: 'Apartamento',
        endereco: 'Rua H, 505',
        bairro: 'Horto',
        cidade: 'Ipatinga',
        cep: '01007-000',
        area: 100,
        quartos: 3,
        banheiros: 3,
        vagas: 2,
        descricao: 'Apartamento de alto padrão em Ipatinga, com 100m², 3 quartos, 3 banheiros, 2 vagas de garagem, acabamento luxuoso e infraestrutura completa.',
        pretensao: 'Venda',
        preco: 800000,
        caracteristicas: ['ar-condicionado', 'elevador', 'varanda', 'iluminacao-natural']
    },
    {
        id: 'CA02',
        imagem: 'images/imovel-ca02-1.jpg',
        tipo: 'Casa',
        endereco: 'Rua I, 606',
        bairro: 'Alegre',
        cidade: 'Timóteo',
        cep: '01008-000',
        area: 150,
        quartos: 4,
        banheiros: 4,
        vagas: 3,
        descricao: 'Casa de alto padrão em Timóteo, com 150m², 4 quartos, 4 banheiros, 3 vagas de garagem, piscina e área gourmet.',
        pretensao: 'Venda',
        preco: 1200000,
        caracteristicas: ['piscina', 'espaco-gourmet', 'churrasqueira', 'jardim']
    },
    {
        id: 'CL01',
        imagem: 'images/imovel-cl01-1.jpg',
        tipo: 'Chalé',
        endereco: 'Rua J, 707',
        bairro: 'Serra dos Cocais',
        cidade: 'Coronel Fabriciano',
        cep: '01009-000',
        area: 200,
        quartos: 3,
        banheiros: 2,
        vagas: 2,
        descricao: 'Chalé de alto padrão em Coronel Fabriciano, com 200m², 3 quartos, 2 banheiros, 2 vagas de garagem, vista para a montanha e área verde.',
        pretensao: 'Venda',
        preco: 1500000,
        caracteristicas: ['area-verde', 'varanda', 'iluminacao-natural', 'churrasqueira']
    },
    {
        id: 'ES01',
        imagem: 'images/imovel-es01-1.jpg',
        tipo: 'Estúdio',
        endereco: 'Rua K, 808',
        bairro: 'Esplanada',
        cidade: 'Governador Valadares',
        cep: '01010-000',
        area: 40,
        quartos: 1,
        banheiros: 1,
        vagas: 1,
        descricao: 'Estúdio compacto e moderno em Governador Valadares, com 40m², 1 quarto, 1 banheiro, 1 vaga de garagem, ideal para solteiros ou casais.',
        pretensao: 'Aluguel',
        preco: 2000,
        caracteristicas: ['ar-condicionado', 'iluminacao-natural', 'varanda']
    },
    {
        id: 'SI01',
        imagem: 'images/imovel-si01-1.jpg',
        tipo: 'Sítio',
        endereco: 'Rua L, 909',
        bairro: 'Estrada Entre Folhas',
        cidade: 'Caratinga',
        cep: '01011-000',
        area: 800,
        quartos: 4,
        banheiros: 3,
        vagas: 4,
        descricao: 'Sítio espaçoso em Caratinga, com 800m², 4 quartos, 3 banheiros, 4 vagas de garagem, piscina e área verde.',
        pretensao: 'Venda',
        preco: 1800000,
        caracteristicas: ['piscina', 'area-verde', 'churrasqueira', 'quintal']
    },
    {
        id: 'CL02',
        imagem: 'images/imovel-cl02-1.jpg',
        tipo: 'Chalé',
        endereco: 'Rua das Montanhas, 123',
        bairro: 'Limoeiro',
        cidade: 'Ipatinga',
        cep: '35000-000',
        area: 80,
        quartos: 2,
        banheiros: 2,
        vagas: 1,
        descricao: 'Chalé aconchegante em Ipatinga, perfeito para temporadas. Com 80m², 2 quartos, 2 banheiros, 1 vaga de garagem, vista para as montanhas e área verde.',
        pretensao: 'Temporada',
        preco: 800,
        caracteristicas: ['churrasqueira', 'varanda', 'jardim', 'iluminacao-natural'],
    },
    {
        id: 'CB01',
        imagem: 'images/imovel-cb01-1.jpg',
        tipo: 'Cabana',
        endereco: 'Rua dos Pinheiros, 456',
        bairro: 'Boa Vista',
        cidade: 'Santana do Paraíso',
        cep: '35180-000',
        area: 60,
        quartos: 1,
        banheiros: 1,
        vagas: 1,
        descricao: 'Cabana rústica e charmosa em Santana do Paraíso, ideal para uma escapada romântica. Com 60m², 1 quarto, 1 banheiro, 1 vaga de garagem e ambiente acolhedor.',
        pretensao: 'Temporada',
        preco: 600,
        caracteristicas: ['lareira', 'varanda', 'area-verde', 'pet-place'],
    },
    {
        id: 'CA03',
        imagem: 'images/imovel-ca03-1.jpg',
        tipo: 'Casa',
        endereco: 'Rua das Flores, 789',
        bairro: 'São José',
        cidade: 'Timóteo',
        cep: '35160-000',
        area: 120,
        quartos: 3,
        banheiros: 2,
        vagas: 2,
        descricao: 'Casa espaçosa em Timóteo, perfeita para temporadas em família. Com 120m², 3 quartos, 2 banheiros, 2 vagas de garagem, quintal amplo e área de lazer.',
        pretensao: 'Temporada',
        preco: 1200,
        caracteristicas: ['piscina', 'churrasqueira', 'quintal', 'salao-festas'],
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
                <img src="${imovel.imagem}" alt="Imagem do imóvel" class="img-fluid my-3"/>
            </div>
            <div class="col-lg-6 align-self-center">
                <p class="card-text small my-1">${imovel.tipo}</p>
                <h5 class="card-title">${imovel.bairro} - ${imovel.cidade}</h5>
                <p class="card-text small my-2">
                    ${imovel.area}m² • ${imovel.quartos} Quarto(s) • ${imovel.banheiros} Banheiro(s) • ${imovel.vagas} Vaga(s)
                </p>
                <p class="card-text">${imovel.descricao}</p>
                <p class="card-text small fw-semibold m-0">${imovel.pretensao}</p>
                <h5 class="card-title">
                    ${imovel.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}${imovel.pretensao === 'Aluguel' ? '/mês' : imovel.pretensao === 'Temporada' ? '/dia' : ''}
                </h5>
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