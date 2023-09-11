//Ativar links do menu
const nav = document.querySelectorAll(".header-menu a");

function ativarLink(item) {
  if (item.pathname === location.pathname) {
    item.classList.add("ativo");
  }
}

nav.forEach(ativarLink);

//Ativar itens do orçamento
const urlParans = new URLSearchParams(location.search);

urlParans.forEach((param) => {
  const elemento = document.querySelector(`input#${param}`);
  if (elemento) {
    elemento.checked = "true";
  }
});

//Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function aparecerResposta(event) {
  const pergunta = event.currentTarget;
  const perguntaControl = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(perguntaControl);

  resposta.classList.toggle("ativa");

  if (resposta.classList.contains("ativa")) {
    pergunta.setAttribute("aria-expanded", "true");
  } else {
    pergunta.setAttribute("aria-expanded", "false");
  }
}

perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", aparecerResposta);
});

//Galeria de bicicletas
const imgs = document.querySelectorAll(".bicicleta-imagens img");
const galeria = document.querySelector(".bicicleta-imagens");

imgs.forEach((img) => {
  img.addEventListener("click", (event) => {
    const img = event.currentTarget;
    galeria.prepend(img);
  });
});

//Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
