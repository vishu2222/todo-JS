let todosArr
let todoID

try {
  todosArr = JSON.parse(window.localStorage.getItem('todosArr'))
  todoID = todosArr.reduce((maxId, i) => { if (i.id > maxId) { maxId = i.id } return maxId }, 0) + 1
  displayTodos()
} catch (e) {
  todosArr = []
  todoID = 0
}

const button = document.getElementById('submitTodo')
button.addEventListener('click', (event) => {
  const text = document.getElementById('inputTxt') // input todo text
  event.preventDefault() // disable default actions(form) if the event is not explicitely handled. // Clicking on a "Submit" button, prevent it from submitting a form
  if (text.value.length !== 0) {
    todosArr.push({ id: todoID, txt: text.value })
    todoID++
    text.value = '' // clearing input entry after a submit

    displayTodos()
    updateLocalStorage()
  }
})

function updateLocalStorage () {
  window.localStorage.setItem('todosArr', JSON.stringify(todosArr))
}

function displayTodos () {
  const todoContainer = document.querySelector('.todoContainer') // todoContainer div in body
  todoContainer.textContent = '' // replace all existing childern in todoContainer div with single textnode
  todosArr.forEach(todo => {
    todoContainer.appendChild(makeItemDiv(todo))
  })
}

function makeItemDiv (todo) {
  const itemDiv = document.createElement('div')
  itemDiv.style = 'background-color: #C4D7E0;margin-right: 350px;margin-bottom: 2px;'
  itemDiv.id = todo.id
  itemDiv.className = 'todoItem'

  const textInput = addTextInput(todo)
  const checkBox = addCheckBox(todo)
  const propertiesDiv = makePropertiesDiv(todo)
  const delButton = addDelButton(todo)

  itemDiv.appendChild(checkBox)
  itemDiv.appendChild(textInput)
  itemDiv.appendChild(delButton)
  itemDiv.appendChild(propertiesDiv)
  itemDiv.appendChild(document.createElement('br'))

  itemDiv.addEventListener('click', (event) => {
    const element = event.target.tagName // html element box corresponding to the click event
    if (element === 'INPUT' || element === 'SELECT') { return }
    if (propertiesDiv.style.display === 'none') {
      propertiesDiv.style.display = 'block'
    } else { propertiesDiv.style.display = 'none' }
  })
  return itemDiv
}

function addPriorityLabel (todo) {
  const priorityLabel = document.createElement('Label')
  priorityLabel.setAttribute('for', todo.priority.id)
  priorityLabel.innerHTML = ' Priority: '
  return priorityLabel
}

function makePropertiesDiv (todo) {
  const notes = addNotes(todo)
  const date = addDate(todo)
  const dateLabel = addDateLabel(todo)
  const priority = addPriority(todo)
  const priorityLabel = addPriorityLabel(todo)
  // const delButton = addDelButton(todo)

  const propertiesDiv = document.createElement('div')
  propertiesDiv.className = 'classPropertyDiv'
  propertiesDiv.style.display = 'none'
  propertiesDiv.appendChild(notes)
  propertiesDiv.appendChild(dateLabel)
  propertiesDiv.appendChild(date)
  propertiesDiv.appendChild(document.createElement('br'))
  propertiesDiv.appendChild(priorityLabel)
  propertiesDiv.appendChild(priority)
  // propertiesDiv.appendChild(delButton)

  return propertiesDiv
}

function addCheckBox (todo) {
  const checkBox = document.createElement('input')
  checkBox.type = 'checkbox'
  if (todo.checkBox) { checkBox.checked = todo.checkBox } // else { todo.checkBox = checkBox.checked }

  checkBox.addEventListener('change', () => {
    todo.checkBox = checkBox.checked
    const txtElement = document.getElementById('itemInput' + String(todo.id))
    if (todo.checkBox === true) {
      txtElement.style.textDecoration = 'line-through'
    } else { txtElement.style.textDecoration = 'none' }
    updateLocalStorage()
  })

  return checkBox
}

function addTextInput (todo) {
  const itemInput = document.createElement('input')
  itemInput.id = 'itemInput' + String(todo.id)
  itemInput.type = 'text'
  itemInput.value = todo.txt
  itemInput.style = 'margin-bottom: 3px; margin-top: 3px;'

  itemInput.addEventListener('change', () => {
    todo.txt = itemInput.value
    updateLocalStorage()
  })
  return itemInput
}

function addNotes (todo) {
  const notes = document.createElement('input')
  notes.type = 'textarea'
  notes.placeholder = 'Notes'
  notes.style = 'margin-left: 20px; height: 150px;'

  if (todo.notes !== undefined) { notes.value = todo.notes }

  notes.addEventListener('change', () => {
    todo.notes = notes.value
    updateLocalStorage()
  })

  return notes
}

function addDateLabel (todo) {
  const dateLabel = document.createElement('Label')
  dateLabel.setAttribute('for', todo.date.id)
  dateLabel.textContent = ' Due Date: '
  return dateLabel
}

function addDate (todo) {
  const date = document.createElement('input')
  date.type = 'date'
  date.className = 'dateClass'
  date.id = 'date' + String(todo.id)

  if (todo.date !== undefined) { date.value = todo.date }
  else { date.valueAsDate = new Date(); todo.date = date.value }

  date.addEventListener('change', () => {
    todo.date = date.value
    updateLocalStorage()
  })

  return date
}

function addPriority (todo) {
  const priority = document.createElement('select') // priority.class = 'priority'
  priority.id = 'priority' + String(todo.id)

  const priorityOptions = ['None', 'Low', 'Medium', 'High']
  priorityOptions.forEach(p => {
    const option = document.createElement('option')
    option.textContent = p
    priority.appendChild(option)
  })
  if (todo.priority !== undefined) { priority.value = todo.priority }
  else { priority.value = 'None'; todo.priority = priority.value }

  priority.addEventListener('change', () => {
    todo.priority = priority.value
    updateLocalStorage()
  })
  return priority
}

function addDelButton (todo) {
  const delButton = document.createElement('button')
  delButton.className = 'delTodo' // delButton.id = 'delTodo' + String(todo.id)
  delButton.textContent = 'Delete' // delButton.setAttribute('textContent', 'Delete') didnt work?
  delButton.style = 'margin-left: 230px;'
  const id = todo.id

  delButton.addEventListener('click', () => {
    document.getElementById(id).remove()
    todosArr = todosArr.filter(item => item.id !== id)
    updateLocalStorage()
  })

  return delButton
}
// localStorage.removeItem('todosArr')
