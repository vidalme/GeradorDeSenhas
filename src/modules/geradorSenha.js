import Aleatorio from "./Aleatorio";
import Senha from "./Senha";

export default function (formulario) {
  //uma objeto que contem as possibilidades de digitos aleatorios para cada tipo
  //tb tem os metodos pra selecionar uma unidade aleatoria e retornar ela
  //  numeroAle()  //  letraMinuAle()  //  letraMaiuAle()  //  simboloAle()
  const gerador = new Aleatorio();

  //extrai do formulario apenas as configuracoes que o usuario pediu
  const configuracoes = Object.values(formulario).filter((e) => {
    if (e.type !== "submit") return e;
  });

  //extrai a quantidade de digitos da senha requerida
  const tamanho = configuracoes[0].value;

  //extrai os valores booleanos dos botoes de radios
  const radios = configuracoes
    .filter((e) => {
      if (e.type === "checkbox") return e;
    })
    .map((e) => e.checked);

  const senha = new Senha(tamanho, radios);

  let i = 0;
  while (i < senha.tamanho) {
    if (senha.temNumeros) {
      senha.nome += gerador.numeroAle();
      i++;
    }
    if (senha.temMaiusculas) {
      senha.nome += gerador.letraMaiuAle();
      i++;
    }
    if (senha.temMinusculas) {
      senha.nome += gerador.letraMinuAle();
      i++;
    }
    if (senha.temSimbolos) {
      senha.nome += gerador.simboloAle();
      i++;
    }
  }

  return senha.nome;
}
