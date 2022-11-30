import express from 'express'
import { getAll } from './db/queries.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors({ origin: '*', methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'] })
)

app.get('/', async (req, res) => {
  const result = await getAll()
  res.json(result)
})

app.listen(3000, () => { console.log('Listening on port: 3000') })
