
const todosArr = []
let count = 0

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
  const itemDiv = addItemDiv(todo)
  const checkBox = addCheckBox()
  const textInput = addTextInput(todo)
  const notes = addNotes()
  const date = addDate()
  const priority = addPriority()
  const delButton = addDelButton()

  itemDiv.appendChild(checkBox)
  itemDiv.appendChild(textInput)
  itemDiv.appendChild(notes)
  itemDiv.appendChild(date)
  itemDiv.appendChild(priority)
  itemDiv.appendChild(delButton)

  containerDiv.appendChild(itemDiv)
}

function addItemDiv (todo) {
  const itemDiv = document.createElement('div')
  itemDiv.setAttribute('id', todo.id)
  return itemDiv
}

function addCheckBox () {
  const checkBox = document.createElement('input')
  checkBox.setAttribute('type', 'checkbox')
  return checkBox
}

function addTextInput (todo) {
  const itemInput = document.createElement('input')
  itemInput.setAttribute('type', 'text')
  itemInput.setAttribute('value', todo.txt)
  return itemInput
}

function addNotes () {
  const notes = document.createElement('input')
  notes.setAttribute('type', 'textarea')
  notes.setAttribute('rows', 20)
  notes.setAttribute('placeholder', 'Notes')
  return notes
}

function addDate () {
  const date = document.createElement('input')
  date.setAttribute('type', 'date')
  return date
}

function addPriority () {
  const priority = document.createElement('select')
  priority.setAttribute('name', 'Priority')
  const priorityOptions = ['Low', 'Medium', 'High']
  priorityOptions.forEach(p => {
    const option = document.createElement('option')
    option.setAttribute('value', p)
    option.textContent = p
    priority.appendChild(option)
  })
  return priority
}

function addDelButton () {
  const delButton = document.createElement('button')
  delButton.setAttribute('id', 'delTodo')
  delButton.setAttribute('textContent', 'delete')
  return delButton
}
