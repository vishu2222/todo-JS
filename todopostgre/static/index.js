import { fetchTodos } from './fetch.js'

const todosArr = await fetchTodos()
displayTodos(todosArr)

function displayTodos (todos) {
  console.log(todos)
  const todoContainer = document.querySelector('.todoContainer') // todoContainer div in body
  todoContainer.textContent = '' // replace all existing childern in todoContainer div with single textnode
  todosArr.forEach(todo => {
    todoContainer.appendChild(makeItemDiv(todo))
  })
}

function makeItemDiv (todo) {
  const itemDiv = document.createElement('div')
  itemDiv.id = todo.id
  itemDiv.className = 'todoItem'

  const textInput = addTextInput(todo)
  const checkBox = addCheckBox(todo)
  const propertiesDiv = makePropertiesDiv(todo)

  itemDiv.appendChild(checkBox)
  itemDiv.appendChild(textInput)
  itemDiv.appendChild(propertiesDiv)

  itemDiv.addEventListener('click', (event) => {
    const element = event.target.tagName // html element box corresponding to the click event
    if (element === 'TEXTAREA' || element === 'SELECT' || element === 'INPUT') { return }
    if (propertiesDiv.style.display === 'none') {
      propertiesDiv.style.display = 'block'
    } else { propertiesDiv.style.display = 'none' }
  })
  return itemDiv
}

function makePropertiesDiv (todo) {
  const notes = addNotes(todo)
  const date = addDate(todo)
  const dateLabel = addDateLabel(todo)
  const priority = addPriority(todo)
  const priorityLabel = addPriorityLabel(todo)
  const delButton = addDelButton(todo)

  const propertiesDiv = document.createElement('div')
  propertiesDiv.className = 'classPropertyDiv'
  propertiesDiv.style.display = 'none'
  propertiesDiv.appendChild(notes)
  propertiesDiv.appendChild(dateLabel)
  propertiesDiv.appendChild(date)
  propertiesDiv.appendChild(priorityLabel)
  propertiesDiv.appendChild(priority)
  propertiesDiv.appendChild(delButton)

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
    // updateLocalStorage()
  })

  return checkBox
}

function addTextInput (todo) {
  const itemInput = document.createElement('input')
  itemInput.id = 'itemInput' + String(todo.id)
  itemInput.className = 'ClassItemInput'
  itemInput.type = 'text'
  itemInput.value = todo.txt

  itemInput.addEventListener('change', () => {
    todo.txt = itemInput.value
    // updateLocalStorage()
  })
  return itemInput
}

function addNotes (todo) {
  const notes = document.createElement('textarea')
  notes.placeholder = 'Notes'
  notes.className = 'notes'

  if (todo.notes !== undefined) { notes.value = todo.notes }

  notes.addEventListener('change', () => {
    todo.notes = notes.value
    // updateLocalStorage()
  })

  return notes
}

function addDateLabel (todo) {
  const dateLabel = document.createElement('label')
  dateLabel.className = 'ClassDateLabel'
  dateLabel.setAttribute('for', 'date' + String(todo.id))
  dateLabel.textContent = ' Due Date: '
  return dateLabel
}

function addDate (todo) {
  const date = document.createElement('input')
  date.type = 'date'
  date.className = 'dateClass'
  date.id = 'date' + String(todo.id)

  if (todo.date !== undefined) {
    date.value = todo.date
  } else {
    date.valueAsDate = new Date()
    todo.date = date.value
  }

  date.addEventListener('change', () => {
    todo.date = date.value
    // updateLocalStorage()
  })

  return date
}

function addPriorityLabel (todo) {
  const priorityLabel = document.createElement('label')
  priorityLabel.className = 'classPriorityLabel'
  priorityLabel.setAttribute('for', 'priority' + String(todo.id))
  priorityLabel.innerHTML = ' Priority: '

  return priorityLabel
}

function addPriority (todo) {
  const priority = document.createElement('select') // priority.class = 'priority'
  priority.id = 'priority' + String(todo.id)
  priority.className = 'classPriority'

  const priorityOptions = ['None', 'Low', 'Medium', 'High']
  priorityOptions.forEach(p => {
    const option = document.createElement('option')
    option.textContent = p
    priority.appendChild(option)
  })
  if (todo.priority !== undefined) {
    priority.value = todo.priority
  }

  priority.addEventListener('change', () => {
    todo.priority = priority.value
    // updateLocalStorage()
  })
  return priority
}

function addDelButton (todo) {
  const delButton = document.createElement('button')
  delButton.className = 'delTodo' // delButton.id = 'delTodo' + String(todo.id)
  delButton.textContent = 'Delete' // delButton.setAttribute('textContent', 'Delete') didnt work?
  const id = todo.id

  delButton.addEventListener('click', () => {
    document.getElementById(id).remove()
    todosArr = todosArr.filter(item => item.id !== id)
    // updateLocalStorage()
  })

  return delButton
}
