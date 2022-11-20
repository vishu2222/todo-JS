// const { Client } = require('pg')
import pg from 'pg';
const Client = pg.Client;

const client = new Client({
  user: 'todouser',
  host: 'localhost',
  database: 'tododb',
  password: 'todo',
  port: 5432
})

export function connectDb () {  
  client.connect((err) => {
    if (err) console.log(err)
    else console.log('connected')
  })
}

export async function getTodos () {
  const todos = await (client.query('select * from todoSchema.todotable'))
  return todos.rows
}

export async function insertTodo (todo) {
  const insertQuery = `INSERT INTO todoschema.todotable (id, txt) 
  VALUES (nextval('todoSchema.seq_id'), '${todo.inputText}');`
  return await client.query(insertQuery)
}
