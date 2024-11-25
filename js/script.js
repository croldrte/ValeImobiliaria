// Detectar o scroll da página
window.onscroll = function () {
  changeNavbarBackground();
};

function changeNavbarBackground() {
  var navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}