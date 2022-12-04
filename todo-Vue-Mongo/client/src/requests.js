
export async function fetchTodos () {
  const url = 'http://localhost:3000/'
  const res = await fetch(url)
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

export async function requestDeleteDone () {
  const url = 'http://localhost:3000/deleteDone'
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
    body: JSON.stringify({ todoProperty: property, todoPropertyVal: val })
  })
  return result
}

export async function requestDeleteCompleted () {
  const url = 'http://localhost:3000/deleteDone'
  const result = await fetch(url, {
    method: 'DELETE'
  })
  return result
}

export async function requestCompleted () {
  const url = 'http://localhost:3000/completed'
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export async function requestPending () {
  const url = 'http://localhost:3000/pending'
  const res = await fetch(url)
  const data = await res.json()
  return data
}
