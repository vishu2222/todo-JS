const todoTextArr = []

const button = document.getElementById('submitTodo')
button.addEventListener('click', (event) => {
  const text = document.getElementById('inputTxt') // input todo text
  todoTextArr.push(text.value)
  text.value = '' // clearing input entry
  displayTodos()
  event.preventDefault() // disable default actions if the event is not explectely handled.
})

const ul = document.createElement('ul')
const divTodos = document.querySelector('.todos') // div todo's

function displayTodos () {
  todoTextArr.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item
    ul.appendChild(li)
  })
  divTodos.appendChild(ul)
}
