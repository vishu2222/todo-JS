import  express  from "express"
import { connectDb, getTodos } from './db/queries.js'
// const path = require('path')

const app = express()
app.use(express.static('static')) // middleware express function to serve static files in a directory
connectDb()

app.get('/todos', async (req, res) => {
  const todos = await getTodos()
  res.send(todos.rows)
})

// app.get('/todos', async (req, res) => {
//   const todos = await (client.query('select * from todoSchema.todotable'))
//   console.log(todos.rows)
//   res.send(todos.rows)
//   // res.json(todos.rows) // returns a promise which resolves with the result of parsing the body text as JSON. it then internally calls res.send to send data. both res.send and res.json send json formated data, the diff is that res.json also converts invalid json types to json
// })

app.listen(3000)

// client.query(`INSERT INTO todoschema.todotable (id) VALUES (1);`)
//   .then(res => console.log(res.rows))
