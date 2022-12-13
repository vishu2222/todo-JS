import express from "express";
import { connectRedis, getTodos, insertTodo } from './db.js'
import cors from 'cors'

const app = express()
app.use(cors(({ origin: '*', methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'] })))
app.use(express.json())

await connectRedis()

app.get('/', async (req, res) => {
    try {
        const todos = await getTodos()
        res.json(todos)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.post('/', async (req, res) => {
    try {
        await insertTodo(req.body)
        res.sendStatus(200)
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
})

app.listen(3003, () => {
    console.log('Express server is live:')
})
