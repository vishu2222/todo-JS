import express from 'express'
import { getAllTodos, insertTodo, deleteTodo, updateTodo } from './db/queries.js'
import cors from 'cors'

const app = express()
app.use(cors({ origin: '*', methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'] }))
app.use(express.json())

app.get('/', async (req, res) => {
  try {
    const todos = await getAllTodos()
    res.json(todos)
  } catch (err) { res.sendStatus(500) }
})

app.post('/addTodo', async (req, res) => {
  try {
    await insertTodo(req.body)
    return res.sendStatus(200)
  } catch (err) { res.sendStatus(500) }
})

app.delete('/delete/:id', async (req, res) => {
  try {
    await deleteTodo(req.params.id)
    res.sendStatus(200)
  } catch (err) { console.log('cant delete'); res.sendStatus(500) }
})

app.patch('/update/:id', async (req, res) => {
  updateTodo(req.params.id, req.body.todoProperty, req.body.todoVal)
  res.sendStatus(200)
})

app.listen(3000, () => { console.log('Listening on port: 3000') })
