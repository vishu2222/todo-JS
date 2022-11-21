// const path = require('path')
import  express  from "express"
import { connectDb, getTodos, insertTodo } from './db/queries.js'
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json())
app.use(express.static('static')) // middleware express function to serve static files in a directory

connectDb()
app.get('/todos', async (req, res) => {
  try {
    const todos = await getTodos()
    res.json(todos)
  } catch(err) {
    console.log(err)
  }
})

app.post('/addTodo', async (req, res) => {
  await insertTodo(req.body.todo)
  res.json(200)
})

app.post('/update/:id/:property', (req, res) => {

})

app.listen(3000, () => {
  console.log("Listening on port 3000")
})

// app.use((req, res, next) => {
//   console.log(req.path)
//   next()
// })