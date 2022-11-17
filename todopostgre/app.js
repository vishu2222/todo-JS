const express = require('express')
const { Client } = require('pg')
// const path = require('path')

const app = express()
app.use(express.static('public'))

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
  res.json(todos.rows)
})

app.listen(3000)

// client.query(`INSERT INTO todoschema.todotable (id) VALUES (1);`)
//   .then(res => console.log(res.rows))
