import express from "express";
import { connectRedis, getTodos, insertTodo, updateTodo, deleteTodo, delDone } from './db.js'
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

app.patch('/:id', async (req, res) => {
    try {
        await updateTodo(req.params.id, req.body.property, req.body.value)
        res.sendStatus(200)
    } catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
})

app.delete('/delete/:id', async (req, res) => {
    try {
        await deleteTodo(req.params.id)
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
})

app.delete('/delDone', async (req, res) => {
    try {
        delDone()
        res.sendStatus(200)
    } catch (err) {
        res.sendStatus(500)
    }
})


app.listen(3003, () => {
    console.log('Express server is live:')
})
