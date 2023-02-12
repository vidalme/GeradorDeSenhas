import "./assets/css/style.css";
import checaFormulario from "./modules/checaFormulario";
import geradorSenha from "./modules/geradorSenha";

const res = document.querySelector(".resultado");
res.innerHTML = "Configure abaixo a senha desejada";

const botaoGeraSenha = document.querySelector(".botao-gerar-senha");
const formulario = document.querySelector("form");

botaoGeraSenha.addEventListener("click", (e) => {
  e.preventDefault();
  if (checaFormulario(formulario)) res.innerHTML = geradorSenha(formulario);
});
