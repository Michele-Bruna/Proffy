// Procurar o botão 
document.querySelector("#add-time")
// Quando clicar no botão 
.addEventListener('click', cloneField)  
// quando não existe um evento você tem que criar função para ele, como é o caso de cloneField


// Executar uma acao
function cloneField() {
  // Duplicar os campos. Que campos?
 const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true or false
  
  // pegar os campos. que campos?
  const fields = newFieldContainer.querySelectorAll('input')

  // para cada campo limpar
  fields.forEach(function(field) {
      //pegar o field do momento e limpa ele
      field.value = ""
  })

  // Colocar na pagina: onde?
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
