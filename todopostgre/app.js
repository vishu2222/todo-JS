import  express  from "express"
import { connectDb, getTodos, insertTodo } from './db/queries.js'
// const path = require('path')

const app = express()

// app.use((req, res, next) => {
//   console.log(req.path)
//   next()
// })

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded  // app.use(express.json()) // for parsing application/json // https://expressjs.com/en/4x/api.html#req

connectDb()

app.get('/todos', async (req, res) => {
  const todos = await getTodos()
  res.json(todos) // *
})

app.post('/addTodo', async (req, res) => {
  console.log(req)
  // await insertTodo(req.body)
  // res.send('200')
  res.json('todo added')
  // res.redirect('/')
})

app.use(express.static('static')) // middleware express function to serve static files in a directory


app.listen(3000)
