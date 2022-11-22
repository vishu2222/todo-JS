import  express  from "express"
import { connectDb, getTodos, insertTodo, updateTodo, deleteTodo, deleteDone, getCompleted, getPending } from './db/queries.js'
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json())
app.use(express.static('static')) // middleware express function to serve static files in a directory

connectDb()

app.get('/todos', async (req, res) => {
  try {
    const todos = await getTodos()
    res.json(todos)
  } catch(err) {
    console.log(err)
  }
})

app.post('/addTodo', async (req, res) => {
  await insertTodo(req.body.todo)
  res.json(200)
})

app.post('/update/:id/:property', async (req, res) => {
  const id = req.params.id.slice(1)
  const property = req.params.property.slice(1)
  const updatedVal = req.body.updatedVal
  const dbRes = await updateTodo(id, property, updatedVal)
  if (dbRes.rowCount === 1 ) { res.json(200) }
  else { res.json('Error') }
})

app.delete('/delete/:id', async (req, res) => {
  const id = req.params.id.slice(1)
  const dbRes = await deleteTodo(Number(id))
  res.json(`Recieved delete request for id ${id}`)
})

app.delete('/deleteDone', async (req, res) => {
  try {
    const dbRes = await deleteDone()
    if ( dbRes.rowCount >= 0 ) {
      res.json(200)
    }
  } catch(e) {
    console.log(e)
  }
})

app.get('/getCompleted', async (req, res) => {
  try {
    const dbRes = await getCompleted()
    res.json(dbRes.rows)
  } catch(e) { console.log(e) }
})

app.get('/getPending', async (req, res) => {
  try {
    const dbRes = await getPending()
    res.json(dbRes.rows)
  } catch(e) { console.log(e) }
})

app.listen(3000, () => {
  console.log("Listening on port 3000")
})

// app.use((req, res, next) => {
//   console.log(req.path)
//   next()
// })