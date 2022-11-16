const express = require('express')
const { Client } = require('pg')
// const path = require('path')

const pgClient = new Client({
  user: 'todouser',
  host: 'localhost',
  database: 'postgres',
  password: 'todo',
  port: 5432
})

pgClient.connect((err) => {
  if (err) { throw err }
  console.log('connected')
})
console.log(pgClient)
const app = express()
app.use(express.static('public'))

app.listen(3000)
