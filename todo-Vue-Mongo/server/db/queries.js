import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/todoDb')
  .then(console.log('connected to DB on port 27017:'))
  .catch(err => console.log('Couldnt connect to db:', err))

const todoSchema = new mongoose.Schema({
  txt: String,
  date: String,
  priority: String,
  notes: String,
  checkbox: Boolean
})

const todoModel = mongoose.model('todos', todoSchema) // todos is the collection name // https://mongoosejs.com/docs/index.html

export async function getAllTodos () {
  return await todoModel.find()
}

export async function insertTodo (todo) {
  const postTodo = todoModel({ txt: todo.txt })
  return await postTodo.save()
}

export async function deleteTodo (id) {
  const delTodo = await todoModel.deleteOne({ _id: id })
  if (delTodo.deletedCount === 0) { throw Error }
  return delTodo.deletedCount
}

export async function updateTodo (id, property, val) {
  const updateObject = { }
  updateObject[property] = val
  const updateTodoProperty = await todoModel.findByIdAndUpdate({ _id: id }, updateObject)
}
