const todosArr = []
let count = 1

const button = document.getElementById('submitTodo')
button.addEventListener('click', (event) => {
  const text = document.getElementById('inputTxt') // input todo text
  todosArr.push({ id: count, txt: text.value })
  count++
  text.value = '' // clearing input entry or a todo
  displayTodos()
  event.preventDefault() // disable default actions if the event is not explicitely handled. // Clicking on a "Submit" button, prevent it from submitting a form
})

function displayTodos () {
  const containerDiv = document.createElement('div') // container div for todos
  containerDiv.setAttribute('class', 'container')
  todosArr.forEach(todo => {
    addTodo(todo, containerDiv)
  })

  const todoDiv = document.querySelector('.todos') // div todo's
  todoDiv.removeChild(todoDiv.firstChild) // remove todo containerDiv if exists already
  todoDiv.appendChild(containerDiv)
}

function addTodo (todo, containerDiv) {
  const itemDiv = document.createElement('div')
  itemDiv.setAttribute('id', todo.id)
  const itemInput = document.createElement('input')
  itemInput.setAttribute('type', 'text')
  itemInput.setAttribute('value', todo.txt)
  itemDiv.appendChild(itemInput)
  containerDiv.appendChild(itemDiv)
}
