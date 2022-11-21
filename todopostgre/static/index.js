
import { fetchTodos, postTodo, requestUpdate, requestDel } from './fetch.js'
// import path from 'path'

let todosArr = await fetchTodos()
displayTodos()

const submitButton = document.getElementById('submitTodo')
submitButton.addEventListener('click', async () => {
  const inputTxt = document.getElementById('inputTxt')
  const res = await postTodo(inputTxt)
  if (res.status === 200) {
    todosArr = await fetchTodos()
    displayTodos()
  } else { console.log('unable to post')}
})

function displayTodos () {
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

  const checkBox = addCheckBox(todo)
  const textInput = addTextInput(todo)
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
  if (todo.checkbox === undefined) { todo.checkbox = false }
  else { checkBox.checked = todo.checkbox  }

  checkBox.addEventListener('change', () => {
    const property = 'checkbox'
    const val = String(checkBox.checked)
    const res = requestUpdate(property, val, todo)
    // res.then((val) => val.json()).then(data => console.log(data))

    todo.checkbox = checkBox.checked
    const txtElement = document.getElementById('itemInput' + String(todo.id))
    if (todo.checkbox === true) {
      txtElement.style.textDecoration = 'line-through'
    } else { txtElement.style.textDecoration = 'none' }
  })
  return checkBox
}

function addTextInput (todo) {
  const itemInput = document.createElement('input')
  itemInput.id = 'itemInput' + String(todo.id)
  itemInput.className = 'ClassItemInput'
  itemInput.type = 'text'
  itemInput.value = todo.txt
  if (todo.checkbox === true) {
    itemInput.style.textDecoration = 'line-through'
  } else { itemInput.style.textDecoration = 'none' }

  itemInput.addEventListener('change', () => {
    const property = 'txt'
    const val = itemInput.value
    const res = requestUpdate(property, val, todo)
    // res.then((val) => val.json()).then(data => console.log(data))
    todo.txt = itemInput.value
  })
  return itemInput
}

function addNotes (todo) {
  const notes = document.createElement('textarea')
  notes.placeholder = 'Notes'
  notes.className = 'notes'

  if (todo.notes !== undefined) { notes.value = todo.notes }

  notes.addEventListener('change', () => {
    const property = 'notes'
    const val = notes.value
    const res = requestUpdate(property, val, todo)
    // res.then((val) => val.json()).then(data => console.log(data))
    todo.notes = notes.value
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
    const property = 'date'
    const val = date.value
    const res = requestUpdate(property, val, todo)
    todo.date = date.value
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
    const property = 'priority'
    const val = priority.value
    const res = requestUpdate(property, val, todo)
    todo.priority = priority.value
  })
  return priority
}

function addDelButton (todo) {
  const delButton = document.createElement('button')
  delButton.className = 'delTodo' // delButton.id = 'delTodo' + String(todo.id)
  delButton.textContent = 'Delete' // delButton.setAttribute('textContent', 'Delete') didnt work?
  const id = todo.id

  delButton.addEventListener('click', () => {
    const res = requestDel(id)
    // const url = `/delete/:${String(id)}`
    // const res = fetch(url, { method: 'DELETE' } )
    document.getElementById(id).remove()
  })
  return delButton
}
