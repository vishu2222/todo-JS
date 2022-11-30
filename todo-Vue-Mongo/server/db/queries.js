import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/todoDb')
  .then(console.log('connected to DB on port 27017:'))
  .catch(err => console.log('Couldnt connect to db:', err))

const todoSchema = new mongoose.Schema( {
  id: String,
  txt: String,
  date: String,
  priority: String,
  notes: String,
  checkbox: Boolean
})

const todoModel = mongoose.model('todos', todoSchema) // todos is the collection name 

export function getAll () {
  return todoModel.find()
}