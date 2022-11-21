

export async function fetchTodos () {
  const url = 'http://localhost:3000/todos'
  const response = await fetch(url)
  const data = await response.json() // parses body text as JSON
  return data
}

export async function postTodo (inputTxt) {
  const url = '/addTodo'
  let res = await fetch(url, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      todo: inputTxt.value
    })
  })
  return res
}

export async function requestUpdate (property, val, todo) {
  const url = `/update/:${String(todo.id)}/:${property}`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ updatedVal: val })
  })
  return res
}

export async function requestDel (id) {
  const url = `/delete/:${String(id)}`
  const res = fetch(url, { method: 'DELETE' } )
  return res
}