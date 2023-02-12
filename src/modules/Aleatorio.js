export default class Aleatorio {
  constructor() {
    this.numeros = "1234567890".split("");
    this.letrasMinusculas = "abcdefghijklmnopqrstuvwxyz".split("");
    this.letrasMaisculas = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    this.simbolos = "!@#$%¨&*()_+`{^}<>:?-=[~],.;/".split("");
  }

  numeroAle = () => this.pickRandomItemArray(this.numeros);
  letraMinuAle = () => this.pickRandomItemArray(this.letrasMinusculas);
  letraMaiuAle = () => this.pickRandomItemArray(this.letrasMaisculas);
  simboloAle = () => this.pickRandomItemArray(this.simbolos);

  pickRandomItemArray = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };
}
