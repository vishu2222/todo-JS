
let todosArr = []
let count = 0

const button = document.getElementById('submitTodo')
button.addEventListener('click', (event) => {
  const text = document.getElementById('inputTxt') // input todo text
  if (text.value.length === 0) displayTodos()
  else {
    todosArr.push({ id: count, txt: text.value })
    count++
    text.value = '' // clearing input entry after a submit
    displayTodos()
  }
  event.preventDefault() // disable default actions(form) if the event is not explicitely handled. // Clicking on a "Submit" button, prevent it from submitting a form
})

function displayTodos () {
  const todoContainer = document.querySelector('.todoContainer') // todoContainer div in body
  todoContainer.textContent = '' // replace all existing childern in todoContainer div with single textnode
  todosArr.forEach(todo => { todoContainer.appendChild(makeItemDiv(todo)) })
}

function makeItemDiv (todo) {
  const itemDiv = document.createElement('div')
  itemDiv.id = todo.id
  itemDiv.className = 'todoItem'

  const checkBox = addCheckBox()
  const textInput = addTextInput(todo)
  const notes = addNotes()
  const date = addDate()
  const priority = addPriority(todo)
  const delButton = addDelButton(todo)

  itemDiv.appendChild(checkBox)
  itemDiv.appendChild(textInput)
  itemDiv.appendChild(notes)
  itemDiv.appendChild(date)
  itemDiv.appendChild(priority)
  itemDiv.appendChild(delButton)

  return itemDiv
}

function addCheckBox () {
  const checkBox = document.createElement('input')
  checkBox.type = 'checkbox' // checkBox.setAttribute('type', 'checkbox')
  return checkBox
}

function addTextInput (todo) {
  const itemInput = document.createElement('input')
  itemInput.type = 'text'
  itemInput.value = todo.txt
  return itemInput
}

function addNotes () {
  const notes = document.createElement('input')
  notes.type = 'textarea'
  notes.placeholder = 'Notes'
  return notes
}

function addDate () {
  const date = document.createElement('input')
  date.type = 'date' // date.valueAsDate = new Date()
  return date
}

function addPriority (todo) {
  const priority = document.createElement('select')
  priority.id = 'priority' + String(todo.id)
  priority.class = 'priority'
  const priorityOptions = ['Low', 'Medium', 'High']

  priorityOptions.forEach(p => {
    const option = document.createElement('option')
    option.textContent = p
    priority.appendChild(option)
  })
  return priority
}

function addDelButton (todo) {
  const delButton = document.createElement('button') // delButton.className = 'delTodo' // delButton.id = 'delTodo' + String(todo.id)
  delButton.textContent = 'Delete' // delButton.setAttribute('textContent', 'Delete') didnt work
  const id = todo.id
  delButton.addEventListener('click', () => {
    document.getElementById(id).remove()
    todosArr = todosArr.filter(item => item.id !== id)
  })
  return delButton
}
