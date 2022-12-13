import redis from "redis";

const client = redis.createClient({
    host: '127.0.0.1',
    port: 5378
})

export async function connectRedis() {
    try {
        await client.connect()
        console.log('Redis Client Connected:')
        client.on('error', (err) => console.log('Redis Client Error', err));
    } catch (err) { console.log('Redis Client Connection Error:', err) }
}

export async function getTodos() {
    try {
        const data = await client.hGetAll('todosHashKey')
        const todoValues = Object.values(data)
        const todos = todoValues.map(todo => JSON.parse(todo))
        return todos
    } catch (e) { console.log(e); throw Error }
}

export async function insertTodo(todo) {
    await client.incr('counter')
    const newId = await client.get('counter')
    const newTodo = { id: newId, ...todo }
    client.hSet('todosHashKey', newId, JSON.stringify(newTodo))
}
