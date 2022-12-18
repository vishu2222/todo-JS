import redis from "redis";

const client = redis.createClient({
    host: '127.0.0.1',
    port: 5378
})

export async function connectRedis() {
    try {
        await client.connect()
        console.log('Redis Client Connected:')
    } catch (err) {
        console.log('Redis Client Connection Error:', err);
        throw Error
    }
}

export async function getTodos() {
    try {
        const data = await client.hGetAll('todos')
        const todoValues = Object.values(data)
        const todos = todoValues.map(todo => JSON.parse(todo))
        return todos
    } catch (err) {
        console.log('db error:', err);
        throw Error
    }
}

export async function insertTodo(todo) {
    try {
        await client.incr('counter')
        const newId = await client.get('counter')
        const newTodo = { id: newId, ...todo }
        return await client.hSet('todos', newId, JSON.stringify(newTodo))
    } catch (err) {
        console.log('db err:', err);
        throw Error
    }
}

export async function updateTodo(id, property, value) {
    try {
        const data = await client.hGet('todos', id)
        const todo = JSON.parse(data)
        todo[property] = value
        return await client.hSet('todos', id, JSON.stringify(todo))
    } catch (err) {
        console.log('db err', err);
        throw Error
    }
}

export async function deleteTodo(id) {
    try {
        return await client.hDel('todos', id)
    } catch (err) {
        console.log('db err', err);
        throw Error
    }
}

export async function delDone() {
    try {
        const data = await client.hGetAll('todos')
        const todoValues = Object.values(data)
        const completedTodos = todoValues.map(todo => JSON.parse(todo)).filter(todo => todo.checkbox === true)
        const keys = completedTodos.map(todo => todo.id)
        keys.forEach(async (key) => await client.hDel('todos', key))
    } catch (err) {
        console.log('db err', err);
        throw Error
    }
}
