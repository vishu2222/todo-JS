
const url = 'http://localhost:3003/'

export async function fetchTodos() {
    const res = await fetch(url)
    const todos = await res.json()
    return todos
}

export async function addTodo_request(newTodo) {
    await fetch(url, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(newTodo),
    });
}

export async function updateTodo_request(id, property, value) {
    await fetch(url + id, {
        headers: { "Content-Type": "application/json" },
        method: "PATCH",
        body: JSON.stringify({ property: property, value: value })
    })
}

export async function deleteTodo_request(id) {
    await fetch(url + id, {
        method: "DELETE"
    })
}
