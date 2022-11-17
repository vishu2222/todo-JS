const { Client } = require('pg')

const pgClient = new Client({
  user: 'todouser',
  host: 'localhost',
  database: 'tododb',
  password: 'todo',
  port: 5432
})

// connect to db
pgClient.connect((err) => { if (err) { throw err } console.log('connected') })

const createDbQuery = 'CREATE DATABASE tododb;'
const createSchema = 'CREATE SCHEMA IF NOT EXISTS todoSchema;'
const createTableQuery = `CREATE TABLE IF NOT EXISTS todoSchema.todotable (
    id INT PRIMARY KEY,
    txt varchar(50),
    date TIMESTAMP,
    priority varchar(10),
    notes varchar(200),
    checkbox BOOLEAN
);`

pgClient.query(createDbQuery, (req, res) => console.log(req, res))
pgClient.query(createSchema, (req, res) => console.log(req, res))
pgClient.query(createTableQuery, (req, res) => console.log(req, res.rows))

// remove db
// const removeDbQuery = 'DROP DATABASE IF EXISTS tododb;'
// pgClient.query(removeDbQuery)
//   .then(res => console.log(res.rows[0]))
//   .catch(e => console.error(e.stack))

// const checkdbExistsQuery = 'SELECT datname FROM pg_database WHERE datname = \'tododb\';'

// pgClient.query(checkdbExistsQuery, (req, res) => {
//   if (res.rowCount === 0) {
//     pgClient.query(createDbQuery).then(res => console.log(res)).catch(e => console.error(e.stack))
//     pgClient.query(createSchema).then(res => console.log(res)).catch(e => console.error(e.stack))
//     pgClient.query(createTableQuery).then(res => console.log(res)).catch(e => console.error(e.stack))
//   }
// })

//   console.log('res.rows:', res)
//   if (res.rows[0].datname !== 'tododb') { console.log('not there') }
//   console.log('Exists')
