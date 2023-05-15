const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
const header = document.querySelector("header");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  header.addEventListener("click", function(){
    if (modoEscuroEstaAtivo)
    {
    header.style.backgroundColor = "#d8e3ec";
    }
    else{
      header.style.backgroundColor = "#a8a8a8"
    }
  })

  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    header.addEventListener.style.background = "black";
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
});
