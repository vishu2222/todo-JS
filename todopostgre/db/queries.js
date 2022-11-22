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
    const todos = await (client.query('SELECT * FROM todoSchema.todotable ORDER BY id;'))
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
    WHERE id = ${id};`
  return await client.query(updateQuery)
}

export async function deleteTodo (id) {
  const delQuery = `DELETE FROM todoschema.todotable
  WHERE id = ${id};`
  return await client.query(delQuery)
}

export async function deleteDone () {
  const delQuery = `DELETE FROM todoschema.todotable
  WHERE checkbox = 'true';`
  return await client.query(delQuery)
}

export async function getCompleted () {
  const query = `SELECT * FROM todoSchema.todotable
  WHERE checkbox = 'true' ORDER BY id;`
  return await client.query(query)
}

export async function getPending () {
  const query = `SELECT * FROM todoSchema.todotable
  WHERE checkbox = 'false' ORDER BY id;`
  return await client.query(query)
}