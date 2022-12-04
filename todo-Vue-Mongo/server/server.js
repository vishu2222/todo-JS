import express from 'express'
import { getAllTodos, insertTodo, deleteTodo, updateTodo, deleteDone, getCompleted, getPending } from './db/queries.js'
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

app.get('/completed', async (req, res) => {
  try {
    const todos = await getCompleted()
    res.json(todos)
  } catch (err) { res.sendStatus(500)}
})

app.get('/pending', async (req, res) => {
  try {
    const todos = await getPending()
    res.json(todos)
  } catch (err) { res.sendStatus(500)}
})

app.post('/addTodo', async (req, res) => {
  try {
    await insertTodo(req.body.txt)
    return res.sendStatus(200)
  } catch (err) { res.sendStatus(500) }
})

app.delete('/delete/:id', async (req, res) => {
  try {
    await deleteTodo(req.params.id)
    res.sendStatus(200)
  } catch (err) { console.log('cant delete'); res.sendStatus(500) }
})

app.delete('/deleteDone', async (req, res) => {
  try {
    await deleteDone()
    res.sendStatus(200)
  } catch (err) { console.log('cant delete'); res.sendStatus(500) }
})

app.patch('/update/:id', async (req, res) => {
  try {
    await updateTodo(req.params.id, req.body.todoProperty, req.body.todoPropertyVal)
    res.sendStatus(200)
  } catch (err) { console.log('cant update'); res.sendStatus(500) }
})

app.listen(3000, () => { console.log('Listening on port: 3000') })
