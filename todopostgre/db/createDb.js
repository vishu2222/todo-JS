import pg from 'pg'
const Client = pg.Client

const client = new Client({
  user: 'todouser',
  host: 'localhost',
  database: 'tododb',
  password: 'todo',
  port: 5432
})

// connect to db
client.connect((err) => { if (err) { throw err } console.log('connected') })

const removeSeq = 'DROP SEQUENCE todoSchema.seq_id;'
const createSeq = 'CREATE SEQUENCE todoSchema.seq_id INCREMENT 1 START 1;'
const dropTable = 'DROP TABLE todoSchema.todotable;'
const createTableQuery = `CREATE TABLE IF NOT EXISTS todoSchema.todotable (
    id SERIAL PRIMARY KEY,
    txt VARCHAR(80),
    date VARCHAR(10) , -- CHECK (date >= CURRENT_DATE)
    priority VARCHAR(10) CHECK (priority in ('None','Low', 'Medium', 'High')), 
    notes VARCHAR(500),
    checkbox BOOLEAN DEFAULT 'false'
);`

client.query(removeSeq, (err, res) => console.log(err))
client.query(dropTable, (err, res) => console.log(err))
client.query(createSeq, (err, res) => console.log(err))
client.query(createTableQuery, (err, res) => console.log(err))

// sample inserts
// const insertQuery1 = `INSERT INTO todoSchema.todotable(id, txt, date, priority, notes, checkbox)
// VALUES (nextval('todoSchema.seq_id'), 'todo1', CURRENT_DATE, 'Low', 'todo1_txt', true);`
// const insertQuery2 = `INSERT INTO todoSchema.todotable(id, txt, date, priority, notes, checkbox)
// VALUES (nextval('todoSchema.seq_id'), 'todo2', CURRENT_DATE, 'Low', 'todo2_txt', false);`

// client.query(insertQuery1, (err, res) => console.log(err))
// client.query(insertQuery2, (err, res) => console.log(err))
// client.end()

// const checkdbExistsQuery = 'SELECT datname FROM pg_database WHERE datname = \'tododb\';'

// client.query(checkdbExistsQuery, (req, res) => {
//   if (res.rowCount === 0) {
//     client.query(createDbQuery).then(res => console.log(res)).catch(e => console.error(e.stack))
//     client.query(createSchema).then(res => console.log(res)).catch(e => console.error(e.stack))
//     client.query(createTableQuery).then(res => console.log(res)).catch(e => console.error(e.stack))
//   }
// })

//   console.log('res.rows:', res)
//   if (res.rows[0].datname !== 'tododb') { console.log('not there') }
//   console.log('Exists')
