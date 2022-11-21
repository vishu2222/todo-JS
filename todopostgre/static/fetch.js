

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

