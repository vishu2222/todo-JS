
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
