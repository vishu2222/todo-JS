const todoTextArr = []
let count = 1

const button = document.getElementById('submitTodo')
button.addEventListener('click', (event) => {
  const text = document.getElementById('inputTxt') // input todo text
  // todoTextArr.push({ id: count, txt: text.value })
  todoTextArr.push(text.value)
  text.value = '' // clearing input entry or a todo
  displayTodos()
  event.preventDefault() // disable default actions if the event is not explicitely handled. // Clicking on a "Submit" button, prevent it from submitting a form
})

function displayTodos () {
  const containerDiv = document.createElement('div')
  containerDiv.setAttribute('class', 'container')

  todoTextArr.forEach(todoText => {
    const itemDiv = document.createElement('div')
    const itemInput = document.createElement('input')
    itemInput.setAttribute('type', 'text')
    itemInput.setAttribute('value', todoText)
    itemDiv.appendChild(itemInput)
    containerDiv.appendChild(itemDiv)
  })

  const todoDiv = document.querySelector('.todos') // div todo's
  todoDiv.removeChild(todoDiv.firstChild)
  todoDiv.appendChild(containerDiv)
}

// function displayTodos () {
//   const ul = document.createElement('ul')
//   todoTextArr.forEach(item => {
//     const li = document.createElement('div')
//     li.textContent = item
//     ul.appendChild(li)
//   })
//   const divTodos = document.querySelector('.todos') // div todo's
//   divTodos.removeChild(divTodos.firstChild)
//   divTodos.appendChild(ul)
// }
