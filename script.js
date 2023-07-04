let total = 0
let currentInput = 0
let count = 0



function insert(num) {
  const numero = document.getElementById('resultado');

  if (num === "," && numero.value[numero.value.length - 1] === ",")
    return

  if (num === ",") {
    numero.type = "text"
    numero.value = (numero.value + num).replaceAll(".", ",")
    return
  }

  if (numero.value === "0") {
    numero.value = num
    return
  }

  numero.value = numero.value.replaceAll(",", ".") + num
  numero.type = "number"
}

const setErrorMessage = (message) => {
  // document.getElementById('error-message').innerText = message
  alert(message);
}

const setOutput = () => {
  // document.getElementById('total').innerText = total
  document.getElementById('total').innerText = total;
  document.getElementById('contador').innerText = count
  document.getElementById('resultado').value = 0
}

function clean() {
  document.getElementById('resultado').value = 0;
  numero.type = "number"
}

function back() {
  const resultado = document.getElementById('resultado').value;

  if (resultado.length === 1) {
    document.getElementById('resultado').value = 0
    return
  }

  document.getElementById('resultado').value = resultado.substring(0, resultado.length - 1);
}

const sum = () => {
  const resultado = document.getElementById('resultado')
  if (!Number(resultado.value)) {
    setErrorMessage('Informe um valor!')
    return
  }

  currentInput = Number(resultado.value)
  total += currentInput
  count++

  setOutput()
}

const addSameValue = () => {
  if (currentInput === 0) {
    setErrorMessage('Não há operações anteriores!')
    return
  }

  total += currentInput
  count++
  setOutput()
}


