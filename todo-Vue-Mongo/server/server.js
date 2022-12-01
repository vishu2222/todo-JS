import express from 'express'
import { getAllTodos, insertTodo } from './db/queries.js'
import cors from 'cors'

const app = express()
app.use(cors({ origin: '*', methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'] }))
app.use(express.json())

app.get('/', async (req, res) => {
  try {
    const todos = await getAllTodos()
    res.json(todos)
  } catch (err) { res.send(500) }
})

app.post('/addTodo', async (req, res) => {
  try {
    await insertTodo(req.body)
    return res.send('done')
  } catch (err) { res.send(500) }
})



app.listen(3000, () => { console.log('Listening on port: 3000') })
