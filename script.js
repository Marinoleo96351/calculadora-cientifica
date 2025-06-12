function inserir(valor) {
  document.getElementById("display").value += valor;
}

function limpar() {
  document.getElementById("display").value = "";
}

function apagar() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function trocarSinal() {
  const display = document.getElementById("display");
  if (display.value.charAt(0) === "-") {
    display.value = display.value.substring(1);
  } else {
    display.value = "-" + display.value;
  }
}

function funcao(tipo) {
  const display = document.getElementById("display");
  let valor = eval(display.value);

  try {
    switch (tipo) {
      case "sin": display.value = Math.sin(valor); break;
      case "cos": display.value = Math.cos(valor); break;
      case "tan": display.value = Math.tan(valor); break;
      case "sqrt": display.value = Math.sqrt(valor); break;
      case "log": display.value = Math.log10(valor); break;
      case "ln": display.value = Math.log(valor); break;
      case "exp": display.value = Math.exp(valor); break;
      case "fatorial":
        display.value = fatorial(valor);
        break;
    }
  } catch (e) {
    display.value = "Erro";
  }
}

function calcular() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Erro";
  }
}

function fatorial(n) {
  if (n < 0) return "Erro";
  if (n === 0 || n === 1) return 1;
  return n * fatorial(n - 1);
}
