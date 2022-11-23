import  express  from "express"
import { connectDb, getTodos, insertTodo, updateTodo, deleteTodo, deleteDone, getCompleted, getPending, deleteAll } from './db/queries.js'
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json())
app.use(express.static('static')) // middleware express function to serve static files in a directory

connectDb()

app.get('/todos', async (req, res) => {
  try {
    const todos = await getTodos()
    res.status(200).json(todos)
  } catch(err) {
    console.log(err)
  }
})

app.post('/addTodo', async (req, res) => {
  try {
    await insertTodo(req.body.todo)
  } catch(e) {
    console.log(e)
    res.json(`couldn't add`)
  } 
  res.json(200)
})

app.post('/update/:id/:property', async (req, res) => {
  try {
    const id = req.params.id.slice(1)
    const property = req.params.property.slice(1)
    const updatedVal = req.body.updatedVal
    const dbRes = await updateTodo(id, property, updatedVal)
    if (dbRes.rowCount === 1 ) { res.json(200) }
    else { res.json('Error') }
    } catch(e) {
      console.log(e)
    }
})

app.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id.slice(1)
    const dbRes = await deleteTodo(Number(id))
    if (dbRes.rowCount === 1) {
      res.json(`Recieved delete request for id ${id}`)
    } else { res.json('Error') }
  } catch (e) {
    console.log(e)
  }
})

app.delete('/deleteDone', async (req, res) => {
  try {
    const dbRes = await deleteDone()
    console.log(dbRes)
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
    res.status(200).json(dbRes.rows)
  } catch(e) { console.log(e) }
})

app.get('/getPending', async (req, res) => {
  try {
    const dbRes = await getPending()
    res.status(200).json(dbRes.rows)
  } catch(e) { console.log(e) }
})

app.delete('/deleteAll', async (req, res) => {
  try {
    const dbRes = await deleteAll()
    // console.log(dbRes)
    res.json(200)
  } catch(e) { console.log(e) }
})

app.listen(3000, () => {
  console.log("Listening on port 3000")
})

// app.use((req, res, next) => {
//   console.log(req.path)
//   next()
// })