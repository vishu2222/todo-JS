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
    else console.log('connected to dataBase')
  })
}

export async function getTodos () {
  try {
    const todos = await (client.query('select * from todoSchema.todotable order by id'))
    return todos.rows
  } catch(err) {
    console.log(err)
  }
}

export async function insertTodo (todo) {
  const insertQuery = `INSERT INTO todoschema.todotable (id, txt) 
  VALUES (nextval('todoSchema.seq_id'), '${todo}');`
  return await client.query(insertQuery)
}

export async function updateTodo (id, property, updatedVal) {
  const updateQuery = `UPDATE todoschema.todotable
    SET ${property} = '${updatedVal}'
    WHERE id = ${id}`
  // console.log('updatedVal:', typeof(updatedVal), 'updateQuery', updateQuery)
  return await client.query(updateQuery)
}

export async function deleteTodo (id) {
  const delQuery = `DELETE FROM todoschema.todotable
  WHERE id = ${id}`
  return await client.query(delQuery)
}