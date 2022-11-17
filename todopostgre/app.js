const express = require('express')
const { Client } = require('pg')
// const path = require('path')

const app = express()
app.use(express.static('static')) // middleware express function to serve static files in a directory

const client = new Client({
  user: 'todouser',
  host: 'localhost',
  database: 'tododb',
  password: 'todo',
  port: 5432
})

client.connect((err) => {
  if (err) console.log(err)
  else console.log('connected')
})

app.get('/todos', async (req, res) => {
  const todos = await (client.query('select * from todoSchema.todotable'))
  console.log(todos.rows)
  res.send(todos.rows)
  // res.json(todos.rows) // returns a promise which resolves with the result of parsing the body text as JSON. it then internally calls res.send to send data. both res.send and res.json send json formated data, the diff is that res.json also converts invalid json types to json
})

app.listen(3000)

// client.query(`INSERT INTO todoschema.todotable (id) VALUES (1);`)
//   .then(res => console.log(res.rows))
