const output = document.getElementById('output');

function mostrarTabuada(){
  let n = parseFloat(prompt('Digite a tabuada desejada.'))
  let msg= ""

  for(let i = 0; i <= 10; i++){
    msg += `${n} x ${i} = ${(n * i)} <br>`
  }
  output.innerHTML = msg
}
function limparTabuada(){
  output.innerHTML = ""
}