import express from "express"
import { getAll } from './db/queries.js'
import cors from   'cors'

const app = express()
app.use(express.json())
app.use(
    cors({
      origin: '*',
      methods: ['GET', 'PUT', 'DELETE', 'POST']
    })
  )

app.get('/', async (req, res) => {
  console.log('got request')
  let result = await getAll()
  console.log(result)
  res.json(result)
})

app.listen(3000, () => { console.log("Listening on port: 3000") })
