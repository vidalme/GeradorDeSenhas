export default class Senha {
  constructor(tam, arr) {
    tam === "" ? (this.tamanho = 10) : (this.tamanho = Number(tam));
    this.temNumeros = arr[0];
    this.temMaiusculas = arr[1];
    this.temMinusculas = arr[2];
    this.temSimbolos = arr[3];
    this.nome = "";
  }
}
