
export async function fetchTodos () {
  const res = await fetch('http://localhost:3000/')
  const data = await res.json()
  return data
}

export async function requestAddTodo (todoTxt) {
  const url = 'http://localhost:3000/addTodo'
  const result = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({ txt: todoTxt })
  })
  return result
}

export async function requestDelete (id) {
  const url = 'http://localhost:3000/delete/' + id
  const result = await fetch(url, {
    method: 'DELETE'
  })
  return result
}

export async function reqPropertyUpdate (id, property, val) {
  const url = 'http://localhost:3000/update/' + id
  const result = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'PATCH',
    body: JSON.stringify({ todoProperty: property, todoVal: val })
  })
  return result
}
