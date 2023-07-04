let total = 0
let currentInput = 0
let amountInvoice = 0

const setErrorMessage = (message) => {
  document.getElementById('error-message').innerText = message
}

const setOutput = () => {
  document.getElementById('total').innerText = total
  document.getElementById('amount-invoice').innerText = amountInvoice
  document.getElementById('resultado').value = 0
  setErrorMessage("")
}



const subtract = () => {
  const input = document.getElementById('resultado')
  if (input.value == 0) {
    setErrorMessage('Informe um valor!')
    return
  }

  currentInput = Number(input.value)
  total -= currentInput
  amountInvoice--

  setOutput()
}

const addSameValue = () => {
  if (currentInput === 0) {
    setErrorMessage('Não há operações anteriores!')
    return
  }

  total += currentInput
  amountInvoice++
  setOutput()
}

const clear = () => {
  total = 0
  currentInput = 0
  amountInvoice = 0
  setOutput()
}
