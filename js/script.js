// Detectar o scroll da página
window.onscroll = function () {
  changeNavbarBackground();
};

function changeNavbarBackground() {
  var navbar = document.getElementById("navbar-main");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// Função para redirecionar para a página de busca
function buscarImoveis() {
  const tipoPesquisa = document.getElementById('tipoPesquisa').value;
  const searchTerm = document.getElementById('searchInput').value;

  // Cria a URL para redirecionar à página de busca com parâmetros de pesquisa
  const url = `busca.html?tipo=${tipoPesquisa}&termo=${encodeURIComponent(searchTerm)}`;

  // Redireciona para a página de busca
  window.location.href = url;
}

// Adiciona evento de busca ao botão
document.getElementById('searchButton').addEventListener('click', buscarImoveis);

// Adiciona evento de pesquisa ao pressionar Enter no campo de pesquisa
document.getElementById('searchInput').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    buscarImoveis();
  }
});

// Ocultar/mostrar filtros avançados
document.getElementById('toggleFilters').addEventListener('click', function () {
  var filters = document.getElementById('advancedFilters');
  filters.classList.toggle('d-none');
});

if (advancedFilters.classList.contains('d-none')) {
  this.textContent = '+ Filtros';
} else {
  this.textContent = '- Filtros';
}