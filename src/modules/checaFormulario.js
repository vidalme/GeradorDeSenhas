export default function (f) {
  const res = document.querySelector(".resultado");
  const valor = Number(f.children[0].children[1].value);

  const todosFalsos = () => {
    let tf = true;
    for (const r of Object.values(f.children)) {
      if (r.type !== "submit" && r.children[1].type === "checkbox") {
        if (r.children[1].checked) tf = false;
      }
    }
    return tf;
  };

  //se o usuario nao tiver selecionado nenhum radio button
  if (todosFalsos()) {
    res.innerHTML = "Selecione algum tipo de caractere";
    return false;
  }
  // se o usuario tiver digitado uma string
  if (isNaN(valor)) {
    res.innerHTML = "Apenas numeros permitidos";
    return false;
  }
  //se o usuario tiver pedido uma senha maior que 30 digitos
  if (valor > 30) {
    res.innerHTML = "Numero maximo de 30 digitos";
    return false;
  }
  //se o usuario tiver pedido uma senha com menos de 1 digito
  if (valor < 0) {
    res.innerHTML = "Apenas numeros positivos permitidos";
    return false;
  }
  return true;
}
