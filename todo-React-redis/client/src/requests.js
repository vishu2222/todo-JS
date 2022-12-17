
const url = 'http://localhost:3003/'

async function fetchTodos() {
    const res = await fetch(url)
    const todos = await res.json()
    return todos
}

async function addTodo(newTodo) {
    await fetch(url, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(newTodo),
    });
}

async function updateTodo(id, property, value) {
    await fetch(url + id, {
        headers: { "Content-Type": "application/json" },
        method: "PATCH",
        body: JSON.stringify({ property: property, value: value })
    })
}

async function deleteTodo(id) {
    await fetch(url + 'delete/' + id, {
        method: "DELETE"
    })
}

async function deleteCompleted() {
    await fetch(url + "delDone", {
        method: "DELETE"
    })
}

const reqs = {
    fetchTodos: fetchTodos,
    addTodo: addTodo,
    updateTodo: updateTodo,
    deleteTodo: deleteTodo,
    deleteCompleted: deleteCompleted
}
export default reqs
