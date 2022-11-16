const express = require('express')
const { Client } = require('pg')
// const path = require('path')

const clientDb = new Client({
  user: 'todouser',
  host: 'localhost',
  database: 'postgres',
  password: 'todo',
  port: 5432
})

clientDb.connect((err) => {
  if (err) { throw err }
  console.log('connected')
})
console.log(clientDb)
const app = express()
app.use(express.static('public'))

app.listen(3000)
