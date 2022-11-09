const todosArr = []
let count = 1

const button = document.getElementById('submitTodo')
button.addEventListener('click', (event) => {
  const text = document.getElementById('inputTxt') // input todo text
  todosArr.push({ id: count, txt: text.value })
  count++
  text.value = '' // clearing input entry after a submit
  displayTodos()
  event.preventDefault() // disable default actions if the event is not explicitely handled. // Clicking on a "Submit" button, prevent it from submitting a form
})

function displayTodos () {
  const containerDiv = document.createElement('div') // container div for todos
  containerDiv.setAttribute('class', 'container')
  todosArr.forEach(todo => {
    addTodo(todo, containerDiv)
  })
  const todoDiv = document.querySelector('.todos') // div in body
  todoDiv.removeChild(todoDiv.firstChild) // remove todo containerDiv if exists already
  todoDiv.appendChild(containerDiv) // add container to todo div of body
}

function addTodo (todo, containerDiv) {
  const itemDiv = document.createElement('div')
  itemDiv.setAttribute('id', todo.id)

  const checkBox = document.createElement('input')
  checkBox.setAttribute('type', 'checkbox')

  const itemInput = document.createElement('input')
  itemInput.setAttribute('type', 'text')
  itemInput.setAttribute('value', todo.txt)

  const notes = document.createElement('input')
  notes.setAttribute('type', 'textarea')
  notes.setAttribute('rows', 20)
  notes.setAttribute('value', 'Notes')

  const date = document.createElement('input')
  date.setAttribute('type', 'date')

  itemDiv.appendChild(checkBox)
  itemDiv.appendChild(itemInput)
  itemDiv.appendChild(notes)
  itemDiv.appendChild(date)

  containerDiv.appendChild(itemDiv)
}
