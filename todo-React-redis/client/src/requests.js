export async function fetchTodos() {
    const res = await fetch('http://localhost:3003/')
    const todos = await res.json()
    return todos
}

export async function addTodo_request(newTodo) {
    await fetch("http://localhost:3003/", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(newTodo),
    });
}
