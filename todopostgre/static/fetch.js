
const urlTodos = 'http://localhost:3000/todos'

export async function fetchTodos (url = urlTodos) {
  const response = await fetch(url)
  const data = await response.json() // parses body text as JSON
  return data
}